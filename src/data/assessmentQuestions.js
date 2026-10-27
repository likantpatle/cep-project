// CareerQuest Assessment Engine: 15 questions tailored for Class 9-10 students
// Evaluates 8 Interest Dimensions without forcing career choice:
// 1. analytical - Analytical & Logical
// 2. technology - Technology & Computing
// 3. scientific - Scientific & Research
// 4. creative - Creative & Design
// 5. communication - Communication & Media
// 6. social - Social & Helping
// 7. leadership - Leadership & Business
// 8. practical - Practical & Technical

export const DIMENSIONS = {
  analytical: {
    id: 'analytical',
    label: 'Analytical & Logical',
    description: 'You enjoy breaking down complex problems, recognizing patterns, analyzing data, and finding logical answers.',
    color: '#2563EB',
    iconName: 'Brain'
  },
  technology: {
    id: 'technology',
    label: 'Technology & Computing',
    description: 'You are curious about how computers, apps, hardware, and digital systems operate and want to build tech solutions.',
    color: '#0891B2',
    iconName: 'Laptop'
  },
  scientific: {
    id: 'scientific',
    label: 'Scientific & Research',
    description: 'You are naturally inquisitive about the physical world, living organisms, chemical reactions, and scientific experiments.',
    color: '#059669',
    iconName: 'FlaskConical'
  },
  creative: {
    id: 'creative',
    label: 'Creative & Design',
    description: 'You like expressing ideas visually, designing aesthetic spaces, drafting artwork, or styling unique digital creations.',
    color: '#D97706',
    iconName: 'Palette'
  },
  communication: {
    id: 'communication',
    label: 'Communication & Media',
    description: 'You enjoy storytelling, debating, writing essays, public speaking, explaining ideas clearly, and creating media.',
    color: '#7C3AED',
    iconName: 'MessageSquare'
  },
  social: {
    id: 'social',
    label: 'Social & Helping',
    description: 'You care deeply about community welfare, teaching classmates, resolving conflicts, and improving health or well-being.',
    color: '#E11D48',
    iconName: 'HeartHandshake'
  },
  leadership: {
    id: 'leadership',
    label: 'Leadership & Business',
    description: 'You take initiative to manage team events, organize stalls, understand finances, and lead group presentations.',
    color: '#B45309',
    iconName: 'TrendingUp'
  },
  practical: {
    id: 'practical',
    label: 'Practical & Technical',
    description: 'You like working with physical tools, assembling circuits, repairing gadgets, machinery, and hands-on experiments.',
    color: '#4B5563',
    iconName: 'Wrench'
  }
};

