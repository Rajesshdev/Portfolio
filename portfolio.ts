import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Rajesh dev',
  title: "Hi , I'm Rajesh",
  description: `🚀 Hey there! I'm a React aficionado on a mission to craft extraordinary web applications using the magic of React.js and Next.js.
   My journey is a fusion of passion and innovation – constantly seeking ways to create digital marvels that leave a lasting impression. 
   The thrill of learning fuels me, pushing me to dive headfirst into new technologies and seize every chance to level up my skills. 
   What truly sets my heart racing is delivering sleek, high-performing solutions that align with the latest trends in the React universe. 
   Let's connect and dive deep into my exhilarating ride as a React enthusiast! 🌟
    `,

};

export const openSource = {
  githubUserName: 'Rajesh-25-12',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/Rajesshdev',
  linkedin: 'https://www.linkedin.com/in/rajesh2512/',
  github: 'https://github.com/Rajesshdev',
  instagram: 'https://www.instagram.com/im_hwak_25/',
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FORNT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Fornt-end Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(`👋 Hello, world of web wonders! I'm a front-end virtuoso, specializing in crafting captivating user experiences with the power of React.js and Next.js.
         With 1.5 years of hands-on experience, 
        I've honed my skills to create both single-page and multi-page applications that are as responsive as they are dynamic.`),
        emoji(`⚡ My journey begins with mastering the art of sculpting sleek single-page marvels,
         with a touch of magic from progressive web apps – all orchestrated by the symphony of React.js. 
         But that's not all – I've also ventured into the realm of multi-page sagas, wielding the same technology to create cohesive, 
         engaging user journeys.`),
        emoji(`🌟 Yet, this is only the beginning of my front-end odyssey. As a Next.js maestro,
         I've harnessed the power of static websites to build seamless, interactive interfaces that captivate and amaze. 
         Whether it's a minimalist design or a dynamic application, I thrive on turning ideas into pixel-perfect realities.`),
        emoji(`🔥 From conquering intricate projects to breathing life into dynamic applications, my journey showcases the fusion of
         my passion with the ever-evolving world of front-end development. Join me on this exciting path as we delve deeper into 
         the realm of React, connecting innovation with elegant solutions that resonate with users.
          Let's connect and explore the front-end frontier together! 🚀🎨`),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Tailwind',
          fontAwesomeClassName: 'logos:tailwindcss-icon',
        },
        {
          skillName: 'Bootstrap',
          fontAwesomeClassName: 'logos:bootstrap',
        },
        {
          skillName: 'Framer Motion',
          fontAwesomeClassName: 'logos:framer',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Typescript',
          fontAwesomeClassName: 'logos:typescript-icon',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'Swagger',
          fontAwesomeClassName: 'logos:swagger',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'Webpack',
          fontAwesomeClassName: 'logos:webpack',
        },
        {
          skillName: 'Material-UI',
          fontAwesomeClassName: 'logos:material-ui',
        },
      ],
    },
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji(
    //       '⚡ Hosting and maintaining websites on virtual machine'
    //     ),
    //     // emoji(
    //     //   '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
    //     // ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: 'AWS',
    //       fontAwesomeClassName: 'logos:aws',
    //     },
    //     // {
    //     //   skillName: 'Azure',
    //     //   fontAwesomeClassName: 'logos:microsoft-azure',
    //     // },
    //     {
    //       skillName: 'Heroku',
    //       fontAwesomeClassName: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'Netlify',
    //       fontAwesomeClassName: 'logos:netlify-icon',
    //     },
    //     // {
    //     //   skillName: 'PostgreSQL',
    //     //   fontAwesomeClassName: 'logos:postgresql',
    //     // },
    //     {
    //       skillName: 'Github',
    //       fontAwesomeClassName: 'akar-icons:github-fill',
    //     },
    //     // {
    //     //   skillName: 'Docker',
    //     //   fontAwesomeClassName: 'logos:docker-icon',
    //     // },
    //     // {
    //     //   skillName: 'Github Actions',
    //     //   fontAwesomeClassName: 'logos:github-actions',
    //     // },
    //     {
    //       skillName: 'Cloudinary',
    //       fontAwesomeClassName: 'logos:cloudinary',
    //     },
    //     // {
    //     //   skillName: 'Nginx',
    //     //   fontAwesomeClassName: 'logos:nginx',
    //     // },
    //     // {
    //     //   skillName: 'Sentry',
    //     //   fontAwesomeClassName: 'logos:sentry-icon',
    //     // },
    //   ],
    // },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡  developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     // emoji(
    //     //   '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     // ),
    //     // emoji(
    //     //   '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     // ),
    //     // emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassName: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassName: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassName: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassName: 'logos:metamask-icon',
    //     },
    //     // {
    //     //   skillName: 'Ganache',
    //     //   fontAwesomeClassName: 'logos:ganache-icon',
    //     // },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design',
    progressPercentage: '80',
  },
  {
    Stack: 'React.js',
    progressPercentage: '90',
  },
  {
    Stack: 'HTML/CSS',
    progressPercentage: '85',
  },
  {
    Stack: 'JavaScript',
    progressPercentage: '85',
  },
  {
    Stack: 'UI/UX Design',
    progressPercentage: '75',
  },
  {
    Stack: 'Responsive Web Design',
    progressPercentage: '85',
  },
  {
    Stack: 'Next.js',
    progressPercentage: '70',
  },
];


