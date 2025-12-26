// Store original values for cancel functionality
let originalUserData = {};

// Load user data from localStorage
function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userEmail = localStorage.getItem('userEmail') || userData.email || 'user@example.com';
    
    // Set default values if no data exists
    const firstName = userData.firstName || 'John';
    const lastName = userData.lastName || 'Doe';
    
    // Populate fields
    document.getElementById('firstName').value = firstName;
    document.getElementById('lastName').value = lastName;
    document.getElementById('userEmail').value = userEmail;
    
    // Store original data for cancel
    originalUserData = { firstName, lastName, email: userEmail };
    
    return { firstName, lastName, email: userEmail };
}

// Save user data (prepared for database integration)
function saveUserData(userData) {
    // Currently saves to localStorage, need to replace with API call to save to database
    
    const existingData = JSON.parse(localStorage.getItem('userData') || '{}');
    const updatedData = {
        ...existingData,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email
    };
    
    localStorage.setItem('userData', JSON.stringify(updatedData));
    localStorage.setItem('userEmail', userData.email);
    
    // Update original data after successful save
    originalUserData = userData;
}

// Toggle edit mode
function toggleEditMode(isEditing) {
    const inputs = document.querySelectorAll('.info-input');
    const editBtn = document.getElementById('editBtn');
    const editActions = document.getElementById('editActions');
    
    inputs.forEach(input => {
        input.disabled = !isEditing;
    });
    
    if (isEditing) {
        editBtn.style.display = 'none';
        editActions.style.display = 'inline-block';
    } else {
        editBtn.style.display = 'inline-block';
        editActions.style.display = 'none';
    }
}

// Handle save changes
function handleSave() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    
    // Validation - Check if fields are empty
    if (!firstName || !lastName || !email) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popupMessage');
        popup.className = 'popup error';
        popupMessage.textContent = 'Error: All fields are required.';
        showPopup();
        return;
    }
    
    // Email validation - Check for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popupMessage');
        popup.className = 'popup error';
        popupMessage.textContent = 'Error: Please enter a valid email address (e.g., user@example.com).';
        showPopup();
        return;
    }
    
    const userData = { firstName, lastName, email };
    
    // Save data (prepared for database)
    saveUserData(userData);
    
    // Show success message
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popup.className = 'popup success';
    popupMessage.textContent = 'Profile updated successfully!';
    showPopup();
    
    // Exit edit mode
    toggleEditMode(false);
}

// Handle cancel
function handleCancel() {
    // Restore original values
    document.getElementById('firstName').value = originalUserData.firstName;
    document.getElementById('lastName').value = originalUserData.lastName;
    document.getElementById('userEmail').value = originalUserData.email;
    
    // Exit edit mode
    toggleEditMode(false);
}

// Load applications from localStorage
function loadApplications() {
    const stored = localStorage.getItem('appliedJobs');
    return stored ? JSON.parse(stored) : [];
}

// Update applications list display
function updateApplicationsList() {
    const appliedJobs = loadApplications();
    const list = document.getElementById('applicationsList');
    
    if (appliedJobs.length === 0) {
        list.innerHTML = '<div class="no-applications">You haven\'t applied to any jobs yet.</div>';
        return;
    }

    list.innerHTML = appliedJobs.map(app => `
        <div class="application-item">
            <div>
                <div class="application-title">${app.title}</div>
                <div class="application-company">${app.company}</div>
            </div>
            <div class="application-date">Applied: ${app.date}</div>
        </div>
    `).join('');
}

// Update application count
function updateApplicationCount() {
    const appliedJobs = loadApplications();
    document.getElementById('applicationCount').textContent = appliedJobs.length;
}

// Show/hide popup
function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

// CV Upload functionality
function setupCVUpload() {
    const fileInput = document.getElementById('cvUpload');
    const fileName = document.getElementById('fileName');
    const currentCV = document.getElementById('currentCV');
    const cvLink = document.getElementById('cvLink');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');

    // Check if CV is already uploaded
    const cvUploaded = localStorage.getItem('cvUploaded');
    const cvFileName = localStorage.getItem('cvFileName');
    
    if (cvUploaded === 'true' && cvFileName) {
        fileName.textContent = cvFileName;
        currentCV.style.display = 'block';
        cvLink.textContent = cvFileName;
    }

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            fileName.textContent = file.name;
            
            if (file.type === 'application/pdf') {
                // Now need to replace with API call to upload to database - backend here

                localStorage.setItem('cvUploaded', 'true');
                localStorage.setItem('cvFileName', file.name);
                
                popup.className = 'popup success';
                popupMessage.textContent = 'CV uploaded successfully!';
                showPopup();
                
                currentCV.style.display = 'block';
                cvLink.textContent = file.name;
                cvLink.href = URL.createObjectURL(file);
            } else {
                localStorage.setItem('cvUploaded', 'false');
                
                popup.className = 'popup error';
                popupMessage.textContent = 'Error: Please upload a PDF file only.';
                showPopup();
                fileName.textContent = 'No file chosen';
                fileInput.value = '';
            }
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load user data
    loadUserData();
    
    // Setup edit button
    document.getElementById('editBtn').addEventListener('click', () => toggleEditMode(true));
    
    // Setup save/cancel buttons
    document.getElementById('saveBtn').addEventListener('click', handleSave);
    document.getElementById('cancelBtn').addEventListener('click', handleCancel);
    
    // Close popup events
    document.getElementById('popupClose').addEventListener('click', closePopup);
    document.getElementById('overlay').addEventListener('click', closePopup);
    
    // Initialize CV upload
    setupCVUpload();
    
    // Initialize applications display
    updateApplicationsList();
    updateApplicationCount();
});