// CareerQuest Technology Awareness Module
// Simple, educational explanations for Class 9-10 students (ages 14-16)
// Avoids excessive jargon and connects each technology to real-world everyday life

export const TECHNOLOGIES = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence (AI)',
    tagline: 'Teaching computers how to recognize patterns, understand language, and make predictions.',
    iconName: 'Cpu',
    badge: 'Core Technology',
    simpleExplanation: 'Artificial Intelligence is a field of computer science that enables software to perform tasks that previously required human thinking—such as recognizing faces in photos, understanding spoken words, translating languages, or recommending videos you might like.',
    howItWorks: 'Instead of writing step-by-step code rules for every single situation, engineers feed computers huge amounts of examples (data). The computer analyzes these examples to spot patterns on its own.',
    everydayExamples: [
      'Facial recognition unlock on your smartphone',
      'Auto-complete suggestions when typing search queries or text messages',
      'Voice assistants like Google Assistant, Alexa, or Siri answering questions',
      'YouTube or Spotify recommending songs based on what you previously enjoyed',
      'Navigation maps predicting traffic jams and suggesting faster alternate routes'
    ],
    whereItIsUsed: [
      'Healthcare: Assisting doctors by detecting early signs of illness in X-rays and MRI scans',
      'Agriculture: Analyzing satellite images to warn farmers about crop diseases and drought risks',
      'Transportation: Helping self-driving cars identify pedestrians, traffic lights, and lane lines',
      'Education: Creating personalized learning quizzes that adapt to each student’s pace'
    ],
    skillsToExplore: [
      'Curiosity about how decisions are made from data',
      'Basic Python programming (loops, lists, and functions)',
      'School Mathematics: Statistics, averages, probabilities, and coordinate graphs',
      'Ethical thinking: Asking questions about fairness and privacy in tech'
    ],
    relatedCareers: [
      'AI/Machine Learning Engineer',
      'Data Scientist',
      'Computational Linguist',
      'AI Ethics & Policy Advisor'
    ],
    starterChallenge: 'Next time you use a camera or search engine, think about what data the computer had to see beforehand to recognize that object.'
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    tagline: 'Building mechanical machines that sense their environment and perform physical tasks.',
    iconName: 'Bot',
    badge: 'Hardware & Systems',
    simpleExplanation: 'Robotics is the blend of mechanical engineering, electronic circuits, and computer software to create machines (robots) that can physically move, manipulate objects, and perform tasks automatically or via remote control.',
    howItWorks: 'Every robot relies on three main parts: Sensors (to feel and see the world, like cameras or distance sensors), a Controller/Brain (a microprocessor running code to decide what to do), and Actuators (motors and gears to physically move).',
    everydayExamples: [
      'Robotic vacuum cleaners that map living rooms and avoid furniture legs',
      'Automated robotic arms welding car bodies on factory assembly lines',
      'Bomb-disposal robots operated remotely by defence personnel from a safe distance',
      'Surgical robotic tools helping surgeons make millimeter-precise incisions'
    ],
    whereItIsUsed: [
      'Space Exploration: Mars rovers (like Curiosity and Perseverance) gathering soil samples millions of kilometers away',
      'Warehousing: Automated rovers moving heavy crates inside Amazon and Flipkart fulfillment centers',
      'Disaster Relief: Exploring collapsed buildings after earthquakes to locate survivors safely'
    ],
    skillsToExplore: [
      'Hands-on assembly with school tinkering kits (like Arduino or micro:bit)',
      'Physics principles: Levers, pulleys, gear ratios, and electric motors',
      'Basic C/C++ or block coding to make LED lights blink and motors turn',
      '3D spatial imagination for mechanical assembly'
    ],
    relatedCareers: [
      'Robotics Engineer',
      'Mechatronics Specialist',
      'Automation Technician',
      'Industrial Designer'
    ],
    starterChallenge: 'Try building a simple line-following robot simulation using free online Tinkercad circuits.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    tagline: 'Defending computers, phones, networks, and digital data from hackers and thieves.',
    iconName: 'ShieldCheck',
    badge: 'Digital Defense',
    simpleExplanation: 'Cybersecurity is the practice of protecting digital systems, networks, and personal data from unauthorized access, digital attacks, and identity theft. Just as banks need physical vault locks and security guards, the internet needs cybersecurity to keep people safe.',
    howItWorks: 'Cybersecurity experts set up digital barriers (firewalls), scramble secret messages so only authorized people can read them (encryption), and regularly test computer networks to locate and fix loopholes before malicious attackers find them.',
    everydayExamples: [
      'One-Time Passwords (OTP) sent to your parent’s mobile phone during UPI payments',
      'Two-Factor Authentication (2FA) preventing someone from logging into your email even if they know your password',
      'Browser warning messages that say "This website is not secure" (HTTP vs HTTPS)',
      'Spam email filters catching fake lucky draw lottery scams'
    ],
    whereItIsUsed: [
      'Banking & UPI: Protecting billions of daily digital financial transactions from fraud',
      'National Security: Defending power grids, military communication, and satellite links from foreign attacks',
      'Healthcare: Safeguarding patient hospital medical records from public leaks'
    ],
    skillsToExplore: [
      'Understanding how the internet works (IP addresses, routers, and web browsers)',
      'Learning safe digital habits (never sharing OTPs, recognizing phishing links)',
      'Exploring Linux operating system basics and command line terminals',
      'Strong moral integrity and ethics (using knowledge to protect, never to harm)'
    ],
    relatedCareers: [
      'Cybersecurity Analyst',
      'Ethical Hacker (Penetration Tester)',
      'Digital Forensics Investigator',
      'Information Security Officer'
    ],
    starterChallenge: 'Conduct a personal security audit: Help a family member enable 2-Factor Authentication on their primary email account.'
  },
  {
    id: 'internet-of-things',
    title: 'Internet of Things (IoT)',
    tagline: 'Connecting everyday physical objects to the internet so they can share data and communicate.',
    iconName: 'Wifi',
    badge: 'Smart Connected Systems',
    simpleExplanation: 'The Internet of Things (IoT) refers to physical objects—such as light bulbs, water tanks, watches, farm sprinklers, or refrigerators—embedded with small sensors and internet connectivity so they can collect data and be controlled remotely.',
    howItWorks: 'A tiny sensor measures something (like temperature, water level, or heart rate) and transmits that data through Wi-Fi or cellular networks to a cloud server. You can view the status or trigger an action directly from a smartphone app.',
    everydayExamples: [
      'Smartwatches measuring daily steps, sleep quality, and heart rate synced to an app',
      'Smart LED bulbs you can dim or turn on from your phone or using voice commands',
      'FASTag toll passes that automatically deduct highway toll fees as vehicles drive through',
      'Smart water meters alerting apartment managers when overhead tanks are running dry'
    ],
    whereItIsUsed: [
      'Smart Agriculture: Soil moisture sensors triggering drip irrigation only when soil is genuinely dry',
      'Smart Cities: Streetlights that automatically brighten when cars approach and dim when roads are empty',
      'Logistics: GPS sensor tags tracking refrigerated medicine shipments to ensure they remain cold'
    ],
    skillsToExplore: [
      'Tinkering with ESP8266 or ESP32 Wi-Fi microcontroller boards',
      'Connecting temperature or motion sensors to a breadboard circuit',
      'Understanding basic networking (Wi-Fi, Bluetooth, and cloud APIs)',
      'Creative problem-solving for everyday household hassles'
    ],
    relatedCareers: [
      'IoT Solutions Architect',
      'Embedded Systems Engineer',
      'Smart City Infrastructure Planner',
      'Hardware Prototype Engineer'
    ],
    starterChallenge: 'Sketch an idea for an IoT device that would help reduce electricity or water wastage in your own school building.'
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    tagline: 'Turning mountains of raw numbers into actionable stories, insights, and solutions.',
    iconName: 'BarChart3',
    badge: 'Analytical Discovery',
    simpleExplanation: 'Data Science is the field that uses math, statistics, and programming to inspect massive piles of messy data, find hidden trends, and help leaders make smart decisions based on evidence rather than mere guesswork.',
    howItWorks: 'Data scientists gather numbers and logs from thousands of sources, clean up errors and missing values, calculate probability patterns, and build colorful interactive graphs that clearly communicate what the numbers mean.',
    everydayExamples: [
      'Cricket match wagon wheels and run-rate predictive graphs during IPL broadcasts',
      'Online shopping websites predicting which festivals cause a surge in bicycle orders',
      'Weather forecasts showing the probability of rainfall over your town for the next 7 days',
      'A school library analyzing which book genres students check out most frequently during monsoon'
    ],
    whereItIsUsed: [
      'Public Health: Tracking disease outbreaks across districts to allocate vaccine supplies before shortages happen',
      'Environmental Conservation: Analyzing satellite readings of ocean temperatures and forest cover loss',
      'Urban Transport: Studying metro passenger congestion to adjust train frequency during rush hours'
    ],
    skillsToExplore: [
      'Love for school statistics: Mean, median, mode, percentages, and bar charts',
      'Learning spreadsheet formulas in Microsoft Excel or Google Sheets',
      'Beginner data visualization with Python libraries like Pandas and Matplotlib',
      'Critical thinking: Asking "Does this data truly prove this conclusion, or is there a missing variable?"'
    ],
    relatedCareers: [
      'Data Scientist',
      'Business Intelligence Analyst',
      'Sports Performance Analyst',
      'Market Research Specialist'
    ],
    starterChallenge: 'Track your personal daily study or screen time for one week in a spreadsheet and draw a chart to see your weekly patterns.'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    tagline: 'Storing files and running applications on powerful remote computers accessible over the internet.',
    iconName: 'Cloud',
    badge: 'Internet Infrastructure',
    simpleExplanation: 'In the past, every computer game, photo, or document had to be saved directly onto your physical hard drive. Cloud computing means storing files and running programs on giant warehouses of interconnected computers (data centers) across the globe, accessible anytime via the internet.',
    howItWorks: 'Instead of buying an expensive supercomputer, companies rent compute power, storage, and database services from cloud providers (like Google Cloud, AWS, or Microsoft Azure) for pennies per hour, scaling up or down as needed.',
    everydayExamples: [
      'Google Drive and Google Photos backing up your school homework and memories automatically',
      'Streaming movies on Disney+ Hotstar or Netflix without having to download the entire video file first',
      'Collaborating simultaneously with school classmates on the same shared Google Docs document',
      'Multiplayer online games syncing player movements across thousands of players in real-time'
    ],
    whereItIsUsed: [
      'Education: Allowing millions of students to watch video lessons simultaneously during exams',
      'Banking: Running nationwide instant payment systems like UPI without server outages',
      'Scientific Research: Crunching astronomical satellite images on thousands of virtual servers'
    ],
    skillsToExplore: [
      'Understanding how client-server web architecture works',
      'Exploring basic Linux terminal commands (cd, ls, mkdir, grep)',
      'Understanding storage concepts (gigabytes vs terabytes, local vs remote)',
      'Exploring free student cloud programs like AWS Educate or Google Cloud Skills'
    ],
    relatedCareers: [
      'Cloud Solutions Architect',
      'DevOps Engineer',
      'Site Reliability Engineer (SRE)',
      'Database Administrator'
    ],
    starterChallenge: 'Create a shared document with a classmate and observe how changes appear on both screens in real time through cloud sync.'
  },
  {
    id: 'augmented-virtual-reality',
    title: 'Augmented & Virtual Reality (AR / VR)',
    tagline: 'Creating immersive digital 3D worlds and overlaying computer graphics onto the real world.',
    iconName: 'Glasses',
    badge: 'Immersive Media',
    simpleExplanation: 'Virtual Reality (VR) immerses you in a completely computer-generated 3D world using a headset that replaces what you see and hear. Augmented Reality (AR) keeps you in the real world but overlays interactive 3D digital elements on top of it through your phone screen or smart glasses.',
    howItWorks: 'Sensors track where your head and eyes are looking in 3D space 90 times every second, redrawing computer graphics instantly so your brain feels genuinely physically present inside the digital space.',
    everydayExamples: [
      'Instagram, Snapchat, or video calling face filters that place animated masks on your face',
      'Games like Pokémon GO where digital creatures appear standing on real street footpaths',
      'Google Search "View in 3D" letting you place a life-sized tiger or dinosaur in your living room',
      'Furniture apps showing how a new study table would look inside your actual bedroom before buying'
    ],
    whereItIsUsed: [
      'Medical Training: Allowing medical students to practice complex heart surgeries in risk-free VR simulations',
      'Aviation: Training pilots inside realistic virtual cockpits through extreme storm and landing scenarios',
      'Heritage Education: Taking students on virtual walkthroughs of ancient Indus Valley ruins or solar system planets'
    ],
    skillsToExplore: [
      'Interest in 3D geometry (X, Y, and Z coordinate axes)',
      'Tinkering with free game engines like Unity or Godot',
      '3D modeling basics in Blender or Tinkercad',
      'Storytelling and spatial game design'
    ],
    relatedCareers: [
      'AR/VR Developer',
      '3D Technical Artist',
      'Virtual Simulation Specialist',
      'Game Experience Designer'
    ],
    starterChallenge: 'Search for "tiger" or "human skeleton" on Google on a smartphone and tap "View in 3D" to see augmented reality in action.'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Technology',
    tagline: 'A secure, transparent digital ledger that records transactions without needing a single central boss.',
    iconName: 'Link',
    badge: 'Decentralized Records',
    simpleExplanation: 'A blockchain is a shared digital record book (ledger) duplicated across hundreds or thousands of independent computers. Once a block of information is recorded and verified, it is cryptographically locked into a chain and cannot be secretly altered or deleted by anyone.',
    howItWorks: 'Instead of trusting a single central company to keep records honest, every computer in the network checks every transaction using cryptographic math. If someone tries to tamper with an old record, the other computers reject the change.',
    everydayExamples: [
      'Verifying digital school graduation certificates so fake degrees cannot be forged',
      'Tracking medicines from pharmaceutical factory gates to pharmacies to prevent counterfeit drugs',
      'Digital property registration systems ensuring land ownership records cannot be illegally modified',
      'Smart contracts that automatically execute payments once a delivery is confirmed'
    ],
    whereItIsUsed: [
      'Supply Chains: Verifying that organic coffee beans or cotton garments were ethically sourced from real farmers',
      'Identity Verification: Giving citizens tamper-proof digital ID credentials they fully control',
      'Cross-border Trade: Settling import-export cargo documents between nations without weeks of paper delays'
    ],
    skillsToExplore: [
      'Basic cryptography concepts (secret codes, hashing, and digital signatures)',
      'Understanding the difference between centralized vs decentralized systems',
      'Logical problem-solving and computer networking',
      'Economic concepts of trust, verification, and ledgers'
    ],
    relatedCareers: [
      'Blockchain Developer',
      'Smart Contract Auditor',
      'Cryptographer',
      'Fintech Systems Architect'
    ],
    starterChallenge: 'Learn about simple hashing: Understand how entering a text generates a fixed unique code (like SHA-256) that changes if even one letter moves.'
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy & Clean Tech',
    tagline: 'Harnessing infinite natural forces like sunlight and wind to power our civilization cleanly.',
    iconName: 'Sun',
    badge: 'Green Future',
    simpleExplanation: 'Renewable energy technology captures natural, naturally replenishing energy sources—primarily sunlight, wind, flowing water, and geothermal heat—and converts them into clean electricity without burning fossil fuels or polluting the atmosphere.',
    howItWorks: 'Solar photovoltaic cells absorb photons from sunlight to knock electrons free and generate direct current (DC) electricity. Inverters convert this DC power into alternating current (AC) to power household lights and fans.',
    everydayExamples: [
      'Rooftop solar panels on school buildings and railway station roofs generating clean power',
      'Electric two-wheelers and auto-rickshaws charging at neighborhood battery stations',
      'Solar-powered water pumps irrigating agricultural fields without needing diesel fuel',
      'Tall white wind turbines rotating on coastal hills and farm plains'
    ],
    whereItIsUsed: [
      'National Power Grids: Massive solar parks (like Bhadla Solar Park in Rajasthan) powering hundreds of thousands of homes',
      'Electric Mobility: Replacing smoky diesel city buses with quiet electric buses',
      'Rural Electrification: Providing reliable solar power to remote mountain clinics that have no power lines'
    ],
    skillsToExplore: [
      'School Science: Laws of thermodynamics, conservation of energy, and electricity',
      'Understanding environmental impact: Carbon footprint and greenhouse gases',
      'Tinkering with small solar toy kits and rechargeable batteries',
      'Curiosity about battery chemistry (Lithium-ion and green hydrogen)'
    ],
    relatedCareers: [
      'Solar Energy Systems Engineer',
      'Battery Storage Scientist',
      'Wind Energy Technician',
      'Environmental Policy Consultant'
    ],
    starterChallenge: 'Check your home electricity bill to see how many kilowatt-hours (units) your family consumes each month and research how many solar panels could generate that amount.'
  },
  {
    id: 'drones-autonomous-systems',
    title: 'Drones & Autonomous Systems',
    tagline: 'Flying robotic vehicles that navigate the skies automatically to photograph, map, and deliver.',
    iconName: 'Navigation',
    badge: 'Aviation Tech',
    simpleExplanation: 'Drones (technically called Unmanned Aerial Vehicles or UAVs) are aircraft that fly without an onboard human pilot. They can be piloted remotely from the ground or programmed to fly entirely on their own using satellite GPS coordinates and onboard sensors.',
    howItWorks: 'Multiple electric propellers spin at varying speeds controlled hundreds of times per second by an onboard flight controller. Gyroscopes and accelerometers keep the drone completely stable even against gusty winds.',
    everydayExamples: [
      'Aerial camera drones capturing spectacular panoramic shots during cricket matches and weddings',
      'Survey drones mapping agricultural land boundaries under the SVAMITVA scheme in Indian villages',
      'Drones spraying liquid bio-fertilizers evenly over hectares of tall sugarcane fields in minutes',
      'Delivery drones transporting emergency snake antivenom or blood units across mountain valleys'
    ],
    whereItIsUsed: [
      'Disaster Management: Flying over flood zones to spot stranded families and drop life jackets',
      'Infrastructure Inspection: Checking high-voltage power transmission lines and railway bridges for cracks',
      'Forestry & Wildlife: Counting endangered rhinoceroses and tigers without disturbing natural habitats'
    ],
    skillsToExplore: [
      'Basic principles of flight: Lift, thrust, gravity, and aerodynamic drag',
      'Hands-on aeromodelling or radio-controlled (RC) plane building',
      'Understanding digital maps and GPS coordinates (latitude and longitude)',
      'Knowledge of civil aviation rules and responsible flying'
    ],
    relatedCareers: [
      'Drone Design Engineer',
      'Certified Drone Remote Pilot',
      'Geospatial Mapping Specialist',
      'Autonomous Flight Software Developer'
    ],
    starterChallenge: 'Download a free flight simulator app and try hovering a quadcopter steadily in one spot despite virtual crosswinds.'
  },
  {
    id: 'three-d-printing',
    title: '3D Printing & Additive Manufacturing',
    tagline: 'Building physical three-dimensional objects layer by layer directly from digital computer blueprints.',
    iconName: 'Box',
    badge: 'Modern Manufacturing',
    simpleExplanation: 'Unlike traditional manufacturing where a machine carves or cuts material away from a block of wood or metal, 3D printing is additive: it melts material (like plastic, resin, or metal powder) and deposits it microscopically layer by thin layer until a complete physical object is formed.',
    howItWorks: 'An engineer creates a 3D model on a computer. Slicing software cuts this model into thousands of paper-thin horizontal slices. The 3D printer nozzle moves across the bed, extruding heated material along the exact coordinates of each slice.',
    everydayExamples: [
      'School students printing custom plastic robot chassis and gears in Atal Tinkering Labs',
      'Dentists printing perfectly customized dental braces and tooth aligners from 3D mouth scans',
      'Customized lightweight prosthetic hands printed at low cost for children with limb differences',
      'Architects creating detailed scale models of apartment complexes in hours rather than weeks'
    ],
    whereItIsUsed: [
      'Aerospace: Printing lightweight rocket engine nozzles that have complex cooling channels impossible to drill',
      'Medicine: 3D printing titanium bone implants tailored exactly to a patient’s unique skeletal shape',
      'Construction: Giant robotic concrete 3D printers building disaster-relief houses in days'
    ],
    skillsToExplore: [
      'Computer-Aided Design (CAD) using free student tools like Tinkercad or Onshape',
      'Spatial awareness: Visualizing how a 2D drawing folds into a 3D physical object',
      'Material science: Understanding the properties of plastics, metals, and resins',
      'Iterative problem-solving: Testing a printed part, seeing where it breaks, and improving the design'
    ],
    relatedCareers: [
      'Additive Manufacturing Engineer',
      '3D CAD Modeler',
      'Biomedical Device Designer',
      'Rapid Prototyping Specialist'
    ],
    starterChallenge: 'Visit Tinkercad.com (free in web browser) and try designing a simple personalized keychain with your name in 3D.'
  }
];

export function getTechnologyById(id) {
  return TECHNOLOGIES.find(t => t.id === id) || TECHNOLOGIES[0];
}
