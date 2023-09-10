interface Project {
    title: string,
    description: string,
    language: string[],
    image: string,
    link: string,
    code: string
    date: Date;
}

const projects: Project[] = [
    {
        title: 'Portfolio',
        description: 'None other than this very own portfolio consisting of who I am as a person, as well as my experiences in Tech. This portfolio was developed as a personal project, to embark on Next.js and Typescript.',
        language: ['Next.js', 'Typescript', 'Tailwind CSS'],
        image: '/img/portfolio.png',
        link: 'https://thinzarhninyu.me',
        code: 'https://github.com/thinzarhninyu/portfolio',
        date: new Date('2023-08-29')
    },
    {
        title: 'Discord Bot',
        description: 'Discord bot made with discord.py and OPENAI. A conversational bot, accompanied by a ChatGPT bot (access using \'/ai\' or \'/gpt\' commands. Invite your bot by clicking on the \'Demo\' button below!',
        language: ['Python'],
        image: '/img/discord.jpg',
        // link: 'https://discord.com/api/oauth2/authorize?client_id=1145359721780478093&permissions=1084479764544&scope=bot',
        link: '',
        code: 'https://github.com/thinzarhninyu/discord-bot',
        date: new Date('2023-08-29')
    },
    {
        title: 'Telegram Bot',
        description: 'Telegram bot made with telegram.ext and OPENAI, and integrated with MySQL. A conversational bot, accompanied by a ChatGPT bot (access using \'/ai\' or \'/gpt\' commands.',
        language: ['Python'],
        image: '/img/telegram.jpg',
        link: '',
        code: 'https://github.com/thinzarhninyu/telegram-bot',
        date: new Date('2023-07-29')
    },
    {
        title: 'Techzero',
        description: 'Inspired by Challenger, an e-commerce tech platform developed as a part of a school project, together with my 3 other teammates. ',
        language: ['React.js', 'Node.js', 'Tailwind CSS', 'Planetscale', 'Cloudinary'],
        image: '/img/techzero.png',
        link: 'http://techzero-v1-1.onrender.com/',
        code: '',
        date: new Date('2023-08-11')
    },
    {
        title: 'FED',
        description: 'A personal website developed as a part of a school project.',
        language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        image: '/img/fed.png',
        link: 'https://thinzarhninyu.github.io/fed-ca2/',
        code: 'https://github.com/thinzarhninyu/fed-ca2',
        date: new Date('2022-08-06')
    },
    {
        title: 'BED',
        description: 'A DVD Rental website developed as a part of a school project.',
        language: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Node.js', 'Express'],
        image: '/img/bed.png',
        link: '',
        code: 'https://github.com/thinzarhninyu/bed-ca2',
        date: new Date('2023-02-08')
    },
]

const tags = ['Programmer', 'Duck Lover', 'Music Addict'];

const strengths = ['Time Management', 'Teamworking', 'Leadership', 'Responsibility', 'Continuous Learner'];

const weaknesses = ['Introvertedness', 'Zoophobia', 'Social Anxiety', 'Overcommitment']

const frontendSkills: string[] = [
    'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React.js', 'Next.js'
  ];
  
  const backendSkills: string[] = [
    'Node.js', 'Express', 'Java', 'PHP', 'Python'
  ];
  
  const databaseSkills: string[] = [
    'MySQL', 'NoSQL', 'Microsoft SQL', 'Planetscale', 'MongoDB', 'ERD', 'Prisma ORM'
  ];
  
  const otherSkills: string[] = [
    'Cloudinary',
    'UI/UX',
    'Usability Testing'
  ];
  
const skills: string[][] = [frontendSkills, backendSkills, databaseSkills, otherSkills];

const interests = [
    {
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80',
        text: 'Coding',
        page: '/projects'
    },
    {
        image: 'https://storage.googleapis.com/website-zkhiphani/uploads/2021/09/1a8a119b-1cda750c780ab11003b9196fa32d0fd740e99ff3-scaled.jpeg',
        text: 'Photography',
        // page: '/about-me/photography'
        page: ''
    },
    {
        image: 'https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw',
        text: 'Music',
        page: 'https://open.spotify.com/user/f4tuhx8tibv4mqsixm4jkfiyv?si=d78c2dea2b69401d'
    },
    {
        image: 'https://yt3.googleusercontent.com/ytc/AOPolaSbaST1JBNd9phht_n7tFN-VHx0FlvKPHeSDnmu4Q=s900-c-k-c0x00ffffff-no-rj',
        text: 'Movies',
        page: ''
    },
    {
        image: 'https://c4.wallpaperflare.com/wallpaper/799/418/374/chelsea-fc-champions-league-trophy-football-soccer-hd-wallpaper-preview.jpg',
        text: 'Football',
        page: ''
    },
]

const education = [
    {
        school: 'Singapore Polytechnic (SP)',
        concentration: 'Diploma in Information Technology',
        period: 'April 2022 - Present',
        description: 'As a Diploma in Information Technology (DIT) student in SP, I get to explore a wide range of skillsets from mobile and web development to data analytics. I have gained hands-on experiences by developing mobile and web applications using a variety of libraries  and frameworks :)',
        present: true,
        view: 'Projects',
        link: '/projects'
    },
    {
        school: 'Institute of International Professionalism (IIP)',
        concentration: 'IGCSE',
        period: 'May 2019 - May 2021',
        description: 'I took 9 subjects for my IGCSE, which included Computer Science and Information & Communication Technology (ICT), and achieved A+ for all subjects :0',
        present: false,
        view: 'Certificate',
        link: '/certs/igcse.pdf'
    },
]