export const educationInfo: EducationType[] = [
  {
    schoolName: 'PSR Engineering College',
    subHeader: 'Bachelor of Electronics and Communication Engineering',
    duration: 'September 2018 - April 2022',
    desc: 'Engaged in research with IEEE Xplore and proudly published 1 paper.',
    grade: 'Achieved Grade A',
  }  
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Techgenzi',
    companyLogo: '/img/icons/common/techgen.png',
    date: 'Apr 2022',
    desc: `Spearheaded the development and maintenance of
    stable and maintainable React codebases for high-risk
    applications, including a vehicle tracking system for a
    fleet management company and a dynamic data CRUD
    application for a services provider.
    Led the design and implementation of dynamic and
    responsive user interfaces using React, CSS3, and
    JavaScript, ensuring optimal user experience across
    various devices and screen sizes.
    Utilized React Hooks and React-Router for efficient state
    management and smooth application navigation,
    resulting in improved performance and user interaction.
    Integrated APIs for real-time vehicle tracking and data
    CRUD operations, enabling users to seamlessly interact
    with and manage essential data in the applications.
    Collaborated closely with the back-end team to ensure
    the seamless flow of data between the front-end and
    back-end systems, ensuring data integrity and
    application reliability.
    Conducted thorough code reviews, identifying and
    resolving issues to maintain a high standard of code
    quality and adherence to best practices.
    Actively participated in cross-functional team meetings
    to discuss project progress, propose improvements, and
    ensure timely delivery of project milestones.
    Ongoing integration of Webpack microservices to
    enhance the application's architecture, performance,
    and maintainability.`,
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Code-Blog',
    desc: `Introducing our Responsive Blog App – a dynamic reading adventure designed for every device. 
    Discover featured and fresh articles in seamless categories. Immerse yourself in full Markdown magic, 
    and engage in discussions with an intuitive commenting system. Effortlessly manage content via our user-friendly CMS. 
    Powered by React.js, enjoy optimized performance across devices. 
    This is more than a blog – it's a user-centered journey into captivating narratives. Welcome to the future of reading! 📚🌟`,
    github: 'https://github.com/Rajesshdev/Code_Blog',
    link: 'https://code-blog-rajesh.netlify.app/',
  },
  {
    name: 'CRUD-Blog',
    desc: `Immerse yourself in our interactive CRUD blog platform, crafted with React.js and Material-UI. Dive into the Code Blog, where creating, editing, and deleting posts happen seamlessly with real-time updates. Discover a blend of simplicity and elegance in this user-friendly blog app, giving you the tools to effortlessly curate and manage your content. Empower your blogging journey – captivate readers with engaging, interactive features. Your blog, your way.`,
    github: 'https://github.com/Rajesshdev/Code_Blog',
    link: 'https://crud-blog.netlify.app/',
  },
  {
    name: 'Admin Dashboards',
    desc: `An admin dashboard is a dynamic web interface offering a comprehensive view of an organization's operations and data. Primarily utilized by administrators and managers, it serves as a hub for monitoring performance, analyzing data, and deriving decisions from real-time insights. This platform empowers effective workflow management, facilitating informed choices and enhancing productivity across the board.`,
    github: 'https://github.com/Rajesshdev/Admin_Dashboard',
    link: 'https://rajeshdev-dashboard.netlify.app/',
  },
  {
    name: 'Finance Management',
    desc: `Finance management involves skillfully overseeing an organization's financial resources to accomplish its goals and objectives. This encompasses a spectrum of activities, including meticulous budgeting, strategic financial planning and analysis, precise accounting, comprehensive financial reporting, and vigilant risk management. By orchestrating these elements harmoniously, finance management ensures a sturdy financial foundation that propels the organization towards success.`,
    github: 'https://github.com/Rajesshdev/Finance',
    link: 'https://split-finance.netlify.app/',
  },
  {
    name: 'Human resource management',
  desc:`The attendance module, a vital facet of human resource management (HRM) software, plays a pivotal role in meticulously tracking employee attendance and efficiently managing their leave entitlements. By simplifying the complexities associated with employee attendance, this module streamlines HR processes, leading to significant time savings and heightened accuracy. Its implementation not only enhances operational efficiency but also contributes to the seamless functioning of an organization's workforce management.`  },
  {
    name: 'Production Management',
  desc:`Production management orchestrates the orchestration of planning, organization, direction, and control within the production process, all aimed at the efficient and effective creation of goods and services. This encompasses the entire journey from raw materials to the finished product, with a keen focus on meeting quality benchmarks, cost-effectiveness, and punctual delivery deadlines. Through this intricate coordination, production management not only ensures streamlined operations but also safeguards the high standards of the final output, resulting in a successful fusion of quality and efficiency.`  },
  {
    name: 'Enterprise Resource Planning ',
  desc:`Enterprise Resource Planning (ERP) is a sophisticated software system that empowers businesses to seamlessly oversee and harmonize their fundamental business processes through a centralized and automated platform. These systems are meticulously crafted to enhance operational efficiency, foster collaborative endeavors, and furnish decision-makers with real-time data and insights. By unifying various aspects of business management, ERP systems not only optimize workflows but also empower organizations to make informed decisions that resonate with their strategic objectives.`  },
  {
    name: 'Vehicle  Management',
  desc:`Vehicle monitoring and management involves harnessing technology to monitor and oversee a fleet of vehicles, commonly employed by businesses like delivery companies and transportation services. This approach aims to enhance operational efficiency and safety by utilizing real-time tracking and data analysis. By doing so, it effectively curtails costs while simultaneously boosting customer satisfaction. The ultimate objective of vehicle monitoring and management is to orchestrate seamless operations that ensure enhanced efficiency, elevated safety standards, and an overall superior experience for both businesses and their customers.`  },
  {
    name: 'Google Form Clone',
    desc:`Introducing our Google Form Clone – an innovative web application that mirrors the functionality of Google Forms. Seamlessly create and customize forms for surveys, feedback, registrations, and more. With a user-friendly interface, drag-and-drop components, and various question types, crafting forms is a breeze. Collect responses in real-time, view insights through interactive analytics, and effortlessly share forms with collaborators. Elevate your data collection game with our Google Form Clone, designed to simplify and enhance your form creation experience.`,
    github: 'https://github.com/Rajesshdev/Google-Forms-Clone',
    link: 'https://split-finance.netlify.app/',
  }
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Rajesh Kannan - Full Stack Web Developer and Blockchain Enthusiast',
  description:
    'Discover the world of innovation with Rajesh Kannan, a passionate Full Stack Web Developer and Blockchain enthusiast. From crafting immersive websites with React to delving into the cutting-edge realm of blockchain technology, explore a diverse portfolio that showcases expertise, creativity, and a commitment to building the digital future.',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'React',
    'Web Developer',
    'Blockchain',
    'Portfolio',
    'Full Stack',
    'Rajesh Kannan',
    'Frontend',
    'Backend',
    'UI/UX',
    'Blockchain Development',
    'JavaScript',
    'Responsive Design',
    'Innovation',
    'Technology',
    'Coding',
  ],
};

