// Job data
const jobData = {
    1: {
        title: "Senior Software Engineer",
        company: "TechCorp Solutions",
        salary: "$95,000 - $120,000",
        location: "San Francisco, CA",
        posted: "2 days ago",
        type: "Full-time",
        level: "Senior Level",
        workType: "Remote",
        description: "We are seeking an experienced Senior Software Engineer to join our dynamic development team. You will be responsible for designing and implementing scalable web applications, mentoring junior developers, and contributing to architectural decisions. This role offers the opportunity to work with cutting-edge technologies and make a significant impact on our product development.",
        responsibilities: [
            "Design, develop, and maintain high-quality software applications",
            "Lead technical architecture discussions and decision-making",
            "Mentor junior and mid-level developers",
            "Collaborate with product managers and designers to deliver features",
            "Conduct code reviews and ensure best practices",
            "Participate in agile development processes",
            "Troubleshoot and resolve complex technical issues"
        ],
        requirements: [
            "5+ years of professional software development experience",
            "Strong proficiency in JavaScript, Python, or Java",
            "Experience with modern frameworks (React, Angular, or Vue.js)",
            "Solid understanding of database design and optimization",
            "Experience with cloud platforms (AWS, Azure, or GCP)",
            "Strong problem-solving and communication skills",
            "Bachelor's degree in Computer Science or related field"
        ],
        benefits: [
            "Comprehensive health, dental, and vision insurance",
            "401(k) with company match",
            "Flexible work schedule and remote work options",
            "Professional development budget",
            "Unlimited PTO policy",
            "Stock options",
            "Home office stipend",
            "Team building activities and company events"
        ]
    },
    2: {
        title: "Marketing Manager",
        company: "BrandBoost Agency",
        salary: "$75,000 - $90,000",
        location: "New York, NY",
        posted: "5 days ago",
        type: "Full-time",
        level: "Mid Level",
        workType: "On-site",
        description: "Join our award-winning marketing agency as a Marketing Manager! You'll lead campaigns for Fortune 500 clients, manage a team of creative professionals, and drive strategic marketing initiatives. This is a perfect opportunity for a passionate marketer who wants to work with top-tier brands and create impactful campaigns.",
        responsibilities: [
            "Develop and execute comprehensive marketing strategies",
            "Manage and mentor a team of 5-7 marketing specialists",
            "Oversee multi-channel campaigns across digital and traditional media",
            "Analyze campaign performance and provide data-driven recommendations",
            "Build and maintain strong client relationships",
            "Manage marketing budgets and ensure ROI targets are met",
            "Stay current with industry trends and best practices"
        ],
        requirements: [
            "3-5 years of experience in marketing, preferably in an agency setting",
            "Proven track record of successful campaign management",
            "Strong leadership and team management skills",
            "Expertise in digital marketing channels (SEO, SEM, social media)",
            "Excellent communication and presentation skills",
            "Experience with marketing analytics tools (Google Analytics, etc.)",
            "Bachelor's degree in Marketing, Communications, or related field"
        ],
        benefits: [
            "Competitive salary with performance bonuses",
            "Health and dental insurance",
            "401(k) retirement plan",
            "Paid time off and holidays",
            "Professional development opportunities",
            "Creative and collaborative work environment",
            "Transit benefits",
            "Regular team outings and events"
        ]
    },
    3: {
        title: "Mechanical Design Engineer",
        company: "ZealoTech People",
        salary: "$96,000 - $101,760",
        location: "Greenville, SC",
        posted: "3 days ago",
        type: "Contract",
        level: "Mid Level",
        workType: "Remote",
        description: "This role is for a Hot Gas Path (HGP) Engineer who supports gas turbines by creating computer models, running engineering analyses, and helping solve part failures.",
        responsibilities: [
            "Build 2D/3D models of turbine parts",
            "Run thermal, structural, and vibration analyses using Classic ANSYS.",
            "Evaluate part life (fatigue, creep, oxidation, etc.).",
            "Prepare and present results in PowerPoint.",
            "Support root cause investigations (RCA).",
            "Review engineering drawings and models."
        ],
        requirements: [
            "4+ years engineering experience with gas turbines.",
            "2+ years using Classic ANSYS and 2+ years with UG/NX.",
            "Experience with RCA, GD&T, and Teamcenter/PLM tools.",
            "Strong communication and teamwork skills.",
            "Bachelor’s degree required; Master’s preferred.",
            "Flexible working hours."
        ],
        benefits: [
            "Health and dental insurance",
            "401(k) retirement plan",
            "Paid time off and holidays",
        ]
    }
};