export const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    category: 'Free Time & Hobbies',
    question: 'On a free Sunday afternoon with no homework, what activity sounds most engaging to you?',
    options: [
      {
        text: 'Solving tricky number puzzles, riddles, or playing strategy chess games',
        weights: { analytical: 3, practical: 1 }
      },
      {
        text: 'Tinkering with computer software, trying a simple code script, or exploring smartphone settings',
        weights: { technology: 3, analytical: 1 }
      },
      {
        text: 'Sketching illustrations, editing photos/posters, or decorating a model project',
        weights: { creative: 3, practical: 1 }
      },
      {
        text: 'Volunteering with a neighborhood group or helping a friend understand a difficult chapter',
        weights: { social: 3, communication: 1 }
      }
    ]
  },
  {
    id: 2,
    category: 'School Science Project',
    question: 'When your school announces an annual science and exhibition fair, which role do you naturally gravitate toward?',
    options: [
      {
        text: 'Testing hypotheses and conducting experiments to see how variables interact',
        weights: { scientific: 3, analytical: 1 }
      },
      {
        text: 'Building a working electronic circuit, robotic arm, or mechanical pulley system',
        weights: { practical: 2, technology: 2 }
      },
      {
        text: 'Creating the visually appealing display charts, infographics, and project banner',
        weights: { creative: 3, communication: 1 }
      },
      {
        text: 'Pitching the project to visiting judges, explaining concepts clearly, and answering questions',
        weights: { communication: 3, leadership: 1 }
      }
    ]
  },
  {
    id: 3,
    category: 'Problem-Solving Style',
    question: 'When a new school festival or club activity has to be planned, how do you best like to help?',
    options: [
      {
        text: 'Planning the budget, calculating estimated costs, and tracking ticket or pass sales',
        weights: { leadership: 2, analytical: 2 }
      },
      {
        text: 'Leading the student volunteer committee, assigning duties, and motivating classmates',
        weights: { leadership: 3, communication: 1 }
      },
      {
        text: 'Setting up the sound system, projector cabling, and lighting hardware',
        weights: { practical: 3, technology: 1 }
      },
      {
        text: 'Drafting the announcements, hosting the stage on the microphone, or writing the script',
        weights: { communication: 3, creative: 1 }
      }
    ]
  },
  {
    id: 4,
    category: 'Subject Curiosity',
    question: 'Which of these classroom topics makes you want to ask the teacher extra questions?',
    options: [
      {
        text: 'How living cells duplicate, DNA traits are inherited, or vaccines fight pathogens',
        weights: { scientific: 3, social: 1 }
      },
      {
        text: 'How mathematical equations predict planetary motion or calculate geometric shapes',
        weights: { analytical: 3, scientific: 1 }
      },
      {
        text: 'How markets work, why money loses or gains value, and how local businesses turn a profit',
        weights: { leadership: 3, analytical: 1 }
      },
      {
        text: 'How human civilizations evolved, why laws were established, and how society changes',
        weights: { social: 2, communication: 2 }
      }
    ]
  },
  {
    id: 5,
    category: 'Hands-on Activities',
    question: 'If a toy, bicycle, or household electronic gadget stops working properly, what do you usually do?',
    options: [
      {
        text: 'Grab tools, open it up carefully, inspect the gears or wires, and try to repair it',
        weights: { practical: 3, technology: 1 }
      },
      {
        text: 'Read the user manual, search for diagnostic error codes, and troubleshoot methodically',
        weights: { analytical: 2, technology: 2 }
      },
      {
        text: 'Think about redesigning its exterior so it would look more durable and user-friendly',
        weights: { creative: 3, practical: 1 }
      },
      {
        text: 'Advise family members whether repairing it or finding a better alternative makes economic sense',
        weights: { leadership: 2, practical: 1 }
      }
    ]
  },
  {
    id: 6,
    category: 'Digital World',
    question: 'When you look at popular mobile apps like maps, games, or social platforms, what fascinates you most?',
    options: [
      {
        text: 'The logic and code running behind the scenes to process user taps in milliseconds',
        weights: { technology: 3, analytical: 1 }
      },
      {
        text: 'The visual interface layout, icon styling, color choices, and smooth transitions',
        weights: { creative: 3, technology: 1 }
      },
      {
        text: 'How the app connects people, enables communities to help one another, or assists patients',
        weights: { social: 3, communication: 1 }
      },
      {
        text: 'How the startup makes revenue, advertises to users, and scales into a company',
        weights: { leadership: 3, analytical: 1 }
      }
    ]
  },
  {
    id: 7,
    category: 'Community & Society',
    question: 'If you were given a school grant to improve your local neighborhood, which initiative would you pick?',
    options: [
      {
        text: 'Organizing free health checkups, first aid workshops, and mental wellness sessions',
        weights: { social: 3, scientific: 1 }
      },
      {
        text: 'Designing an automated water-saving sensor or waste sorting mechanism for apartments',
        weights: { technology: 2, practical: 2 }
      },
      {
        text: 'Publishing a community youth newsletter or conducting public debates on local civic issues',
        weights: { communication: 3, social: 1 }
      },
      {
        text: 'Setting up a student micro-business selling recycled crafts to fund municipal tree planting',
        weights: { leadership: 2, creative: 2 }
      }
    ]
  },
  {
    id: 8,
    category: 'Study & Work Style',
    question: 'What kind of school assignment or project feels most satisfying to submit?',
    options: [
      {
        text: 'A structured lab report with accurate data tables, graphs, and logical conclusions',
        weights: { scientific: 2, analytical: 2 }
      },
      {
        text: 'A multimedia slide deck, poster, short documentary film, or creative story',
        weights: { creative: 2, communication: 2 }
      },
      {
        text: 'A functioning prototype or model made with cardboard, motors, wires, or 3D materials',
        weights: { practical: 3, creative: 1 }
      },
      {
        text: 'A business proposal showing cost calculations, competitor comparison, and growth targets',
        weights: { leadership: 3, analytical: 1 }
      }
    ]
  },
  {
    id: 9,
    category: 'Curiosity & Inquiry',
    question: 'When reading news or articles, which headline would you click first?',
    options: [
      {
        text: '"New deep-space telescope discovers signs of atmosphere on an exoplanet"',
        weights: { scientific: 3, analytical: 1 }
      },
      {
        text: '"Autonomous drones deployed for emergency medical supply delivery in remote hills"',
        weights: { technology: 3, practical: 1 }
      },
      {
        text: '"Student-led social initiative helps 500 under-resourced children access books"',
        weights: { social: 3, leadership: 1 }
      },
      {
        text: '"Inside an architecture firm designing India\'s new zero-carbon sustainable school campus"',
        weights: { creative: 2, practical: 2 }
      }
    ]
  },
  {
    id: 10,
    category: 'Communication & Expression',
    question: 'When sharing your viewpoint on an important debate, what comes most naturally to you?',
    options: [
      {
        text: 'Backing your arguments with verified statistical data, facts, and logical deductions',
        weights: { analytical: 3, communication: 1 }
      },
      {
        text: 'Using persuasive examples, emotional stories, and expressive speech to win people over',
        weights: { communication: 3, social: 1 }
      },
      {
        text: 'Drawing an intuitive diagram or flowchart on the blackboard to clarify the concept',
        weights: { creative: 2, analytical: 2 }
      },
      {
        text: 'Listening to all sides calmly and negotiating a practical consensus that works for all',
        weights: { leadership: 2, social: 2 }
      }
    ]
  },
  {
    id: 11,
    category: 'Creative Output',
    question: 'If you had to build something new from scratch, what would you feel proudest creating?',
    options: [
      {
        text: 'A website, interactive quiz game, or mobile application built with code',
        weights: { technology: 3, creative: 1 }
      },
      {
        text: 'A piece of music, architectural sketch, comic strip, or ceramic sculpture',
        weights: { creative: 3, practical: 1 }
      },
      {
        text: 'A working agricultural drip irrigation model or solar cooker for farmers',
        weights: { practical: 2, scientific: 2 }
      },
      {
        text: 'A student cooperative club that pools funds to buy sports gear for everyone',
        weights: { leadership: 3, social: 1 }
      }
    ]
  },
  {
    id: 12,
    category: 'Helping & Empathy',
    question: 'A friend is feeling overwhelmed by their upcoming exams. How do you instinctively respond?',
    options: [
      {
        text: 'Sit with them, listen with empathy, and offer gentle reassurance to ease their anxiety',
        weights: { social: 3, communication: 1 }
      },
      {
        text: 'Help them construct a structured, realistic study timetable broken into hour-by-hour milestones',
        weights: { analytical: 2, leadership: 2 }
      },
      {
        text: 'Share summaries, mind maps, or mnemonic memory drawings you sketched for fast recall',
        weights: { creative: 2, social: 2 }
      },
      {
        text: 'Search for curated video lessons, online quizzes, and digital flashcard apps to practice together',
        weights: { technology: 2, social: 2 }
      }
    ]
  },
  {
    id: 13,
    category: 'Analytical Thinking',
    question: 'You are presented with a mystery riddle where several clues appear contradictory. What is your approach?',
    options: [
      {
        text: 'Test each clue against possible hypotheses step-by-step until the contradiction is eliminated',
        weights: { analytical: 3, scientific: 1 }
      },
      {
        text: 'Look for psychological motives: why would people in the riddle act that way?',
        weights: { social: 2, communication: 2 }
      },
      {
        text: 'Write a quick spreadsheet or python script to cross-check combinations',
        weights: { technology: 3, analytical: 1 }
      },
      {
        text: 'Discuss with teammates to brainstorm unconventional, lateral-thinking angles',
        weights: { communication: 2, leadership: 2 }
      }
    ]
  },
  {
    id: 14,
    category: 'Working with Equipment',
    question: 'Which of these workshop or lab environments sounds most exciting to spend a morning in?',
    options: [
      {
        text: 'A chemistry or microbiology lab with test tubes, petri dishes, and microscopes',
        weights: { scientific: 3, practical: 1 }
      },
      {
        text: 'A computer lab running code compilers, animation software, and 3D modeling tools',
        weights: { technology: 3, creative: 1 }
      },
      {
        text: 'A vocational mechanical workshop with soldering irons, lathes, 3D printers, and hand tools',
        weights: { practical: 3, analytical: 1 }
      },
      {
        text: 'A media recording studio with professional microphones, video switchers, and lighting boards',
        weights: { communication: 2, creative: 2 }
      }
    ]
  },
  {
    id: 15,
    category: 'Looking Forward',
    question: 'When you imagine a fulfilling career in your twenties, which outcome matters most to you?',
    options: [
      {
        text: 'Solving challenging technical or mathematical puzzles that advance human knowledge',
        weights: { analytical: 2, technology: 2 }
      },
      {
        text: 'Directly improving the lives of individuals, patients, students, or community members',
        weights: { social: 3, scientific: 1 }
      },
      {
        text: 'Designing beautiful structures, media, products, or original artistic works',
        weights: { creative: 3, practical: 1 }
      },
      {
        text: 'Building organizations, driving business growth, leading teams, or shaping public policy',
        weights: { leadership: 3, communication: 1 }
      }
    ]
  }
];

