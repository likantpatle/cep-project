// CareerQuest Open Educational Learning Resources
// Carefully curated free and open-access resources for Class 9-10 students

export const RESOURCE_CATEGORIES = [
  'All Categories',
  'Career Guidance',
  'Programming',
  'Artificial Intelligence',
  'Cybersecurity',
  'Robotics',
  'Data Science',
  'Design',
  'Mathematics',
  'Science',
  'Communication',
  'Entrepreneurship',
  'Competitive & Foundation'
];

export const RESOURCES = [
  // 1. Career Guidance
  {
    id: 'res-cg-1',
    title: 'National Career Service (NCS) Portal',
    category: 'Career Guidance',
    description: 'An official initiative by the Government of India providing structured career profiles, sector overviews, and qualification requirements across Indian industries.',
    level: 'Beginner',
    type: 'Platform',
    provider: 'Ministry of Labour & Employment, Govt of India',
    url: 'https://www.ncs.gov.in',
    isFree: true,
    tags: ['Indian Careers', 'Government Portal', 'Career Profiles']
  },
  {
    id: 'res-cg-2',
    title: 'NCERT Career Counseling & Guidance Modules',
    category: 'Career Guidance',
    description: 'Free downloadable student handbooks for Classes 9 to 12 explaining stream choices, personal aptitudes, and vocational opportunities.',
    level: 'Beginner',
    type: 'Reading & Guide',
    provider: 'NCERT India',
    url: 'https://ncert.nic.in',
    isFree: true,
    tags: ['Class 9–10', 'Stream Selection', 'NCERT']
  },
  {
    id: 'res-cg-3',
    title: 'SWAYAM Central Student Learning Portal',
    category: 'Career Guidance',
    description: 'National portal offering free foundational courses designed by Indian professors from Class 9 to post-graduation level.',
    level: 'Beginner',
    type: 'Course Platform',
    provider: 'Ministry of Education, Govt of India',
    url: 'https://swayam.gov.in',
    isFree: true,
    tags: ['Online Learning', 'Free Certification Audit', 'Govt of India']
  },

  // 2. Programming
  {
    id: 'res-pr-1',
    title: 'CS50 for Beginners (Harvard University)',
    category: 'Programming',
    description: 'The world-famous introduction to the intellectual enterprises of computer science and the art of programming. Free open courseware.',
    level: 'Beginner',
    type: 'Video Series & Course',
    provider: 'Harvard University / edX',
    url: 'https://cs50.harvard.edu/x/',
    isFree: true,
    tags: ['Computer Science', 'Logic', 'C & Python']
  },
  {
    id: 'res-pr-2',
    title: 'Scratch Visual Coding by MIT',
    category: 'Programming',
    description: 'Create interactive stories, games, and animations without worrying about syntax errors. Ideal for Class 9 students beginning their coding journey.',
    level: 'Beginner',
    type: 'Interactive Tool',
    provider: 'MIT Media Lab',
    url: 'https://scratch.mit.edu',
    isFree: true,
    tags: ['Visual Coding', 'Game Design', 'Interactive']
  },
  {
    id: 'res-pr-3',
    title: 'Python for Beginners (W3Schools / Python.org)',
    category: 'Programming',
    description: 'Bite-sized, practical tutorials teaching Python syntax, loops, lists, and basic problem solving with an in-browser code editor.',
    level: 'Beginner',
    type: 'Interactive Course',
    provider: 'W3Schools & Python Software Foundation',
    url: 'https://www.w3schools.com/python/',
    isFree: true,
    tags: ['Python', 'Hands-on', 'Browser Editor']
  },

  // 3. Artificial Intelligence
  {
    id: 'res-ai-1',
    title: 'AI for Everyone by Andrew Ng',
    category: 'Artificial Intelligence',
    description: 'A non-technical, friendly guide explaining what AI can and cannot do, how machine learning works, and how AI impacts everyday society.',
    level: 'Beginner',
    type: 'Course',
    provider: 'DeepLearning.AI / Coursera (Free Audit)',
    url: 'https://www.coursera.org/learn/ai-for-everyone',
    isFree: true,
    tags: ['Non-Technical', 'Everyday AI', 'DeepLearning.AI']
  },
  {
    id: 'res-ai-2',
    title: 'Google Teachable Machine',
    category: 'Artificial Intelligence',
    description: 'Train your very own machine learning model right in your browser using your webcam, microphone, or pictures with zero coding required.',
    level: 'Beginner',
    type: 'Interactive Tool',
    provider: 'Google Experiments',
    url: 'https://teachablemachine.withgoogle.com',
    isFree: true,
    tags: ['Interactive AI', 'Computer Vision', 'Hands-on']
  },
  {
    id: 'res-ai-3',
    title: 'Elements of AI',
    category: 'Artificial Intelligence',
    description: 'A free online introductory course with interactive exercises designed for anyone curious about the basics of artificial intelligence.',
    level: 'Beginner',
    type: 'Interactive Guide',
    provider: 'University of Helsinki & MinnaLearn',
    url: 'https://www.elementsofai.com',
    isFree: true,
    tags: ['Free Certificate', 'Interactive', 'AI Basics']
  },

  // 4. Cybersecurity
  {
    id: 'res-cs-1',
    title: 'OverTheWire: Bandit Wargames',
    category: 'Cybersecurity',
    description: 'A gamified, level-by-level challenge that teaches students fundamental Linux commands and computer security principles in an engaging puzzle format.',
    level: 'Beginner to Intermediate',
    type: 'Interactive Game',
    provider: 'OverTheWire Community',
    url: 'https://overthewire.org/wargames/bandit/',
    isFree: true,
    tags: ['Linux', 'Terminal', 'Security Puzzles']
  },
  {
    id: 'res-cs-2',
    title: 'Cyber Swachhta Kendra (Indian Computer Emergency Response Team)',
    category: 'Cybersecurity',
    description: 'National cybersecurity portal with practical tips on safe internet surfing, recognizing digital fraud, and botnet clean-up tools.',
    level: 'Beginner',
    type: 'Guide & Toolkit',
    provider: 'CERT-In / Ministry of Electronics & IT',
    url: 'https://www.csk.gov.in',
    isFree: true,
    tags: ['Digital Safety', 'Govt of India', 'Awareness']
  },
  {
    id: 'res-cs-3',
    title: 'Cisco Networking Academy: Intro to Cybersecurity',
    category: 'Cybersecurity',
    description: 'A self-paced beginner course exploring digital threats, privacy protection, and career opportunities in cybersecurity defense.',
    level: 'Beginner',
    type: 'Course',
    provider: 'Cisco Networking Academy',
    url: 'https://www.netacad.com',
    isFree: true,
    tags: ['Networking', 'Security Foundations', 'Free Course']
  },

  // 5. Robotics
  {
    id: 'res-rb-1',
    title: 'Tinkercad Circuits & Arduino Simulator',
    category: 'Robotics',
    description: 'Build and simulate electronic circuits with virtual LEDs, sensors, breadboards, and Arduino microcontrollers in 3D right inside your browser.',
    level: 'Beginner',
    type: 'Interactive Tool',
    provider: 'Autodesk Tinkercad',
    url: 'https://www.tinkercad.com/circuits',
    isFree: true,
    tags: ['Circuit Simulator', 'Arduino', 'Virtual Labs']
  },
  {
    id: 'res-rb-2',
    title: 'Atal Innovation Mission Student Resources',
    category: 'Robotics',
    description: 'Hands-on tinkering modules covering robotics, electronics, rapid prototyping, and sensor integration designed for Indian high school students.',
    level: 'Beginner',
    type: 'Reading & Guide',
    provider: 'NITI Aayog, Govt of India',
    url: 'https://aim.gov.in',
    isFree: true,
    tags: ['Atal Tinkering Lab', 'NITI Aayog', 'School Projects']
  },

  // 6. Data Science
  {
    id: 'res-ds-1',
    title: 'Kaggle Micro-Courses for Beginners',
    category: 'Data Science',
    description: 'Free, interactive 3-hour courses covering Python, Pandas data manipulation, and data visualization using real-world datasets.',
    level: 'Beginner to Intermediate',
    type: 'Interactive Platform',
    provider: 'Kaggle (Google)',
    url: 'https://www.kaggle.com/learn',
    isFree: true,
    tags: ['Python', 'Data Visualization', 'Pandas']
  },
  {
    id: 'res-ds-2',
    title: 'StatQuest with Josh Starmer',
    category: 'Data Science',
    description: 'Delightfully clear, visual, and friendly animated video explanations of statistics, probability, and machine learning concepts.',
    level: 'Beginner',
    type: 'Video Series',
    provider: 'StatQuest (YouTube)',
    url: 'https://statquest.org',
    isFree: true,
    tags: ['Statistics', 'Visual Learning', 'Animations']
  },

  // 7. Design
  {
    id: 'res-dsg-1',
    title: 'Canva Design School for Students',
    category: 'Design',
    description: 'Free visual guides on color theory, typography pairings, poster composition, and digital presentation design.',
    level: 'Beginner',
    type: 'Interactive Course',
    provider: 'Canva Education',
    url: 'https://www.canva.com/designschool/',
    isFree: true,
    tags: ['Graphic Design', 'Visual Balance', 'Presentations']
  },
  {
    id: 'res-dsg-2',
    title: 'Figma for High School Designers',
    category: 'Design',
    description: 'Learn how to use the industry-standard UI/UX design tool to design your own smartphone app screens and wireframes.',
    level: 'Beginner',
    type: 'Video Series & Platform',
    provider: 'Figma Community',
    url: 'https://www.figma.com/education/',
    isFree: true,
    tags: ['UI/UX', 'App Wireframing', 'Free for Education']
  },

  // 8. Mathematics
  {
    id: 'res-math-1',
    title: 'Khan Academy High School Mathematics',
    category: 'Mathematics',
    description: 'World-class, completely free interactive math lessons tailored for Class 9 and 10 covering Algebra, Geometry, Trigonometry, and Statistics.',
    level: 'Beginner',
    type: 'Interactive Platform',
    provider: 'Khan Academy India',
    url: 'https://www.khanacademy.org',
    isFree: true,
    tags: ['NCERT Aligned', 'Class 9–10', 'Practice Exercises']
  },
  {
    id: 'res-math-2',
    title: '3Blue1Brown Visual Mathematics',
    category: 'Mathematics',
    description: 'Gorgeous animated geometric visualizations of calculus, linear algebra, and mathematical paradoxes that make deep math click intuitively.',
    level: 'Intermediate',
    type: 'Video Series',
    provider: '3Blue1Brown (Grant Sanderson)',
    url: 'https://www.3blue1brown.com',
    isFree: true,
    tags: ['Visual Math', 'Intuition', 'Animations']
  },

  // 9. Science
  {
    id: 'res-sci-1',
    title: 'PhET Interactive Science Simulations',
    category: 'Science',
    description: 'Interactive, game-like simulations for Physics, Chemistry, and Biology from the University of Colorado Boulder. Great for visualizing atoms, circuits, and forces.',
    level: 'Beginner',
    type: 'Interactive Tool',
    provider: 'University of Colorado Boulder',
    url: 'https://phet.colorado.edu',
    isFree: true,
    tags: ['Physics Sims', 'Chemistry Experiments', 'Interactive']
  },
  {
    id: 'res-sci-2',
    title: 'Crash Course Science',
    category: 'Science',
    description: 'High-energy, beautifully animated 10-minute video breakdowns of Biology, Chemistry, Physics, Astronomy, and Ecology.',
    level: 'Beginner',
    type: 'Video Series',
    provider: 'Crash Course (YouTube)',
    url: 'https://thecrashcourse.com',
    isFree: true,
    tags: ['Biology', 'Chemistry', 'Fun & Educational']
  },

  // 10. Communication
  {
    id: 'res-comm-1',
    title: 'BBC Young Reporter & Media Literacy',
    category: 'Communication',
    description: 'Free resources teaching teenagers how to spot fake news, conduct ethical interviews, write broadcast scripts, and present on camera.',
    level: 'Beginner',
    type: 'Guide & Activities',
    provider: 'BBC Academy',
    url: 'https://www.bbc.co.uk/youngreporter',
    isFree: true,
    tags: ['Journalism', 'Public Speaking', 'Fact-checking']
  },
  {
    id: 'res-comm-2',
    title: 'TED-Ed Student Talks Program',
    category: 'Communication',
    description: 'Guides and masterclasses helping high school students discover their unique voice, develop public speaking skills, and deliver inspiring presentations.',
    level: 'Beginner',
    type: 'Video Series & Guide',
    provider: 'TED Conferences',
    url: 'https://ed.ted.com',
    isFree: true,
    tags: ['Public Speaking', 'Debating', 'Storytelling']
  },

  // 11. Entrepreneurship
  {
    id: 'res-ent-1',
    title: 'Y Combinator Startup School (Student Friendly Modules)',
    category: 'Entrepreneurship',
    description: 'Practical lectures by successful startup founders on how to talk to users, validate real problems, and build early prototypes with minimal capital.',
    level: 'Intermediate',
    type: 'Video Series',
    provider: 'Y Combinator',
    url: 'https://www.startupschool.org',
    isFree: true,
    tags: ['Startups', 'Idea Validation', 'Founder Talks']
  },
  {
    id: 'res-ent-2',
    title: 'Wadhwani Foundation Entrepreneurship Ignite',
    category: 'Entrepreneurship',
    description: 'Free interactive modules for young students to learn ideation, customer empathy, financial budgeting, and pitch presentations.',
    level: 'Beginner',
    type: 'Course',
    provider: 'Wadhwani Foundation India',
    url: 'https://wadhwanifoundation.org',
    isFree: true,
    tags: ['Indian Ecosystem', 'Student Startups', 'Practical Skills']
  },

  // 12. Competitive & Foundation
  {
    id: 'res-fd-1',
    title: 'DIKSHA National Digital Infrastructure for Teachers & Students',
    category: 'Competitive & Foundation',
    description: 'Official Ministry of Education portal featuring NCERT QR-code linked video lessons, interactive worksheets, and state board materials in multiple Indian languages.',
    level: 'Beginner',
    type: 'Platform',
    provider: 'Ministry of Education, Govt of India',
    url: 'https://diksha.gov.in',
    isFree: true,
    tags: ['Class 9–10 Boards', 'Multilingual', 'Govt of India']
  },
  {
    id: 'res-fd-2',
    title: 'National Talent Search & Science Olympiad Foundation Archive',
    category: 'Competitive & Foundation',
    description: 'Curated past question papers and conceptual problem sets for Class 9 and 10 students preparing for NTSE, Kishore Vaigyanik, and National Olympiads.',
    level: 'Intermediate',
    type: 'Reading & Practice',
    provider: 'Science Olympiad Foundation (SOF) / NCERT',
    url: 'https://sofworld.org',
    isFree: true,
    tags: ['Olympiads', 'Analytical Practice', 'Foundation']
  }
];

export function filterResources({ category = 'All Categories', search = '', level = 'all' }) {
  return RESOURCES.filter(res => {
    const categoryMatch = category === 'All Categories' || res.category === category;
    const levelMatch = level === 'all' || res.level.toLowerCase().includes(level.toLowerCase());
    const searchMatch = !search.trim() ||
      res.title.toLowerCase().includes(search.toLowerCase()) ||
      res.description.toLowerCase().includes(search.toLowerCase()) ||
      res.provider.toLowerCase().includes(search.toLowerCase()) ||
      res.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

    return categoryMatch && levelMatch && searchMatch;
  });
}