// Get job ID from URL
function getJobIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || '1';
}

// Load applications from localStorage
function loadApplications() {
    const stored = localStorage.getItem('appliedJobs');
    return stored ? JSON.parse(stored) : [];
}

// Save applications to localStorage
function saveApplications(applications) {
    localStorage.setItem('appliedJobs', JSON.stringify(applications));
}

// Check if CV is uploaded
function isCVUploaded() {
    return localStorage.getItem('cvUploaded') === 'true';
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

// Apply for job
function applyForJob(jobId) {
    if (!isCVUploaded()) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popupMessage');
        popup.className = 'popup error';
        popupMessage.textContent = 'Error: Please upload your CV before applying for jobs. Go to My Profile to upload your CV.';
        showPopup();
        return;
    }

    const job = jobData[jobId];
    const appliedJobs = loadApplications();
    const alreadyApplied = appliedJobs.some(app => app.id === parseInt(jobId));
    
    if (alreadyApplied) {
        return;
    }

    appliedJobs.push({
        id: parseInt(jobId),
        title: job.title,
        company: job.company,
        date: new Date().toLocaleDateString()
    });

    saveApplications(appliedJobs);

    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popup.className = 'popup success';
    popupMessage.textContent = `Success! Your application for ${job.title} at ${job.company} has been submitted.`;
    showPopup();

    // Reload the page to update the button
    setTimeout(() => {
        location.reload();
    }, 2000);
}

// Load job details
function loadJobDetails() {
    const jobId = getJobIdFromURL();
    const job = jobData[jobId];

    if (!job) {
        document.getElementById('jobDetailContent').innerHTML = '<p>Job not found.</p>';
        return;
    }

    const appliedJobs = loadApplications();
    const alreadyApplied = appliedJobs.some(app => app.id === parseInt(jobId));
    const workTypeClass = job.workType.toLowerCase().replace('-', '');
    
    const html = `
        <div class="job-header">
            <h1 class="job-title">${job.title}</h1>
            <div class="job-company">${job.company}</div>
            <div class="job-tags">
                <span class="tag ${workTypeClass}">${job.workType}</span>
                <span class="tag">${job.type}</span>
                <span class="tag">${job.level}</span>
            </div>
            <div class="job-salary">${job.salary}</div>
        </div>

        <div class="job-meta">
            <div class="meta-item">📍 ${job.location}</div>
            <div class="meta-item">🕒 Posted ${job.posted}</div>
        </div>

        <div class="section">
            <h2 class="section-title">Job Description</h2>
            <div class="section-content">
                <p>${job.description}</p>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Key Responsibilities</h2>
            <div class="section-content">
                <ul>
                    ${job.responsibilities.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Requirements</h2>
            <div class="section-content">
                <ul>
                    ${job.requirements.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Benefits Package</h2>
            <div class="benefits-grid">
                ${job.benefits.map(benefit => `<div class="benefit-item">${benefit}</div>`).join('')}
            </div>
        </div>

        <button class="apply-button" id="applyBtn" ${alreadyApplied ? 'disabled' : ''}>
            ${alreadyApplied ? 'Already Applied' : 'Apply for this Position'}
        </button>
    `;

    document.getElementById('jobDetailContent').innerHTML = html;

    // Add event listener to apply button
    const applyBtn = document.getElementById('applyBtn');
    if (applyBtn && !alreadyApplied) {
        applyBtn.addEventListener('click', () => applyForJob(jobId));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadJobDetails();
    
    // Close popup events
    document.getElementById('popupClose').addEventListener('click', closePopup);
    document.getElementById('overlay').addEventListener('click', closePopup);
});