export function calculateAssessmentProfile(answers) {
  const scores = {
    analytical: 0,
    technology: 0,
    scientific: 0,
    creative: 0,
    communication: 0,
    social: 0,
    leadership: 0,
    practical: 0
  };

  const maxPossible = {
    analytical: 18,
    technology: 18,
    scientific: 16,
    creative: 18,
    communication: 16,
    social: 18,
    leadership: 16,
    practical: 16
  };

  answers.forEach(({ questionId, selectedOptionIndex }) => {
    if (selectedOptionIndex === null || selectedOptionIndex === undefined) return;
    const q = ASSESSMENT_QUESTIONS.find(item => item.id === questionId);
    if (!q || !q.options[selectedOptionIndex]) return;
    const weights = q.options[selectedOptionIndex].weights;
    Object.keys(weights).forEach(dim => {
      scores[dim] = (scores[dim] || 0) + weights[dim];
    });
  });

  const profile = Object.keys(DIMENSIONS).map(key => {
    const raw = scores[key] || 0;
    const max = maxPossible[key] || 16;
    let percentage = Math.round((raw / max) * 100);
    if (percentage < 20 && raw > 0) percentage = 25;
    if (percentage > 95) percentage = 95;
    if (percentage < 15) percentage = 15;

    return {
      id: key,
      ...DIMENSIONS[key],
      rawScore: raw,
      percentage: percentage
    };
  });

  profile.sort((a, b) => b.percentage - a.percentage);

  const topDimensions = profile.slice(0, 3);

  let summaryText = `Your responses show high affinity in ${topDimensions[0].label} (${topDimensions[0].percentage}%)`;
  if (topDimensions[1]) {
    summaryText += ` and ${topDimensions[1].label} (${topDimensions[1].percentage}%)`;
  }
  summaryText += `. This indicates you enjoy activities that engage these problem-solving and creative patterns. Keep in mind that your interests will continue to grow as you explore more subjects!`;

  return {
    profile,
    topDimensions,
    summaryText
  };
}
