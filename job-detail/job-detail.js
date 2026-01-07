// Job data, 1,2, 9-12 are AI generated the rest i got from bestjobs.eu and are in romania, 3 is from linkedin with US as location
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
            "Paid time off and holidays"
        ]
    },
    4: {
        title: "Electrical Engineer",
        company: "Scatec ASA",
        salary: "$21,400 - $23,600",
        location: "Bucharest, RO",
        posted: "1 month ago",
        type: "Full-time",
        level: "Entry Level",
        workType: "On-site",
        description: "Join a leading force in renewable energy, Scatec, as we expand into new global markets. Since, we've been at the forefront of developing, building, and operating solar, wind, and hydro power plants, along with storage solutions. Our mission is to deliver sustainable energy worldwide, protect the environment, and enhance quality of life through innovative technology integration.",
        responsibilities: [
            "As an Electrical Engineer in our Bucharest team, you'll play a crucial role in supporting senior engineers to ensure technical compliance and successful project completion. Your responsibilities will include:",
            "Adhering to and improving operating system guidelines.",
            "Conducting accurate preliminary technical assessments.",
            "Supporting the evaluation of technical business cases.",
            "Contributing to the development of technical base cases and project specifications.",
            "Reviewing and evaluating technical documentation and contracts.",
            "Ensuring detailed engineering implementation from the design stage.",
            "Assessing design change requests or proposals."
        ],
        requirements: [
            "A degree in Electrical/Electronical or Electromechanical Engineering",
            "4+ years of relevant experience.",
            "Familiarity with BESS technology, MV reticulation network design, AutoCAD, and high voltage networks is essential."
        ],
        benefits: [
            "A competitive salary",
            "A flexible work environment."
        ]
    },
    5: {
        title: "Low and Medium Voltage Design Engineer",
        company: "ECI PROJECT MANAGEMENT CONSULTING",
        salary: "$16,800 - $22,400",
        location: "Voluntari, RO",
        posted: "2 weeks ago",
        type: "Full-time",
        level: "Senior Level",
        workType: "On-site",
        description: "Compania noastra cauta un Inginer Proiectant specializat in joasa si medie tensiune pentru a se alatura echipei noastre din domeniul energetic. Daca esti pasionat de proiectarea sistemelor electrice si ai cunostinte solide in domeniul tensiunii joase si medii, aceasta pozitie ar putea fi potrivita pentru tine.",
        responsibilities: [
            "Proiectarea si dezvoltarea schemelor electrice pentru instalatiile de joasa si medie tensiune.",
            "Colaborarea stransa cu echipa de productie pentru implementarea proiectelor.",
            "Asigurarea conformitatii proiectelor cu normele si reglementarile in vigoare.",
            "Identificarea si solutionarea problemelor tehnice pe parcursul proiectelor."

        ],
        requirements: [
            "Studii superioare in domeniul ingineriei electrice.",
            "Experienta anterioara in proiectarea sistemelor electrice de joasa si medie tensiune.",
            "Cunostinte solide de proiectare asistata de calculator (ex: AutoCAD, EPLAN).",
            "Abilitati excelente de comunicare si lucru in echipa.",
            "Capacitatea de a lucra sub presiune si de a respecta termenele limita."
        ],
        benefits: [
            "Oportunitatea de a lucra in cadrul unei echipe profesioniste si dinamice.",
            "Posibilitatea de a contribui la proiecte complexe din domeniul energetic.",
            "Traininguri si cursuri de specializare pentru dezvoltarea profesionala continua.",
            "Pachet salarial atractiv si beneficii suplimentare."
        ]
    },
    6: {
        title: "Technical Engineer",
        company: "CNO Development",
        salary: "$17,800 - $19,700",
        location: "Balotesti, RO",
        posted: "6 days ago",
        type: "Full-time",
        level: "Entry Level",
        workType: "On-site",
        description: "Suntem un grup de companii activ în domeniile real-estate, construcții și dezvoltare imobiliară, căutând un Inginer Tehnic entuziast pentru a se alătura echipei noastre din București - Băneasa. Oferim un mediu de lucru dinamic și oportunități de dezvoltare profesională.",
        responsibilities: [
            "Oferirea de suport în dezvoltarea și urmărirea proiectelor de construcții, de la faza PUD/PUZ până la obținerea avizelor și autorizațiilor necesare.",
            "Organizarea documentațiilor tehnice și administrative.",
            "Colaborarea eficientă cu echipele tehnice și de execuție.",
            "Întocmirea și verificarea situațiilor de lucrări.",
            "Controlul costurilor."
        ],
        requirements: [
            "Absolvent de studii tehnice.",
            "Organizare și atenție la detalii.",
            "Cunoștințe obligatorii de Excel, AutoCAD și Outlook.",
            "Abilități de comunicare și lucru în echipă.",
            "Integritate, loialitate și disciplină."
        ],
        benefits: [
            "Salariu competitiv și tichete de masă.",
            "Asigurare medicală privată și telefon de serviciu.",
            "Bonusuri și prime.",
            "Condiții de lucru la standarde ridicate."
        ]
    },
    7: {
        title: "Arhitect / Arhitect de Interior Senior",
        company: "ATOZ BEST SERVICES",
        salary: "$21,000 - $28,000",
        location: "Bucharest, RO",
        posted: "1 month ago",
        type: "Full-time",
        level: "Mid Level",
        workType: "On-site",
        description: "Căutăm un Senior Interior Architect care să preia un rol-cheie în dezvoltarea și coordonarea proiectelor Design & Build, atât în zona de amenajări rezidențiale, cât și office premium. Poziția presupune nu doar responsabilitate de proiect, ci și coordonarea echipei interne de arhitecți juniori.",
        responsibilities: [
            "Dezvoltarea conceptelor de amenajare interioară, aliniate la brief, buget și execuție",
            "Realizarea prezentărilor 2D / 3D pentru clienți (AutoCAD , SketchUp si Ms Excel sunt obligatorii)",
            "Elaborarea documentațiilor tehnice complete pentru producția de mobilier și elemente custom (AutoCAD – planuri 2D cotate, detalii de execuție)",
            "Coordonarea echipei interne de arhitecți juniori (organizare, verificare, îndrumare)",
            "Coordonarea relației cu beneficiarii, furnizorii și echipele de execuție",
            "Urmărirea bugetelor, a listelor de operațiuni și a încadrării în termene (MS Excel)",
            "Vizite la șantier pentru verificarea calității execuției și respectarea proiectului"
        ],
        requirements: [
            "Absolvent al unei facultăți de Arhitectură / Arhitectură de Interior / Design de Produs",
            "Minimum 3 ani experiență reală în proiecte de amenajări interioare implementate",
            "Experiență confirmată în colaborarea cu producători de mobilier custom / companii de fit-out",
            "Cunoștințe bune de limba engleză",
            "Abilități de coordonare, leadership și asumare a deciziilor",
            "Simț estetic solid, gândire tehnică, atenție la detalii",
            "Capacitate de organizare, comunicare matură cu clientul și echipa"
        ],
        benefits: [
            "Bonus de performanță",
            "Abonament servicii medicale",
            "Traininguri de specializare"
        ]
    },
    8: {
        title: "BIM Coordinator",
        company: "IMSAT",
        salary: "$21,400 - $23,600",
        location: "Bucharest, RO",
        posted: "4 days ago",
        type: "Full-time",
        level: "Senior Level",
        workType: "On-site",
        description: "IMSAT este in cautarea unui BIM Coordinator pasionat de inovatie si tehnologii digitale, care sa contribuie la implementarea proceselor BIM in proiecte complexe de constructii. Daca ai experienta in coordonarea modelelor 3D si iti doresti un mediu de lucru profesionist, te invitam sa te alaturi echipei noastre din Bucuresti.",
        responsibilities: [
            "Coordoneaza procesele digitale BIM pentru etapele de proiectare si constructie;",
            "Defineste, urmareste si implementeaza nivelul de detaliere (LOD) conform cerintelor proiectului;",
            "Se asigura ca toti membrii echipei respecta procedurile BIM stabilite la nivel de departament;",
            "Centralizeaza si gestioneaza modelele 3D si datele structurale intr-un spatiu accesibil tuturor partilor implicate;",
            "Integreaza corect modelele 3D ale diferitelor specialitati si verifica coliziunile dintre acestea;",
            "Monitorizeaza implementarea parametrilor tehnici impusi de proiect;"
        ],
        requirements: [
            "Studii superioare (licenta + master) in domeniul constructiilor sau ingineriei;",
            "Experienta intre 2-5 ani in domeniul BIM;",
            "Cunostinte avansate de limba engleza (franceza, germana sau chineza constituie un avantaj);",
            "Abilitati solide in MS Office (Word, Excel, Access, PowerPoint, MS Project, Outlook);",
            "Experienta in utilizarea software-urilor BIM (Revit, Navisworks, Inventor, Tekla, AutoCAD);"
        ],
        benefits: [
            "Tichete de masa in valoare de 40 de lei / zi lucrata",
            "Abonament privat de servicii medicale",
            "Asigurare de risc si accidente",
            "Abonament Bookster",
            "Zile de concediu suplimentare in functie de vechime, pana la maxim 26 zile",
            "Zile libere si sprijin financiar pentru evenimentele importante din viata ta si a familiei tale"
        ]
    },
    9: {
    title: "Software Engineer (Frontend)",
    company: "CloudNova Labs",
    salary: "$90,000 - $110,000",
    location: "United States",
    posted: "4 days ago",
    type: "Full Time",
    level: "Mid Level",
    workType: "Remote",
    description: "This role focuses on building scalable and responsive web interfaces for cloud-based applications used by enterprise clients.",
    responsibilities: [
        "Develop and maintain frontend applications using React",
        "Collaborate with UX designers to implement user-friendly interfaces",
        "Optimize applications for performance and accessibility",
        "Integrate frontend components with REST APIs",
        "Participate in code reviews and agile ceremonies",
        "Maintain technical documentation"
    ],
    requirements: [
        "3+ years experience with JavaScript and React",
        "Strong knowledge of HTML, CSS, and modern frontend tooling",
        "Experience with Git and CI/CD workflows",
        "Understanding of responsive and accessible design",
        "Bachelor’s degree in Computer Science or related field",
        "Strong communication skills"
    ],
    benefits: [
        "Health, dental, and vision insurance",
        "Remote work flexibility",
        "Paid time off and holidays"
    ]
},
10: {
    title: "Mechanical Analysis Engineer",
    company: "Nova Engineering Group",
    salary: "$92,000 - $105,000",
    location: "Austin, TX",
    posted: "1 week ago",
    type: "Contract",
    level: "Mid Level",
    workType: "Hybrid",
    description: "The Mechanical Analysis Engineer supports structural integrity and performance assessments of mechanical systems using numerical simulation tools.",
    responsibilities: [
        "Perform structural and thermal FEA using ANSYS or Abaqus",
        "Evaluate stress, deformation, and safety factors",
        "Support design teams with simulation-driven insights",
        "Prepare technical reports and presentations",
        "Validate models using test data where available",
        "Assist in failure investigations"
    ],
    requirements: [
        "3–5 years experience in mechanical analysis",
        "Strong background in finite element methods",
        "Experience with ANSYS, Abaqus, or similar tools",
        "Knowledge of material behavior and structural mechanics",
        "Bachelor’s degree in Mechanical Engineering",
        "Ability to work independently on contract assignments"
    ],
    benefits: [
        "Competitive hourly rate",
        "Flexible contract duration",
        "Hybrid work schedule"
    ]
},
11: {
    title: "Software Engineer (Backend)",
    company: "DataBridge Solutions",
    salary: "$100,000 - $125,000",
    location: "United States",
    posted: "6 days ago",
    type: "Contract",
    level: "Senior Level",
    workType: "Remote",
    description: "This role involves designing and maintaining backend services that power high-traffic data platforms and internal tools.",
    responsibilities: [
        "Design and implement backend services using Python or Node.js",
        "Build and maintain RESTful APIs",
        "Optimize database queries and system performance",
        "Collaborate with frontend and DevOps teams",
        "Write unit and integration tests",
        "Participate in architecture and design discussions"
    ],
    requirements: [
        "5+ years backend development experience",
        "Strong experience with Python, Node.js, or Java",
        "Knowledge of SQL and NoSQL databases",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Comfortable working in a contract-based remote role",
        "Bachelor’s degree in Computer Science or equivalent experience"
    ],
    benefits: [
        "High hourly compensation",
        "Fully remote work",
        "Flexible working hours"
    ]
},
12: {
    title: "Product Development Engineer",
    company: "AeroDyn Systems",
    salary: "$85,000 - $97,000",
    location: "Huntsville, AL",
    posted: "3 days ago",
    type: "Full Time",
    level: "Mid Level",
    workType: "Onsite",
    description: "This role focuses on the development and validation of mechanical components for aerospace and defense applications.",
    responsibilities: [
        "Develop 3D CAD models and detailed engineering drawings",
        "Perform tolerance analysis and design for manufacturability",
        "Support prototype builds and testing activities",
        "Collaborate with analysis and manufacturing teams",
        "Participate in design reviews and technical meetings",
        "Maintain engineering documentation and BOMs"
    ],
    requirements: [
        "3+ years experience in mechanical product development",
        "Proficiency in SolidWorks or Creo",
        "Understanding of GD&T and aerospace standards",
        "Experience working with cross-functional teams",
        "Bachelor’s degree in Mechanical Engineering",
        "Strong analytical and organizational skills"
    ],
    benefits: [
        "Health and dental insurance",
        "401(k) with company match",
        "Relocation assistance"
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