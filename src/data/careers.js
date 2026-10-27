// CareerQuest Comprehensive Career Database
// Covers all 15 domains, Indian educational streams after Class 10, skills, and pathways

export const CAREER_DOMAINS = [
  'Engineering & Technology',
  'Medical & Healthcare',
  'Commerce, Finance & Business',
  'Law & Government',
  'Humanities & Social Sciences',
  'Design & Creative Industries',
  'Media & Communication',
  'Science & Research',
  'Agriculture & Environment',
  'Aviation & Transport',
  'Hospitality & Tourism',
  'Sports & Fitness',
  'Education',
  'Skilled & Vocational Careers',
  'Emerging Technologies'
];

export const EDUCATIONAL_STREAMS = [
  { id: 'all', label: 'All Streams' },
  { id: 'Science PCM', label: 'Science (PCM)' },
  { id: 'Science PCB', label: 'Science (PCB / PCMB)' },
  { id: 'Commerce', label: 'Commerce (with/without Maths)' },
  { id: 'Humanities', label: 'Humanities / Arts' },
  { id: 'Vocational', label: 'Vocational / Polytechnic / ITI' },
  { id: 'Any Stream', label: 'Any Stream' }
];

export const CAREERS = [
  // 1. ENGINEERING & TECHNOLOGY
  {
    id: 'software-developer',
    name: 'Software Developer',
    domain: 'Engineering & Technology',
    streams: ['Science PCM', 'Vocational'],
    shortDescription: 'Designs, writes, tests, and maintains applications and systems that run on computers, phones, and the web.',
    whatTheyDo: [
      'Write clean, efficient code using languages like Python, Java, JavaScript, or C++',
      'Collaborate with designers to turn visual layouts into working software',
      'Test programs to find and fix bugs or performance slowdowns',
      'Deploy updates and build security features into modern web and mobile apps'
    ],
    workEnvironment: ['Technology companies', 'Startup hubs', 'Banking & finance IT wings', 'Remote & hybrid engineering teams'],
    skillsToExplore: ['Logical thinking', 'Basic Python/Scratch coding', 'Algorithmic problem-solving', 'Attention to detail', 'Teamwork'],
    usefulSchoolSubjects: ['Mathematics', 'Computer Science / Informatics', 'Physics', 'English'],
    educationalPathways: [
      'Class 10 with strong interest in Mathematics & Science',
      'Class 11–12 with Science (PCM - Physics, Chemistry, Maths) or Computer Science vocational',
      'Appear for entrance tests (JEE Main, State CETs, or University entrances)',
      'Undergraduate: B.Tech / B.E. in Computer Science / IT or BCA / B.Sc Computer Science',
      'Alternative route: 3-year Polytechnic Diploma in Computer Engg after Class 10 → Lateral entry to 2nd year B.Tech',
      'Build personal software projects, contribute to open-source, and complete summer internships'
    ],
    relatedCareers: ['Web Developer', 'Mobile App Developer', 'Cloud Engineer', 'DevOps Specialist'],
    beginnerResources: ['Harvard CS50x (Open Access)', 'Python for Beginners via W3Schools', 'Scratch MIT Game Logic'],
    roadmapId: 'engineering-software',
    interestDimensions: ['technology', 'analytical', 'practical']
  },
  {
    id: 'ai-ml-engineer',
    name: 'Artificial Intelligence & ML Engineer',
    domain: 'Engineering & Technology',
    streams: ['Science PCM'],
    shortDescription: 'Builds smart algorithms that learn from data to recognize speech, translate languages, and predict trends.',
    whatTheyDo: [
      'Train machine learning models on massive datasets of text, images, or sensor values',
      'Fine-tune algorithms to improve prediction accuracy and fairness',
      'Work on generative AI, computer vision, and speech recognition applications',
      'Evaluate ethical considerations such as dataset bias and user privacy'
    ],
    workEnvironment: ['AI research labs', 'Autonomous vehicle companies', 'Healthcare diagnostic firms', 'Global tech giants'],
    skillsToExplore: ['Mathematics & Statistics', 'Curiosity about neural networks', 'Python programming', 'Data visualization'],
    usefulSchoolSubjects: ['Mathematics (Calculus, Statistics)', 'Physics', 'Computer Science'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCM + Computer Science preferred)',
      'Undergraduate: B.Tech in AI/ML, Computer Science, or Data Science',
      'Master’s degree (M.Tech / M.S.) often beneficial for advanced research roles',
      'Work on machine learning competitions (Kaggle) and research papers'
    ],
    relatedCareers: ['Data Scientist', 'Robotics Engineer', 'Computational Linguist'],
    beginnerResources: ['Google AI for Everyone', 'Kaggle Learn Micro-courses', '3Blue1Brown Essence of Linear Algebra'],
    roadmapId: 'engineering-software',
    interestDimensions: ['technology', 'analytical', 'scientific']
  },
  {
    id: 'cybersecurity-analyst',
    name: 'Cybersecurity Analyst',
    domain: 'Engineering & Technology',
    streams: ['Science PCM', 'Vocational'],
    shortDescription: 'Protects computer networks, mobile devices, and sensitive digital databases from hacker attacks and data theft.',
    whatTheyDo: [
      'Monitor computer networks for unauthorized access and suspicious traffic',
      'Conduct ethical vulnerability tests to discover system weaknesses before hackers do',
      'Implement digital firewalls, encryption keys, and multi-factor security protocols',
      'Train employees on recognizing phishing scams and safe digital hygiene'
    ],
    workEnvironment: ['Cyber defence centers', 'Banking & financial networks', 'Government security agencies', 'Consulting firms'],
    skillsToExplore: ['Networking basics', 'Linux operating system', 'Curiosity about security puzzles', 'Ethical mindset'],
    usefulSchoolSubjects: ['Computer Science', 'Mathematics', 'Physics', 'English'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science PCM or Commerce/Vocational with IT',
      'B.Tech in Cybersecurity / Computer Science, or B.Sc Cyber Forensics / BCA',
      'Industry certifications: CompTIA Security+, CEH (Certified Ethical Hacker)',
      'Practical participation in Capture-The-Flag (CTF) security tournaments'
    ],
    relatedCareers: ['Information Security Manager', 'Ethical Hacker', 'Digital Forensics Investigator'],
    beginnerResources: ['OverTheWire Bandit Wargames', 'TryHackMe beginner paths', 'Cisco Networking Academy intro'],
    roadmapId: 'engineering-software',
    interestDimensions: ['technology', 'analytical', 'practical']
  },
  {
    id: 'robotics-engineer',
    name: 'Robotics Engineer',
    domain: 'Engineering & Technology',
    streams: ['Science PCM'],
    shortDescription: 'Combines mechanical structures, electrical sensors, and software code to create intelligent automated robots.',
    whatTheyDo: [
      'Design robot chassis, joints, and motorized actuators using CAD software',
      'Write embedded code that reads ultrasonic, lidar, or camera sensor inputs',
      'Test industrial robotic arms for automotive assembly lines or surgical tools',
      'Calibrate autonomous drones and mobile warehouse rovers'
    ],
    workEnvironment: ['Advanced manufacturing plants', 'Aerospace centers', 'Medical robotics labs', 'Agritech robotics startups'],
    skillsToExplore: ['Arduino / Raspberry Pi kits', 'Hands-on tinkering with motors', 'Physics mechanics', 'Basic C/C++ or Python'],
    usefulSchoolSubjects: ['Physics', 'Mathematics', 'Computer Science'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCM)',
      'Entrance exams (JEE / State Engineering exams)',
      'B.Tech in Robotics, Mechatronics, Mechanical, or Electrical & Electronics',
      'Robotics club projects, national bot competitions, and specialized M.Tech'
    ],
    relatedCareers: ['Mechatronics Engineer', 'Automation Specialist', 'Aerospace Engineer'],
    beginnerResources: ['Tinkercad Circuits simulator', 'Arduino Starter guides', 'FIRST Robotics student resources'],
    roadmapId: 'engineering-core',
    interestDimensions: ['practical', 'technology', 'analytical']
  },
  {
    id: 'mechanical-engineer',
    name: 'Mechanical Engineer',
    domain: 'Engineering & Technology',
    streams: ['Science PCM', 'Vocational'],
    shortDescription: 'Designs, manufactures, and tests mechanical machines, engines, vehicles, heating systems, and manufacturing equipment.',
    whatTheyDo: [
      'Draft 3D computer models of engines, pumps, gears, and structural frames',
      'Perform stress tests and thermodynamic simulations on materials',
      'Oversee production processes on factory assembly floors',
      'Develop energy-efficient cooling systems and electric vehicle drivetrains'
    ],
    workEnvironment: ['Automobile manufacturers', 'Heavy engineering plants', 'Power generation plants', 'Defence ordnance factories'],
    skillsToExplore: ['Spatial visualization', 'Physics mechanics', 'Tinkering with bicycle/engine parts', 'Computer-aided drafting'],
    usefulSchoolSubjects: ['Physics', 'Mathematics', 'Chemistry'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCM)',
      'B.Tech / B.E. in Mechanical Engineering',
      'Alternative: 3-year Polytechnic Diploma in Mechanical Engg after Class 10 → Lateral entry to B.Tech',
      'Hands-on Formula Student or SAE collegiate design competitions'
    ],
    relatedCareers: ['Automobile Engineer', 'Aerospace Engineer', 'Industrial Engineer'],
    beginnerResources: ['Onshape Free CAD for Students', 'Khan Academy Physics - Mechanics', 'How Things Work documentary series'],
    roadmapId: 'engineering-core',
    interestDimensions: ['practical', 'analytical', 'scientific']
  },
  {
    id: 'civil-engineer',
    name: 'Civil Engineer',
    domain: 'Engineering & Technology',
    streams: ['Science PCM', 'Vocational'],
    shortDescription: 'Plans, designs, and oversees the construction of essential infrastructure like bridges, metro rails, highways, and water networks.',
    whatTheyDo: [
      'Survey terrain and soil conditions prior to foundation digging',
      'Calculate load-bearing capacities for high-rise buildings and flyovers',
      'Coordinate on-site construction safety and material quality checks',
      'Design sustainable urban drainage and flood prevention systems'
    ],
    workEnvironment: ['Construction sites', 'Infrastructure consultancy offices', 'Public Works Departments (PWD)', 'Railway & metro corporations'],
    skillsToExplore: ['Geometry & spatial reasoning', 'Interest in architecture and bridges', 'Site organization', 'Team communication'],
    usefulSchoolSubjects: ['Physics', 'Mathematics', 'Geography'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCM)',
      'B.Tech in Civil Engineering',
      'Alternative: 3-year Polytechnic Diploma in Civil Engineering after Class 10',
      'M.Tech in Structural, Geotechnical, or Transportation Engineering for specialized design'
    ],
    relatedCareers: ['Architect', 'Urban Planner', 'Environmental Engineer', 'Surveyor'],
    beginnerResources: ['Civil Engineering 101 video series', 'SimCity / Cities: Skylines urban planning simulations', 'NPTEL Intro to Civil Engg'],
    roadmapId: 'engineering-core',
    interestDimensions: ['practical', 'analytical', 'leadership']
  },

  // 2. MEDICAL & HEALTHCARE
  {
    id: 'general-physician',
    name: 'Medical Doctor (MBBS / Physician)',
    domain: 'Medical & Healthcare',
    streams: ['Science PCB'],
    shortDescription: 'Diagnoses illnesses, prescribes treatments, guides preventive care, and saves lives across hospitals and clinics.',
    whatTheyDo: [
      'Examine patients, review medical histories, and interpret lab tests and X-rays',
      'Prescribe medications, therapies, and lifestyle modifications',
      'Provide emergency trauma care and stabilize critical conditions',
      'Conduct health awareness camps in rural and suburban communities'
    ],
    workEnvironment: ['Government & private hospitals', 'Community healthcare centers', 'Primary health clinics', 'Medical colleges'],
    skillsToExplore: ['Empathy and patience', 'Biology interest', 'Observation skills', 'Grace under pressure', 'Lifelong study habit'],
    usefulSchoolSubjects: ['Biology', 'Chemistry', 'Physics', 'English'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCB: Physics, Chemistry, Biology)',
      'Appear for NEET-UG (National Eligibility cum Entrance Test)',
      'Complete 5.5-year MBBS degree (including 1-year mandatory rotatory internship)',
      'Postgraduate specialization (MD / MS) via NEET-PG in surgery, pediatrics, medicine, etc.'
    ],
    relatedCareers: ['Surgeon', 'Pediatrician', 'Dentist', 'Public Health Specialist'],
    beginnerResources: ['Khan Academy Health & Medicine', 'NCERT Biology deep dives', 'Crash Course Anatomy & Physiology'],
    roadmapId: 'medical-healthcare',
    interestDimensions: ['scientific', 'social', 'analytical']
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist & Pharmaceutical Scientist',
    domain: 'Medical & Healthcare',
    streams: ['Science PCB', 'Science PCM'],
    shortDescription: 'Dispenses medications safely, counsels patients on dosages, and researches new drug formulations in laboratories.',
    whatTheyDo: [
      'Ensure prescribed medicines do not cause adverse chemical interactions',
      'Compound and test pharmaceutical syrups, tablets, and vaccines',
      'Manage hospital pharmacy inventories and regulatory compliance',
      'Conduct quality control assays on drug batches before market release'
    ],
    workEnvironment: ['Hospitals and retail pharmacies', 'Pharmaceutical manufacturing units', 'Clinical trial laboratories', 'Drug regulatory boards'],
    skillsToExplore: ['Chemistry affinity', 'Meticulous accuracy', 'Careful record keeping', 'Communication with patients'],
    usefulSchoolSubjects: ['Chemistry', 'Biology', 'Physics', 'Mathematics'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCB or PCM)',
      'B.Pharm (4-year Bachelor of Pharmacy) or D.Pharm (2-year Diploma in Pharmacy)',
      'Registration with State Pharmacy Council to practice',
      'Optional M.Pharm / Pharm.D for pharmaceutical research and clinical trials'
    ],
    relatedCareers: ['Pharmacologist', 'Biochemist', 'Clinical Research Associate'],
    beginnerResources: ['Intro to Pharmacology by open universities', 'Khan Academy Organic Chemistry basics'],
    roadmapId: 'medical-healthcare',
    interestDimensions: ['scientific', 'practical', 'social']
  },
  {
    id: 'physiotherapist',
    name: 'Physiotherapist',
    domain: 'Medical & Healthcare',
    streams: ['Science PCB'],
    shortDescription: 'Helps patients recover physical movement and manage pain after surgeries, sports injuries, accidents, or chronic illness.',
    whatTheyDo: [
      'Assess muscle strength, joint mobility, and posture abnormalities',
      'Design tailored rehabilitation exercises, stretches, and manual therapy routines',
      'Use therapeutic ultrasound, electrical stimulation, and hydrotherapy',
      'Assist athletes in injury prevention and fitness conditioning'
    ],
    workEnvironment: ['Orthopedic and multi-specialty hospitals', 'Sports academies & teams', 'Private rehab clinics', 'Home healthcare services'],
    skillsToExplore: ['Physical stamina', 'Interpersonal warmth', 'Knowledge of human anatomy', 'Patience with slow recovery'],
    usefulSchoolSubjects: ['Biology', 'Physics', 'Physical Education'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCB)',
      'Appear for state/university paramedical entrance tests',
      'Complete 4.5-year BPT (Bachelor of Physiotherapy) including 6-month internship',
      'Master of Physiotherapy (MPT) in Orthopedics, Neurology, or Sports'
    ],
    relatedCareers: ['Occupational Therapist', 'Sports Coach', 'Fitness Trainer', 'Prosthetist'],
    beginnerResources: ['Anatomy in Motion student guides', 'Physiotherapy rehabilitation basics video library'],
    roadmapId: 'medical-healthcare',
    interestDimensions: ['social', 'practical', 'scientific']
  },
  {
    id: 'medical-lab-technologist',
    name: 'Medical Laboratory Technologist',
    domain: 'Medical & Healthcare',
    streams: ['Science PCB', 'Vocational'],
    shortDescription: 'Conducts chemical, hematological, and microscopic tests on blood, tissue, and fluid samples to help doctors diagnose diseases.',
    whatTheyDo: [
      'Operate automated hematology analyzers, PCR machines, and centrifuges',
      'Prepare microscope slides to check for bacteria, parasites, and abnormal cells',
      'Maintain sterile lab conditions and ensure rigorous diagnostic accuracy',
      'Enter test records into laboratory information systems for doctor review'
    ],
    workEnvironment: ['Diagnostic pathology labs', 'Blood banks', 'Hospital diagnostic wings', 'Biomedical research institutes'],
    skillsToExplore: ['Precision with laboratory instruments', 'Safety protocol adherence', 'Scientific observation', 'Computer entry'],
    usefulSchoolSubjects: ['Biology', 'Chemistry', 'Computer Science'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCB) or Paramedical vocational stream',
      'B.Sc in Medical Laboratory Technology (BMLT - 3 to 4 years) or 2-year DMLT diploma',
      'Hands-on hospital pathology internship'
    ],
    relatedCareers: ['Radiology Technician', 'Microbiologist', 'Phlebotomist'],
    beginnerResources: ['Virtual Biology Lab simulations', 'NCERT Lab manuals for Class 9–10'],
    roadmapId: 'medical-healthcare',
    interestDimensions: ['scientific', 'practical', 'analytical']
  },

  // 3. COMMERCE, FINANCE & BUSINESS
  {
    id: 'chartered-accountant',
    name: 'Chartered Accountant (CA)',
    domain: 'Commerce, Finance & Business',
    streams: ['Commerce', 'Any Stream'],
    shortDescription: 'Manages corporate financial auditing, taxation, business advisory, budgeting, and legal compliance.',
    whatTheyDo: [
      'Audit balance sheets and financial statements to verify accuracy and prevent fraud',
      'Advise companies on tax planning, GST filings, and cost optimization',
      'Evaluate investment proposals and structure corporate mergers',
      'Ensure strict adherence to financial regulations and corporate governance laws'
    ],
    workEnvironment: ['Auditing firms (Big 4 & boutique)', 'Multinational corporations', 'Independent advisory practice', 'Banking institutions'],
    skillsToExplore: ['Numerical aptitude', 'Ethical rigor', 'Patience with detailed documentation', 'Analytical thinking'],
    usefulSchoolSubjects: ['Accountancy', 'Mathematics', 'Economics', 'Business Studies'],
    educationalPathways: [
      'Class 10 → Class 11–12 Commerce (Mathematics recommended, but any stream eligible)',
      'Register with ICAI (Institute of Chartered Accountants of India)',
      'Step 1: CA Foundation exam (after Class 12)',
      'Step 2: CA Intermediate + 2-3 years mandatory practical Articleship training under a practicing CA',
      'Step 3: CA Final examination to earn ICAI membership'
    ],
    relatedCareers: ['Company Secretary (CS)', 'CMA (Cost & Management Accountant)', 'Financial Analyst'],
    beginnerResources: ['ICAI BOS Knowledge Portal (free student resources)', 'Basic Accounting principles videos'],
    roadmapId: 'commerce-ca',
    interestDimensions: ['analytical', 'leadership', 'practical']
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    domain: 'Commerce, Finance & Business',
    streams: ['Commerce', 'Science PCM'],
    shortDescription: 'Examines economic trends, company balance sheets, and stock markets to guide wise investment decisions.',
    whatTheyDo: [
      'Build mathematical financial models using Excel and financial databases',
      'Track corporate quarterly earnings, profit margins, and debt ratios',
      'Prepare investment research reports recommending buy/sell choices',
      'Assess risks in mutual funds, bonds, and emerging startup valuations'
    ],
    workEnvironment: ['Investment banks', 'Mutual fund companies', 'Stock brokerage houses', 'Corporate finance teams'],
    skillsToExplore: ['Excel spreadsheets', 'Financial news reading', 'Mathematical percentage analysis', 'Curiosity about businesses'],
    usefulSchoolSubjects: ['Economics', 'Mathematics', 'Accountancy', 'Statistics'],
    educationalPathways: [
      'Class 10 → Class 11–12 Commerce with Maths or Science PCM',
      'Undergraduate: B.Com (Hons), BBA Finance, B.Sc Economics, or B.Tech followed by MBA',
      'Professional credentials: CFA (Chartered Financial Analyst) Level 1–3',
      'Proficiency in financial modeling, Python/R for data, and equity research'
    ],
    relatedCareers: ['Investment Banker', 'Stock Broker', 'Risk Manager', 'Actuary'],
    beginnerResources: ['Khan Academy Finance & Capital Markets', 'NSE India Student financial modules'],
    roadmapId: 'commerce-ca',
    interestDimensions: ['analytical', 'leadership', 'technology']
  },
  {
    id: 'entrepreneur',
    name: 'Entrepreneur / Startup Founder',
    domain: 'Commerce, Finance & Business',
    streams: ['Any Stream'],
    shortDescription: 'Identifies unaddressed community or market problems, builds innovative products or services, and creates a company.',
    whatTheyDo: [
      'Spot daily customer pain points and formulate viable solutions',
      'Assemble passionate teams of engineers, designers, and marketers',
      'Pitch business models to angel investors and venture capital funds',
      'Manage cash flow, product launches, customer feedback, and daily operations'
    ],
    workEnvironment: ['Incubators & co-working spaces', 'On-ground operational sites', 'Startup studios', 'Everyday markets'],
    skillsToExplore: ['Initiative & self-drive', 'Public speaking & pitching', 'Resilience in failure', 'Adaptability', 'Basic economics'],
    usefulSchoolSubjects: ['Business Studies', 'Economics', 'Computer Applications', 'English / Regional languages'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12 (Commerce, Science, or Humanities)',
      'Undergraduate: Any degree (Engineering, Commerce, Design, Arts) that builds a domain superpower',
      'Join university entrepreneurship cells, hackathons, and student incubators',
      'Validate an idea with real paying users before investing heavy capital'
    ],
    relatedCareers: ['Product Manager', 'Business Development Lead', 'Marketing Strategist'],
    beginnerResources: ['Y Combinator Startup School (free public video library)', 'Indian Atal Tinkering Lab modules'],
    roadmapId: 'commerce-ca',
    interestDimensions: ['leadership', 'creative', 'communication']
  },

  // 4. LAW & GOVERNMENT
  {
    id: 'corporate-lawyer',
    name: 'Lawyer / Advocate',
    domain: 'Law & Government',
    streams: ['Any Stream', 'Humanities', 'Commerce'],
    shortDescription: 'Advises clients on legal rights, drafts contracts, represents parties in courts of law, and upholds justice.',
    whatTheyDo: [
      'Conduct rigorous legal research through past court judgments and statutory laws',
      'Draft petitions, agreements, affidavits, and corporate merger contracts',
      'Present oral arguments persuasively before judges in district, high, or supreme courts',
      'Mediate out-of-court settlements and dispute resolutions'
    ],
    workEnvironment: ['Law firms', 'Courts of justice', 'Corporate legal divisions', 'Human rights organizations'],
    skillsToExplore: ['Debating & logical argumentation', 'Reading comprehension', 'Writing clearly', 'Ethical commitment'],
    usefulSchoolSubjects: ['Political Science', 'History', 'English', 'Legal Studies (where available)'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12 (Humanities or Commerce popular, Science students also eligible)',
      'Appear for national law entrance exams like CLAT (Common Law Admission Test) or AILET',
      '5-Year Integrated Law Degree: B.A. LL.B, B.B.A. LL.B, or B.Com LL.B at a National Law University (NLU) or accredited college',
      'Alternative route: 3-Year LL.B after graduation in any stream',
      'Enroll with State Bar Council and clear the All India Bar Examination (AIBE) to practice in court'
    ],
    relatedCareers: ['Judge', 'Cyber Law Specialist', 'Legal Advisor', 'Public Prosecutor'],
    beginnerResources: ['Constitution of India student guides', 'School Parliamentary debate guides'],
    roadmapId: 'law-judiciary',
    interestDimensions: ['communication', 'analytical', 'social']
  },
  {
    id: 'civil-services-officer',
    name: 'Civil Services Officer (IAS / IPS / IFS)',
    domain: 'Law & Government',
    streams: ['Any Stream'],
    shortDescription: 'Implements government policies, administers districts, enforces public safety, and oversees welfare schemes.',
    whatTheyDo: [
      'Administer government developmental funds and monitor school/hospital operations in districts',
      'Coordinate emergency disaster relief and law-and-order during crises',
      'Formulate policy guidelines for national ministries and state secretariats',
      'Interact with citizens to resolve public grievances and improve infrastructure'
    ],
    workEnvironment: ['District collectorates', 'Police headquarters', 'Government ministries', 'Embassies (for IFS)'],
    skillsToExplore: ['General knowledge & current affairs', 'Decision-making under pressure', 'Public service spirit', 'Writing analytical essays'],
    usefulSchoolSubjects: ['History', 'Political Science', 'Geography', 'Economics', 'English & Regional Language'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12',
      'Graduate with a Bachelor’s degree in ANY discipline (Engineering, Arts, Commerce, Medicine, Science)',
      'Minimum age 21 years to appear for UPSC Civil Services Examination (CSE)',
      'Stage 1: Preliminary Exam (Objective CSAT & GS) → Stage 2: Main Exam (Written Descriptive) → Stage 3: Personality Interview',
      'Training at LBSNAA Mussoorie (for IAS) or SVPNPA Hyderabad (for IPS)'
    ],
    relatedCareers: ['State Administrative Officer (PCS)', 'Diplomat', 'Policy Analyst', 'Municipal Commissioner'],
    beginnerResources: ['PIB (Press Information Bureau) daily releases', 'NCERT Social Science books Class 6–12', 'Yojana magazine'],
    roadmapId: 'civil-services',
    interestDimensions: ['leadership', 'social', 'communication']
  },

  // 5. HUMANITIES & SOCIAL SCIENCES
  {
    id: 'psychologist',
    name: 'Psychologist & Mental Health Counselor',
    domain: 'Humanities & Social Sciences',
    streams: ['Humanities', 'Science PCB', 'Any Stream'],
    shortDescription: 'Studies human behavior, thoughts, and emotions to help people overcome mental distress, stress, and behavioral challenges.',
    whatTheyDo: [
      'Conduct one-on-one psychological counseling sessions using active listening and empathy',
      'Administer standardized cognitive and personality assessments',
      'Design behavior therapy plans for anxiety, depression, and learning differences',
      'Run stress management and mindfulness workshops in schools and workplaces'
    ],
    workEnvironment: ['Schools and universities', 'Hospitals and wellness clinics', 'Corporate employee wellness centers', 'Private practice'],
    skillsToExplore: ['Deep empathy', 'Non-judgmental listening', 'Observation of human interactions', 'Patience and confidentiality'],
    usefulSchoolSubjects: ['Psychology', 'Biology', 'English', 'Sociology'],
    educationalPathways: [
      'Class 10 → Humanities (Arts) or Science PCB in Class 11–12 with Psychology if offered',
      'Undergraduate: B.A. or B.Sc in Psychology (3–4 years)',
      'Postgraduate: M.A. / M.Sc in Clinical, Counseling, or Organizational Psychology',
      'For Clinical Practice: M.Phil in Clinical Psychology / Psy.D approved by Rehabilitation Council of India (RCI)'
    ],
    relatedCareers: ['School Counselor', 'Organizational Psychologist', 'Social Worker', 'Psychiatrist (requires MBBS)'],
    beginnerResources: ['Crash Course Psychology (YouTube)', 'Simply Psychology educational website', 'NCERT Class 11 & 12 Psychology'],
    roadmapId: 'humanities-social',
    interestDimensions: ['social', 'communication', 'scientific']
  },
  {
    id: 'sociologist',
    name: 'Sociologist & Social Policy Researcher',
    domain: 'Humanities & Social Sciences',
    streams: ['Humanities', 'Any Stream'],
    shortDescription: 'Researches social behavior, community traditions, inequality, and cultural institutions to shape impactful welfare policies.',
    whatTheyDo: [
      'Conduct field surveys, interviews, and focus groups in rural and urban communities',
      'Analyze statistical census and demographic data on education, poverty, and gender',
      'Publish research findings evaluating the effectiveness of public welfare programs',
      'Advise non-profits and government agencies on community development'
    ],
    workEnvironment: ['Research think tanks', 'United Nations & NGOs', 'Universities', 'Market research organizations'],
    skillsToExplore: ['Curiosity about cultures', 'Field interviewing', 'Critical reading', 'Data interpretation'],
    usefulSchoolSubjects: ['Sociology', 'History', 'Political Science', 'Economics'],
    educationalPathways: [
      'Class 10 → Class 11–12 Humanities / Arts',
      'B.A. in Sociology or Social Sciences',
      'M.A. and Ph.D in Sociology, Public Policy, or Development Studies',
      'Gain field experience through non-profit internships and grassroots research projects'
    ],
    relatedCareers: ['Anthropologist', 'Development Consultant', 'Public Relations Specialist'],
    beginnerResources: ['NCERT Sociology Class 11 & 12', 'EPW (Economic and Political Weekly) student summaries'],
    roadmapId: 'humanities-social',
    interestDimensions: ['social', 'analytical', 'communication']
  },

  // 6. DESIGN & CREATIVE INDUSTRIES
  {
    id: 'ui-ux-designer',
    name: 'UI/UX Product Designer',
    domain: 'Design & Creative Industries',
    streams: ['Any Stream', 'Humanities', 'Science PCM'],
    shortDescription: 'Crafts intuitive, easy-to-use, and visually captivating screens for mobile apps, websites, and digital products.',
    whatTheyDo: [
      'Interview everyday users to discover why an app feels confusing or frustrating',
      'Draw wireframes, journey maps, and interactive prototypes using tools like Figma',
      'Choose typography, color themes, and button states to make interfaces delightful',
      'Test designs with real users to measure speed, accessibility, and clarity'
    ],
    workEnvironment: ['Tech product companies', 'Design agencies', 'Fintech & Edtech startups', 'Freelance / Remote global work'],
    skillsToExplore: ['Visual taste & aesthetics', 'Empathy for non-tech users', 'Figma / Canva practice', 'Understanding user psychology'],
    usefulSchoolSubjects: ['Art / Fine Arts', 'Computer Applications', 'Psychology', 'English'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12 (Humanities, Science, or Commerce)',
      'Appear for design entrance tests: UCEED (IITs), NID DAT (National Institute of Design), SEED',
      'Degree: B.Des (Bachelor of Design) in Interaction Design, Communication Design, or B.Sc Multimedia',
      'Alternative route: Build a strong digital portfolio of redesigns and case studies independently',
      'A strong design portfolio is more important than college pedigree in tech industry'
    ],
    relatedCareers: ['Graphic Designer', 'Product Manager', 'Design Researcher', 'Web Designer'],
    beginnerResources: ['Figma for Beginners tutorial series', 'Google UX Design Certificate basics', 'Nielsen Norman Group UX articles'],
    roadmapId: 'design-creative',
    interestDimensions: ['creative', 'technology', 'social']
  },
  {
    id: 'architect',
    name: 'Architect',
    domain: 'Design & Creative Industries',
    streams: ['Science PCM'],
    shortDescription: 'Conceives, plans, and drafts blueprints for buildings, homes, eco-friendly campuses, and city skylines.',
    whatTheyDo: [
      'Draft detailed architectural floor plans, elevations, and 3D architectural renders',
      'Combine artistic beauty with structural safety, ventilation, and sunlight planning',
      'Specify sustainable building materials like solar panels, green roofs, and rainwater harvesting',
      'Coordinate with civil engineers, electrical contractors, and municipal sanctioning bodies'
    ],
    workEnvironment: ['Architectural studios', 'Urban development corporations', 'Heritage restoration firms', 'Independent practice'],
    skillsToExplore: ['Freehand sketching', 'Geometry & 3D visualization', 'Interest in historical buildings', 'Attention to proportion'],
    usefulSchoolSubjects: ['Mathematics', 'Physics', 'Art / Technical Drawing'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCM with 50%+ marks is mandatory for Council of Architecture)',
      'Appear for NATA (National Aptitude Test in Architecture) or JEE Main Paper 2 (B.Arch)',
      'Complete 5-year B.Arch (Bachelor of Architecture) program',
      'Register with the Council of Architecture (COA) of India to sign off on building plans'
    ],
    relatedCareers: ['Interior Designer', 'Landscape Architect', 'Urban Planner', 'Civil Engineer'],
    beginnerResources: ['SketchUp Free 3D modeling for students', 'Architecture Digest student tours', 'NATA drawing tutorials'],
    roadmapId: 'design-creative',
    interestDimensions: ['creative', 'practical', 'analytical']
  },
  {
    id: 'animator-vfx-artist',
    name: '3D Animator & VFX Artist',
    domain: 'Design & Creative Industries',
    streams: ['Any Stream', 'Vocational'],
    shortDescription: 'Brings digital characters to life and produces visual effects for animated movies, video games, and commercials.',
    whatTheyDo: [
      'Model 3D characters, creatures, and realistic environments in software like Blender or Maya',
      'Apply physics of movement, weight, emotion, and facial expressions to digital models',
      'Create CGI explosions, magical lighting, and weather effects for film scenes',
      'Composite CGI layers over live-action video footage'
    ],
    workEnvironment: ['Animation studios', 'VFX production houses', 'Video game developers', 'Advertising agencies'],
    skillsToExplore: ['Drawing & character doodling', 'Curiosity about Blender 3D', 'Cinematography basics', 'Patience with rendering'],
    usefulSchoolSubjects: ['Fine Arts', 'Computer Applications', 'Physics (for motion & optics)'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12 or Vocational Multimedia',
      'Diploma or Bachelor’s degree in 3D Animation, VFX, or Game Art (B.Sc / B.Des / Diploma)',
      'Master industry tools: Blender (free/open-source), Maya, Houdini, After Effects',
      'Publish a strong 60-second showreel demonstrating character animation or VFX shots'
    ],
    relatedCareers: ['Game Designer', 'Video Editor', 'Motion Graphics Artist', 'Concept Artist'],
    beginnerResources: ['Blender 3D Donut tutorial for beginners (Blender Guru)', '12 Principles of Animation book summaries'],
    roadmapId: 'design-creative',
    interestDimensions: ['creative', 'technology', 'practical']
  },

  // 7. MEDIA & COMMUNICATION
  {
    id: 'journalist',
    name: 'Journalist & News Reporter',
    domain: 'Media & Communication',
    streams: ['Humanities', 'Any Stream'],
    shortDescription: 'Investigates events, uncovers truths, interviews personalities, and reports news stories across print, TV, and digital media.',
    whatTheyDo: [
      'Investigate on-ground happenings, verify facts, and cross-examine official statements',
      'Conduct interviews with eyewitnesses, community leaders, and subject matter experts',
      'Write balanced articles or deliver live broadcast reports from the field',
      'Adhere to journalistic ethics, neutrality, and freedom of the press'
    ],
    workEnvironment: ['News broadcast studios', 'Digital publication newsrooms', 'Field reporting beats', 'Independent press channels'],
    skillsToExplore: ['Inquisitive questioning', 'Crisp writing', 'Camera presence', 'Current affairs knowledge', 'Courage and persistence'],
    usefulSchoolSubjects: ['English', 'Regional Languages', 'Political Science', 'History'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12 (Humanities or Commerce common)',
      'Undergraduate: B.A. in Journalism & Mass Communication (BJMC) or B.A. in English/Political Science',
      'Postgraduate diploma in Journalism from institutes like IIMC (Indian Institute of Mass Communication)',
      'Intern with newspapers, community radio stations, or digital news portals'
    ],
    relatedCareers: ['Editor', 'News Anchor', 'Documentary Filmmaker', 'Foreign Correspondent'],
    beginnerResources: ['BBC Academy Young Reporter guides', 'The Hindu / Indian Express student reading routines'],
    roadmapId: 'media-communication',
    interestDimensions: ['communication', 'social', 'analytical']
  },
  {
    id: 'content-creator-digital-marketer',
    name: 'Digital Media Strategist & Content Creator',
    domain: 'Media & Communication',
    streams: ['Any Stream', 'Commerce', 'Humanities'],
    shortDescription: 'Develops educational video series, podcasts, social narratives, and digital campaigns that inform and engage audiences.',
    whatTheyDo: [
      'Script educational and entertaining storytelling scripts for video and audio',
      'Analyze search algorithms, audience retention graphs, and click-through metrics',
      'Produce graphics, shoot videos, and edit audio reels for digital platforms',
      'Manage brand communication and community engagement on social channels'
    ],
    workEnvironment: ['Creative agencies', 'Edtech platforms', 'Media publishing brands', 'Independent studio work'],
    skillsToExplore: ['Video editing (CapCut / Premiere)', 'Scriptwriting', 'Social media analytics', 'Creative storytelling'],
    usefulSchoolSubjects: ['English', 'Business Studies', 'Computer Applications'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12',
      'B.A. in Mass Communication, BBA Marketing, or B.Sc Digital Media',
      'Practical hands-on execution: Build and manage a niche YouTube channel, blog, or school club page',
      'Learn SEO, performance marketing, and digital content analytics'
    ],
    relatedCareers: ['Public Relations Officer', 'Copywriter', 'Social Media Manager', 'Podcaster'],
    beginnerResources: ['HubSpot Academy Free Inbound Marketing', 'Canva Design School', 'YouTube Creator Academy'],
    roadmapId: 'media-communication',
    interestDimensions: ['creative', 'communication', 'leadership']
  },

  // 8. SCIENCE & RESEARCH
  {
    id: 'research-scientist-pure-science',
    name: 'Research Scientist (Physics / Chemistry / Biology)',
    domain: 'Science & Research',
    streams: ['Science PCM', 'Science PCB'],
    shortDescription: 'Conducts laboratory experiments and theoretical research to discover new fundamental laws, materials, or biological cures.',
    whatTheyDo: [
      'Formulate novel scientific hypotheses and design controlled laboratory experiments',
      'Use high-precision microscopes, spectrometers, or particle accelerators',
      'Analyze mathematical data models and write peer-reviewed research papers',
      'Collaborate with international research teams on global challenges like clean energy or disease eradication'
    ],
    workEnvironment: ['National research institutes (ISRO, TIFR, CSIR, IISc)', 'University research laboratories', 'R&D wings of biotech and chemical firms'],
    skillsToExplore: ['Scientific curiosity', 'Mathematical patience', 'Attention to experimental variables', 'Critical thinking'],
    usefulSchoolSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCM or PCB with high academic focus)',
      'Entrance exams: IAT (IISER Aptitude Test), NEST (NISER), JEE Advanced, KVPY/INSPIRE fellowship',
      '5-Year Integrated BS-MS or B.Sc (Hons) in Physics/Chemistry/Maths/Biology from premier institutions',
      'Ph.D in a specialized domain with research thesis publication',
      'Postdoctoral fellowship leading to scientist positions in CSIR/ISRO/BARC or professorship'
    ],
    relatedCareers: ['Astrophysicist', 'Biochemist', 'Materials Scientist', 'Statistician'],
    beginnerResources: ['IISc Science Outreach talks', 'Crash Course Science playlists', 'Khan Academy Physics & Chemistry'],
    roadmapId: 'science-research',
    interestDimensions: ['scientific', 'analytical', 'practical']
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist & Statistician',
    domain: 'Science & Research',
    streams: ['Science PCM', 'Commerce'],
    shortDescription: 'Uncovers hidden patterns in massive volumes of numbers, texts, and user activities to answer critical questions.',
    whatTheyDo: [
      'Collect and clean unstructured data from sensors, hospital logs, or web traffic',
      'Apply statistical probability formulas and machine learning models in Python or R',
      'Create interactive visual charts to communicate discoveries to executives and policymakers',
      'Predict customer churn, election outcomes, or pandemic disease spread'
    ],
    workEnvironment: ['Fintech firms', 'E-commerce companies', 'Healthcare research institutes', 'Government statistical offices'],
    skillsToExplore: ['Love for statistics and numbers', 'Python data libraries (Pandas, Matplotlib)', 'Curiosity about why trends happen'],
    usefulSchoolSubjects: ['Mathematics (Probability & Statistics)', 'Computer Science', 'Economics'],
    educationalPathways: [
      'Class 10 → Class 11–12 with strong Mathematics (Science PCM or Commerce with Maths)',
      'Undergraduate: B.Sc / B.Stat from Indian Statistical Institute (ISI), or B.Tech Data Science / Mathematics & Computing',
      'Master’s degree in Data Science, Statistics, or Applied Mathematics',
      'Build a portfolio of data analysis notebooks on public datasets'
    ],
    relatedCareers: ['Data Analyst', 'Bioinformatician', 'Machine Learning Engineer', 'Actuary'],
    beginnerResources: ['Kaggle intro to Python & Data Analysis', 'StatQuest with Josh Starmer (YouTube)', 'ISI entrance mock papers'],
    roadmapId: 'science-research',
    interestDimensions: ['analytical', 'technology', 'scientific']
  },

  // 9. AGRICULTURE & ENVIRONMENT
  {
    id: 'agricultural-scientist',
    name: 'Agricultural Scientist & Agronomist',
    domain: 'Agriculture & Environment',
    streams: ['Science PCB', 'Science PCM', 'Vocational'],
    shortDescription: 'Improves crop yields, develops pest-resistant seeds, and guides sustainable farming methods to feed nations.',
    whatTheyDo: [
      'Conduct soil chemical analysis to recommend optimal nutrient mixtures',
      'Breed drought-tolerant, climate-resilient wheat, rice, and pulses varieties',
      'Develop biological pest control methods reducing chemical pesticide dependence',
      'Train rural farmers in smart irrigation, crop rotation, and post-harvest storage'
    ],
    workEnvironment: ['Agricultural research universities (ICAR)', 'Seed & fertilizer corporations', 'Krishi Vigyan Kendras (KVKs)', 'Farm fields'],
    skillsToExplore: ['Interest in plant life', 'Care for soil and ecology', 'Field-work enthusiasm', 'Observation of nature'],
    usefulSchoolSubjects: ['Biology', 'Chemistry', 'Geography', 'Economics'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCB or PCM or Agriculture vocational)',
      'Appear for ICAR AIEEA (All India Entrance Examination for Admission) or State Agri-CETs',
      '4-Year B.Sc (Hons) in Agriculture, Horticulture, or Agricultural Engineering',
      'M.Sc and Ph.D for specialized research roles in Agricultural Research Service (ARS)'
    ],
    relatedCareers: ['Horticulturist', 'Soil Scientist', 'Food Technologist', 'Dairy Technologist'],
    beginnerResources: ['ICAR student portal', 'National Geographic Green Revolution stories', 'NCERT Biology Ecology chapters'],
    roadmapId: 'agriculture-environment',
    interestDimensions: ['scientific', 'practical', 'social']
  },
  {
    id: 'environmental-engineer',
    name: 'Environmental Engineer & Conservationist',
    domain: 'Agriculture & Environment',
    streams: ['Science PCM', 'Science PCB'],
    shortDescription: 'Develops engineering solutions to treat toxic industrial waste, restore polluted rivers, and reduce carbon emissions.',
    whatTheyDo: [
      'Design effluent treatment plants (ETPs) that purify chemical sewage before release',
      'Measure air quality indexes (AQI) and install industrial emission scrubbers',
      'Conduct environmental impact assessments (EIA) for upcoming factories and highways',
      'Plan ecological reforestation and wetland revival projects'
    ],
    workEnvironment: ['Pollution Control Boards (CPCB/SPCB)', 'Environmental consultancies', 'Municipal water treatment plants', 'Green energy initiatives'],
    skillsToExplore: ['Care for nature and clean water', 'Physics and chemistry', 'Problem-solving for pollution', 'Field measurements'],
    usefulSchoolSubjects: ['Chemistry', 'Physics', 'Biology', 'Mathematics'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCM or PCMB)',
      'B.Tech in Environmental Engineering, Chemical Engineering, or Civil Engineering',
      'M.Tech in Environmental Management or Water Resource Engineering',
      'Work on field audit projects with pollution control bodies'
    ],
    relatedCareers: ['Ecologist', 'Wildlife Biologist', 'Renewable Energy Specialist'],
    beginnerResources: ['UNEP (United Nations Environment Programme) youth guides', 'Khan Academy Environmental Science'],
    roadmapId: 'agriculture-environment',
    interestDimensions: ['scientific', 'social', 'practical']
  },

  // 10. AVIATION & TRANSPORT
  {
    id: 'commercial-pilot',
    name: 'Commercial Airline Pilot',
    domain: 'Aviation & Transport',
    streams: ['Science PCM'],
    shortDescription: 'Flies passenger and cargo aircraft across domestic and international skies adhering to precise navigation safety protocols.',
    whatTheyDo: [
      'Inspect aircraft flight controls, fuel calculations, and weather radars before takeoff',
      'Communicate with Air Traffic Control (ATC) towers regarding altitude and routing',
      'Maneuver multi-engine jet aircraft during takeoff, cruising, and instrument landings',
      'Manage calm, calculated responses during turbulence or unexpected emergency conditions'
    ],
    workEnvironment: ['Aircraft cockpits', 'International airport terminals', 'Flight simulation training academies'],
    skillsToExplore: ['Quick situational awareness', 'Spatial orientation', 'Calmness under pressure', 'Clear radio communication'],
    usefulSchoolSubjects: ['Physics', 'Mathematics', 'English'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (Physics and Mathematics with 50%+ marks are mandatory by DGCA)',
      'Obtain DGCA Class 2 and Class 1 Medical Fitness Certifications',
      'Enroll in a DGCA-approved Flying Training Organisation (FTO) like IGRUA',
      'Complete 200 flying hours and clear DGCA theory papers to earn Commercial Pilot License (CPL)',
      'Type Rating on specific airliners (Airbus A320 or Boeing 737) before joining an airline'
    ],
    relatedCareers: ['Air Traffic Controller (ATC)', 'Aircraft Maintenance Engineer (AME)', 'Flight Operations Officer'],
    beginnerResources: ['DGCA India student licensing circulars', 'Microsoft Flight Simulator / Flightgear open-source simulator'],
    roadmapId: 'aviation-transport',
    interestDimensions: ['practical', 'analytical', 'technology']
  },
  {
    id: 'merchant-navy-officer',
    name: 'Merchant Navy Deck Officer / Marine Engineer',
    domain: 'Aviation & Transport',
    streams: ['Science PCM'],
    shortDescription: 'Navigates and manages gigantic cargo container ships, oil tankers, and bulk carriers across international oceans.',
    whatTheyDo: [
      'Navigate cargo vessels through ocean trade routes using satellite GPS and radar systems',
      'Oversee safe loading, securing, and discharge of multi-million dollar container shipments',
      'Inspect marine diesel engines, power generators, and seawater desalination plants on board',
      'Maintain round-the-clock safety watches in international waters'
    ],
    workEnvironment: ['Ocean-going merchant vessels', 'Seaports and dry docks', 'International maritime shipping firms'],
    skillsToExplore: ['Love for the sea and travel', 'High physical fitness', 'Discipline and teamwork', 'Mechanical / nautical interest'],
    usefulSchoolSubjects: ['Physics', 'Mathematics', 'Chemistry'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science (PCM with min 60% aggregate & 50%+ in English)',
      'Appear for IMU-CET (Indian Maritime University Common Entrance Test)',
      'Deck route: 3-Year B.Sc Nautical Science or 1-Year DNS (Diploma in Nautical Science)',
      'Engine route: 4-Year B.Tech Marine Engineering',
      'Mandatory pre-sea training and clearance of DG Shipping medical fitness with 6/6 eyesight'
    ],
    relatedCareers: ['Port Manager', 'Logistics Coordinator', 'Coast Guard Officer'],
    beginnerResources: ['Indian Maritime University (IMU) prospectus', 'Documentary life on modern container ships'],
    roadmapId: 'aviation-transport',
    interestDimensions: ['practical', 'leadership', 'analytical']
  },

  // 11. HOSPITALITY & TOURISM
  {
    id: 'hotel-manager',
    name: 'Hospitality & Hotel Operations Manager',
    domain: 'Hospitality & Tourism',
    streams: ['Any Stream', 'Commerce', 'Vocational'],
    shortDescription: 'Oversees the smooth day-to-day operation, guest services, culinary standards, and profitability of luxury hotels and resorts.',
    whatTheyDo: [
      'Manage front-office check-ins, guest concierge services, and housekeeping standards',
      'Coordinate catering for high-profile weddings, diplomatic summits, and banquets',
      'Monitor room occupancy rates, revenue targets, and vendor procurement contracts',
      'Train service personnel in hospitality etiquette, cultural sensitivity, and prompt problem-solving'
    ],
    workEnvironment: ['Five-star luxury hotels', 'Eco-resorts and cruise ships', 'Convention centers', 'Boutique travel properties'],
    skillsToExplore: ['Warm interpersonal manners', 'Multi-tasking ability', 'Crisis handling with a smile', 'Leadership under pressure'],
    usefulSchoolSubjects: ['English', 'Business Studies', 'Foreign Languages (French/German)', 'Geography'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12 (Commerce, Humanities, or Science)',
      'Appear for NCHMCT JEE (National Council for Hotel Management & Catering Technology Joint Entrance Exam)',
      '3-Year B.Sc in Hospitality & Hotel Administration from an Institute of Hotel Management (IHM)',
      'Complete industrial training across Front Office, F&B Service, Housekeeping, and Kitchen departments',
      'Progress from Management Trainee (MT) to Department Head to General Manager'
    ],
    relatedCareers: ['Event Manager', 'Culinary Chef', 'Travel Tour Director', 'Airline Cabin Crew'],
    beginnerResources: ['NCHMCT official portal info', 'IHM curriculum overview for students'],
    roadmapId: 'hospitality-tourism',
    interestDimensions: ['leadership', 'social', 'communication']
  },
  {
    id: 'chef-culinary-artist',
    name: 'Executive Chef & Culinary Artist',
    domain: 'Hospitality & Tourism',
    streams: ['Any Stream', 'Vocational'],
    shortDescription: 'Creates innovative food recipes, directs commercial kitchens, and masters the art and science of gastronomy.',
    whatTheyDo: [
      'Develop seasonal menus blending traditional regional flavors with global culinary styles',
      'Manage kitchen line cooks, cooking stations, and strict hygiene standards',
      'Calculate food ingredient costs and minimize culinary wastage',
      'Plate gourmet dishes with visual flair for restaurants, resorts, and events'
    ],
    workEnvironment: ['Fine-dining restaurants', 'Luxury hotel kitchens', 'Cruise liners', 'Independent culinary studio or bakery'],
    skillsToExplore: ['Passion for cooking and flavors', 'Creative plating', 'Speed and physical stamina', 'Sense of smell and taste'],
    usefulSchoolSubjects: ['Home Science', 'Chemistry (food science)', 'English', 'Business Studies'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12 or Vocational Culinary Arts',
      'Bachelor’s or Diploma in Culinary Arts / Bakery & Confectionery (from IHM, Culinary Academy of India, etc.)',
      'Start as Commis Chef (line cook), learning knife skills, butchery, and sauce foundations',
      'Advance to Chef de Partie (station lead) → Sous Chef → Executive Chef'
    ],
    relatedCareers: ['Pastry Chef', 'Food Stylist', 'Restaurant Owner', 'Food Quality Inspector'],
    beginnerResources: ['Culinary fundamentals video masterclasses', 'Food Chemistry explanations'],
    roadmapId: 'hospitality-tourism',
    interestDimensions: ['creative', 'practical', 'leadership']
  },

  // 12. SPORTS & FITNESS
  {
    id: 'sports-coach-trainer',
    name: 'Sports Coach & Athletic Trainer',
    domain: 'Sports & Fitness',
    streams: ['Any Stream', 'Vocational'],
    shortDescription: 'Instructs athletes in tactical game skills, physical conditioning, mental focus, and tournament sportsmanship.',
    whatTheyDo: [
      'Design sport-specific drills improving speed, agility, endurance, and ball control',
      'Analyze game video footage to pinpoint opponent tactics and team weaknesses',
      'Motivate athletes through constructive feedback and mental toughness training',
      'Ensure athlete safety and lead warm-ups to prevent ligament and muscle strains'
    ],
    workEnvironment: ['Sports academies and stadiums', 'School and college athletic departments', 'Professional sports franchises'],
    skillsToExplore: ['Sporting discipline', 'Knowledge of game rules', 'Ability to inspire and teach', 'Physical fitness'],
    usefulSchoolSubjects: ['Physical Education', 'Biology', 'Psychology'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12 with Physical Education',
      'Pursue personal excellence in a specific sport at district/state/national levels',
      'Bachelor of Physical Education (B.P.Ed - 3 to 4 years)',
      'Diploma in Sports Coaching from Netaji Subhas National Institute of Sports (NSNIS Patiala)',
      'Accredited certifications from sports federations (BCCI, AIFF, World Athletics)'
    ],
    relatedCareers: ['Sports Physiotherapist', 'Fitness Trainer', 'Sports Analyst', 'Referee / Umpire'],
    beginnerResources: ['Sports Authority of India (SAI) athlete guidelines', 'Basic Sports Biomechanics tutorials'],
    roadmapId: 'sports-fitness',
    interestDimensions: ['practical', 'leadership', 'social']
  },
  {
    id: 'sports-analyst',
    name: 'Sports Performance Analyst',
    domain: 'Sports & Fitness',
    streams: ['Commerce', 'Science PCM', 'Any Stream'],
    shortDescription: 'Uses match statistics, player GPS tracking data, and video breakdown to help coaches win competitive fixtures.',
    whatTheyDo: [
      'Tag live cricket, football, or kabaddi game events using specialized video software',
      'Calculate player heatmaps, strike rates against specific bowlers, and pass accuracy',
      'Provide tactical pre-match reports to team captains and coaches before major games',
      'Deliver real-time statistical insights for television sports commentators'
    ],
    workEnvironment: ['Professional sports teams (IPL, ISL, PKL)', 'Sports broadcast media companies', 'Sports analytics consultancies'],
    skillsToExplore: ['Deep understanding of sports tactics', 'Excel & data visualization', 'Video analysis tools', 'Fast statistical thinking'],
    usefulSchoolSubjects: ['Mathematics', 'Physical Education', 'Computer Science', 'Statistics'],
    educationalPathways: [
      'Class 10 → Any stream with Mathematics / Statistics / Computer Applications',
      'B.Sc in Sports Analytics, B.Tech, or B.Sc in Statistics / Data Science',
      'Certifications in sports performance software (Catapult, Opta, Prozone)',
      'Build public sports data breakdown threads on cricket/football match tactics'
    ],
    relatedCareers: ['Sports Journalist', 'Data Scientist', 'Performance Scout'],
    beginnerResources: ['ESPNCricinfo Statsguru exploration', 'Intro to Sports Analytics video series'],
    roadmapId: 'sports-fitness',
    interestDimensions: ['analytical', 'technology', 'communication']
  },

  // 13. EDUCATION
  {
    id: 'school-teacher',
    name: 'School Teacher (TGT / PGT)',
    domain: 'Education',
    streams: ['Any Stream', 'Humanities', 'Science PCM', 'Science PCB', 'Commerce'],
    shortDescription: 'Teaches academic concepts, sparks curiosity, and shapes foundational character and life skills in students.',
    whatTheyDo: [
      'Plan engaging lesson blueprints incorporating classroom experiments, quizzes, and visual aids',
      'Explain challenging concepts simply so every student in the classroom understands',
      'Assess student homework, project work, and exams to provide constructive encouragement',
      'Counsel students facing academic anxiety and organize co-curricular clubs'
    ],
    workEnvironment: ['Government and private schools', 'Navodaya & Kendriya Vidyalayas', 'Educational foundations'],
    skillsToExplore: ['Patience and clarity', 'Storytelling and explaining', 'Organizing classroom games', 'Love for a chosen subject'],
    usefulSchoolSubjects: ['The subject you love most (Maths, Science, Social Science, Languages)'],
    educationalPathways: [
      'Class 10 → Stream aligned with your favorite subject (Science, Commerce, or Humanities)',
      'Graduate with a Bachelor’s degree in your chosen subject (B.Sc, B.A., B.Com)',
      'Bachelor of Education (B.Ed - 2 years) is mandatory for school teaching',
      'Clear Teacher Eligibility Tests: CTET (Central) or State TETs',
      'TGT (Trained Graduate Teacher) for Classes 6–10; PGT (Post Graduate Teacher + M.A./M.Sc) for Classes 11–12'
    ],
    relatedCareers: ['College Professor', 'Special Educator', 'Curriculum Designer', 'Educational Counselor'],
    beginnerResources: ['Khan Academy pedagogy guides', 'DIKSHA national teacher portal'],
    roadmapId: 'education-teaching',
    interestDimensions: ['social', 'communication', 'leadership']
  },
  {
    id: 'edtech-instructional-designer',
    name: 'EdTech Learning Experience Designer',
    domain: 'Education',
    streams: ['Any Stream', 'Humanities', 'Science PCM'],
    shortDescription: 'Creates interactive digital learning modules, educational games, and video lessons for modern learners.',
    whatTheyDo: [
      'Break down complex syllabus concepts into bite-sized animated scripts and simulations',
      'Design gamified quizzes with badges and progress meters to keep students engaged',
      'Collaborate with animators, voiceover artists, and software developers',
      'Analyze learner drop-off points to make lessons simpler and more intuitive'
    ],
    workEnvironment: ['Educational technology companies', 'E-learning production studios', 'University distance education wings'],
    skillsToExplore: ['Creative writing', 'Understanding how people learn', 'Curiosity about educational games', 'Visual layout'],
    usefulSchoolSubjects: ['English', 'Psychology', 'Computer Applications'],
    educationalPathways: [
      'Class 10 → Any stream in Class 11–12',
      'B.A. / B.Sc in Education, Psychology, Mass Communication, or Computer Science',
      'Master’s or certifications in Instructional Design (ADDIE model, Bloom’s taxonomy)',
      'Develop sample interactive micro-courses on open-source learning tools'
    ],
    relatedCareers: ['Curriculum Specialist', 'School Teacher', 'Content Writer', 'UI/UX Designer'],
    beginnerResources: ['Introduction to Instructional Design on Coursera (Audit free)', 'Edutopia articles on learning techniques'],
    roadmapId: 'education-teaching',
    interestDimensions: ['creative', 'social', 'technology']
  },

  // 14. SKILLED & VOCATIONAL CAREERS
  {
    id: 'electrician-electrical-technician',
    name: 'Electrical Technician & Solar Installer',
    domain: 'Skilled & Vocational Careers',
    streams: ['Vocational', 'Science PCM'],
    shortDescription: 'Installs, tests, and repairs wiring, power distribution boards, solar panels, and electrical machinery.',
    whatTheyDo: [
      'Read electrical circuit diagrams and wiring blueprints for homes and factories',
      'Install circuit breakers, switches, transformers, and rooftop solar photovoltaic arrays',
      'Use multimeters, insulation testers, and wire strippers to diagnose power faults',
      'Ensure strict adherence to electrical earthing and safety standards'
    ],
    workEnvironment: ['Power utility companies', 'Solar energy installations', 'Industrial plants', 'Independent licensed contractor services'],
    skillsToExplore: ['Hands-on tool use', 'Understanding circuits & voltage', 'Physical agility', 'Safety precautions'],
    usefulSchoolSubjects: ['Science (Physics - Electricity & Magnetism)', 'Mathematics', 'Work Experience / SUPW'],
    educationalPathways: [
      'Class 10 → Direct entry into 2-year ITI (Industrial Training Institute) Electrician Trade course',
      'Alternative: 3-Year Polytechnic Diploma in Electrical Engineering after Class 10',
      'Complete Apprenticeship training under National Apprenticeship Promotion Scheme (NAPS)',
      'Obtain Electrical Wireman / Supervisor License issued by State Licensing Board',
      'Can transition directly to supervisory roles or pursue lateral B.Tech entry'
    ],
    relatedCareers: ['Solar System Technician', 'Electronics Technician', 'Instrumentation Specialist'],
    beginnerResources: ['Bharat Skills ITI Electrician modules (free Govt portal)', 'Basic Home Wiring interactive diagrams'],
    roadmapId: 'vocational-skilled',
    interestDimensions: ['practical', 'technology', 'analytical']
  },
  {
    id: 'automotive-technician',
    name: 'Automotive & EV Technician',
    domain: 'Skilled & Vocational Careers',
    streams: ['Vocational', 'Science PCM'],
    shortDescription: 'Diagnoses and repairs internal combustion vehicle systems, braking hydraulics, and electric vehicle battery packs.',
    whatTheyDo: [
      'Connect computerized OBD diagnostic scanners to detect vehicle engine errors',
      'Service automobile braking systems, suspension struts, and transmission gearboxes',
      'Inspect high-voltage battery modules, motor controllers, and charging ports in Electric Vehicles',
      'Perform wheel alignments and test drives ensuring road safety compliance'
    ],
    workEnvironment: ['Automotive dealership service centers', 'EV charging hubs', 'Specialty repair garages', 'Vehicle assembly plants'],
    skillsToExplore: ['Mechanical curiosity', 'Diagnosing mechanical sounds', 'Using spanners and wrenches', 'Computer diagnostic tools'],
    usefulSchoolSubjects: ['Science (Physics - Mechanics)', 'Mathematics'],
    educationalPathways: [
      'Class 10 → 2-year ITI Mechanic Motor Vehicle (MMV) trade or 3-year Polytechnic Diploma in Automobile Engg',
      'Skill certifications in Electric Vehicle (EV) maintenance under ASDC (Automotive Skills Development Council)',
      'Hands-on dealership garage apprenticeship'
    ],
    relatedCareers: ['Mechanical Technician', 'Fleet Maintenance Supervisor', 'Automobile Service Advisor'],
    beginnerResources: ['Bharat Skills Automobile trade books', 'How a Car Engine Works 3D animations'],
    roadmapId: 'vocational-skilled',
    interestDimensions: ['practical', 'analytical', 'technology']
  },
  {
    id: 'computer-hardware-network-technician',
    name: 'Computer Hardware & Network Technician',
    domain: 'Skilled & Vocational Careers',
    streams: ['Vocational', 'Any Stream'],
    shortDescription: 'Assembles computer systems, sets up office Wi-Fi routers, crimps network cables, and troubleshoots hardware issues.',
    whatTheyDo: [
      'Assemble computer CPUs: seating processors, RAM sticks, cooling fans, and graphics cards',
      'Install operating systems, device drivers, antivirus tools, and office productivity suites',
      'Route Ethernet cables, configure Wi-Fi routers, IP addresses, and shared network printers',
      'Diagnose faulty motherboards, power supplies, and storage hard drives'
    ],
    workEnvironment: ['Corporate IT helpdesks', 'Computer hardware service centers', 'Schools and college labs', 'Independent repair business'],
    skillsToExplore: ['Assembling PC components', 'Understanding RAM, SSD, and CPU specs', 'Troubleshooting Windows/Linux', 'Cable crimping'],
    usefulSchoolSubjects: ['Computer Applications', 'Physics', 'Mathematics'],
    educationalPathways: [
      'Class 10 → 1 or 2-year ITI in Computer Hardware & Network Maintenance (CHNM) or Polytechnic Diploma in Computer Engg',
      'Certifications: CompTIA A+, Cisco CCNA Network Associate',
      'Fast entry into IT support roles with opportunities to grow into Network or Cloud Administration'
    ],
    relatedCareers: ['System Administrator', 'Cybersecurity Technician', 'Field Service Engineer'],
    beginnerResources: ['Professor Messer CompTIA A+ free training videos', 'PC Building Simulator interactive games'],
    roadmapId: 'vocational-skilled',
    interestDimensions: ['practical', 'technology', 'analytical']
  },

  // 15. EMERGING TECHNOLOGIES
  {
    id: 'cloud-devops-engineer',
    name: 'Cloud Computing & DevOps Engineer',
    domain: 'Emerging Technologies',
    streams: ['Science PCM', 'Vocational'],
    shortDescription: 'Manages massive virtual servers in global data centers ensuring websites never crash even during peak traffic.',
    whatTheyDo: [
      'Deploy applications across cloud providers like Amazon Web Services (AWS), Google Cloud, and Azure',
      'Automate server scaling so websites handle millions of festive shopping visitors smoothly',
      'Build continuous integration pipelines that test and release code automatically',
      'Implement data backup and disaster recovery across global regions'
    ],
    workEnvironment: ['Cloud-native technology firms', 'Fintech platforms', 'Global consulting IT companies', 'Remote tech roles'],
    skillsToExplore: ['Linux command line', 'Scripting with Python or Bash', 'Understanding internet servers', 'Automation mindset'],
    usefulSchoolSubjects: ['Computer Science', 'Mathematics', 'Physics'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science PCM or Vocational IT',
      'B.Tech in Computer Science / IT / Cloud Computing or BCA',
      'Certifications: AWS Certified Cloud Practitioner / Solutions Architect, Azure Fundamentals',
      'Hands-on practice deploying containerized web projects with Docker and Linux'
    ],
    relatedCareers: ['Software Developer', 'Site Reliability Engineer', 'Cybersecurity Analyst'],
    beginnerResources: ['AWS Educate free student tier', 'Linux Journey interactive tutorials', 'FreeCodeCamp Docker guide'],
    roadmapId: 'engineering-software',
    interestDimensions: ['technology', 'analytical', 'practical']
  },
  {
    id: 'drone-systems-engineer',
    name: 'Drone & Autonomous Systems Specialist',
    domain: 'Emerging Technologies',
    streams: ['Science PCM', 'Vocational'],
    shortDescription: 'Designs, programs, and operates unmanned aerial vehicles (UAVs) for farming, mapping, delivery, and defence.',
    whatTheyDo: [
      'Assemble drone frames with brushless motors, flight controllers, GPS, and telemetry radios',
      'Program autonomous waypoint navigation and obstacle avoidance sensors',
      'Process high-resolution aerial photogrammetry for land mapping and agricultural surveying',
      'Adhere to civil aviation drone airspace regulations and remote pilot safety protocols'
    ],
    workEnvironment: ['Agritech drone services', 'Geospatial mapping firms', 'Defence technology companies', 'Film production crews'],
    skillsToExplore: ['Hands-on RC airplane/quadcopter flying', 'Aerodynamics basics', 'Soldering and circuit connections', 'Spatial mapping'],
    usefulSchoolSubjects: ['Physics', 'Mathematics', 'Geography'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science PCM or Polytechnic Diploma in Mechanical/Electronics/Aeronautical',
      'B.Tech in Aerospace, Robotics, Mechatronics, or Electronics Engineering',
      'DGCA-certified Remote Pilot Certificate from an authorized Remote Pilot Training Organisation (RPTO)',
      'Work on custom autonomous drone firmware like ArduPilot and PX4'
    ],
    relatedCareers: ['Robotics Engineer', 'GIS Specialist', 'Commercial Pilot', 'Aerospace Engineer'],
    beginnerResources: ['ArduPilot open-source documentation', 'Drone Rules 2021 student summary (Ministry of Civil Aviation)'],
    roadmapId: 'engineering-core',
    interestDimensions: ['practical', 'technology', 'analytical']
  },
  {
    id: 'ar-vr-developer',
    name: 'AR/VR & Immersive Worlds Developer',
    domain: 'Emerging Technologies',
    streams: ['Science PCM', 'Any Stream'],
    shortDescription: 'Builds immersive 3D virtual reality simulations and augmented reality mobile apps for training, education, and gaming.',
    whatTheyDo: [
      'Build interactive 3D virtual spaces in game engines like Unity or Unreal Engine',
      'Program hand-tracking gestures and spatial audio so users feel physically present in virtual worlds',
      'Develop virtual surgical simulators for medical students and flight cockpit trainers',
      'Create mobile AR filters that overlay interactive 3D models onto classroom desks'
    ],
    workEnvironment: ['Gaming studios', 'Medical simulation companies', 'Automobile visual design centers', 'EdTech VR labs'],
    skillsToExplore: ['3D geometry & spatial coordinates', 'Unity or Godot game engine basics', 'C# or C++ coding', 'Creative storytelling'],
    usefulSchoolSubjects: ['Mathematics (Vectors, Geometry)', 'Computer Science', 'Physics'],
    educationalPathways: [
      'Class 10 → Class 11–12 Science PCM or Computer Science vocational',
      'B.Tech Computer Science, B.Sc Game Design / Interactive Technologies, or B.Des',
      'Build demo VR/AR experiences for Meta Quest or WebXR using Unity or Unreal Engine'
    ],
    relatedCareers: ['Game Developer', '3D Animator', 'UI/UX Designer', 'Computer Vision Specialist'],
    beginnerResources: ['Unity Learn Student pathway (free)', 'Godot Engine beginner tutorials'],
    roadmapId: 'design-creative',
    interestDimensions: ['creative', 'technology', 'practical']
  }
];

// Helper search and filter functions
export function filterCareers({ search = '', stream = 'all', domain = 'all' }) {
  return CAREERS.filter(career => {
    // Search match
    const searchMatch = !search.trim() || 
      career.name.toLowerCase().includes(search.toLowerCase()) ||
      career.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      career.skillsToExplore.some(s => s.toLowerCase().includes(search.toLowerCase())) ||
      career.domain.toLowerCase().includes(search.toLowerCase());

    // Stream match
    let streamMatch = true;
    if (stream && stream !== 'all') {
      streamMatch = career.streams.includes(stream) || career.streams.includes('Any Stream');
    }

    // Domain match
    let domainMatch = true;
    if (domain && domain !== 'all') {
      domainMatch = career.domain === domain;
    }

    return searchMatch && streamMatch && domainMatch;
  });
}
