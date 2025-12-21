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
document.addEventListener('DOMContentLoaded', function() {
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

    // Close popup events
    document.getElementById('popupClose').addEventListener('click', closePopup);
    document.getElementById('overlay').addEventListener('click', closePopup);

    // Initialize display
    updateApplicationsList();
    updateApplicationCount();
});