const extra = [
    {
        club: 'School of Computing Club (SOCC)',
        school: 'Singapore Polytechnic (SP)',
        period: '2022 June - Present',
        position: 'Public Relations Subcommittee & Events Head',
        description: [
            'Collaborate with my peers to utilize Canva to design posters',
            'Make Google Forms for event sign-ups and feedback',
            'Work in teams to organize events such as Halloween, Cyber Cup, Christmas Hangout and Freshman Orientation Camp, and manage crisis',
            'Work within tight deadlines and under pressure to deliver the projects on time',
            'Presented to Secondary School students about SOCC during the Early Admission Exercise Open House'
        ]
    },
    {
        club: 'SPAI',
        school: 'Singapore Polytechnic (SP)',
        period: '2022 June - Present',
        position: 'Administration Head',
        description: [
            'Use Microsoft Office and Google Sheets effectively to generate statistics for events',
            'Take meeting minutes and summarize the main points during EXCO meetings',
            'Maintain quality of work under pressure and produce accurate statistics for events',
            'Collaborated with my peers to organize SPAI Hackathon 2022',
            'Presented to Freshmen about SPAI and demonstrate projects during Freshman Orientation Program'
        ]
    },
    {
        club: 'SEED Student Interest Group',
        school: 'Singapore Polytechnic (SP)',
        period: '2023 January - Present',
        position: 'Events Coordinator',
        description: [
            'Collaborate with SEED peers to create learning resources for the Front-End Development module',
            'Host workshops to help peers to excel in their modules and learn new technical skills such as GitHub'
        ]
    },
    {
        club: 'SP Videography Club (SPVC)',
        school: 'Singapore Polytechnic (SP)',
        period: '2022 October - 2023 June',
        position: 'Training Head',
        description: [
            'Conduct trainings and events for club members',
            'Create training materials and resources for club members',
            'Work in teams to capture footages of live events'
        ]
    },
]

const other_extra = [
    {
        event: 'Meals on Wheels',
        place: 'SP School of Computing Club',
        period: 'March 2023',
        position: 'Organizer/ In-Charge',
        description: [
            'Organized Meals On Wheels for fellow peers',
            'Delivered food timely based on dietary requirements',
            'Worked under pressure during tight durations'
        ]
    },
    {
        event: 'Youth Model ASEAN Conference (YMAC)',
        place: 'Singapore Polytechnic',
        period: 'September 2022 - October 2022',
        position: 'Delegate',
        description: [
            'Collaborated with delegates from other countries to propose a solution for resource scarcity',
            'Learnt to use efficient time management to deliver the project on time',
            'Learnt to work in a group despite language barriers'
        ]
    },
    {
        event: 'Singapore Polytechnic Open House 2023',
        place: 'Singapore Polytechnic',
        period: 'January 2023',
        position: 'Volunteer/ Helper',
        description: [
            'Collaborated with peers to usher the public along different places of SP',
            'Learnt to improve my communication and team-working abilities'
        ]
    },
]

const certifications = [
    {
        name: 'AI FOR INDUSTRY® - Literacy In AI',
        link: 'https://certified.aisingapore.org/0d2b26e2-525e-4ad1-9e2f-25328d3f7099',
        date: 'September 2022',
        image: 'https://aisingapore.org/wp-content/uploads/2022/11/AISGR-Vertical-Logo-CMYK-Full-Colour-1024x965.png',
        school: ['AI Singapore']
    },
    {
        name: 'Computer Programming for Everyone',
        link: 'https://www.futurelearn.com/certificates/p9da10m',
        date: 'July 2021',
        image: 'https://ugc.futurelearn.com/other_assets/fl-steps.png',
        school: ['University of Leeds']
    },
    {
        name: 'Digital Skills: Embracing Digital Technology',
        link: 'https://www.futurelearn.com/certificates/f2zmib5',
        date: 'July 2021',
        image: 'https://ugc.futurelearn.com/other_assets/fl-steps.png',
        school: ['King\'s College London']
    },
    {
        name: 'Introduction to Physical Computing',
        link: 'https://www.futurelearn.com/certificates/j08tm3t',
        date: 'July 2021',
        image: 'https://ugc.futurelearn.com/other_assets/fl-steps.png',
        school: ['Lancaster University']
    },
    {
        name: 'Introduction to Virtual, Augmented and Mixed Reality',
        link: 'https://www.futurelearn.com/certificates/osemwev',
        date: 'July 2021',
        image: 'https://ugc.futurelearn.com/other_assets/fl-steps.png',
        school: ['Lancaster University']
    },
    {
        name: 'First Step Korean',
        link: 'https://coursera.org/share/f13155cf30979f3d79d06d78b41f0504',
        date: 'June 2021',
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1',
        school: ['Yonsei University']
    },
    {
        name: 'Code Yourself! An Introduction to Programming',
        link: 'https://coursera.org/share/287ac79e41797480424ba1e2e9b06e36',
        date: 'May 2021',
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1',
        school: ['The University of Edinburgh']
    },
]

  
export { projects, tags, strengths, weaknesses, skills, interests, education, extra, other_extra, certifications };