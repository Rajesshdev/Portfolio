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
  description: `As a passionate React developer with a focus on web applications using React.js and Next.js, I am constantly driven by my love for creating amazing things. With a strong appetite for learning, I eagerly explore new technologies and seek opportunities to enhance my skills. I take pride in delivering elegant and efficient solutions and always stay up-to-date with the latest trends in the React ecosystem. Let's connect and delve deeper into my exciting journey as a React enthusiast!
    `,

};

export const openSource = {
  githubUserName: 'Rajesh-25-12',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/Rajesh-25-12',
  linkedin: 'https://www.linkedin.com/in/rajesh2512/',
  github: 'https://github.com/Rajesh-25-12',
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
        emoji(
          '⚡ Building both single-page and multi-page applications, I am well-versed in creating responsive and dynamic user interfaces. I have expertise in building single-page applications (SPAs) and progressive web apps (PWAs) using React.js, as well as creating multi-page applications using the same technology.'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
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
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'PSR Engineering College',
    subHeader: 'Bachelor of electronics and communication engineering',
    duration: 'September 2018 - April 2022',
    desc: 'Participated in the research of IEEE Xplore and published 1 papers.',
    grade: 'Grade A',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Techgenzi',
    companyLogo: '/img/icons/common/techgen.png',
    date: 'Apr 2022',
    desc: `
 
As a Frontend Developer at Techgenzi, I designed and developed interactive web-based applications and admin dashboards using the latest frontend technologies like React.js, React Hooks, and React Router. Collaborating with design and backend teams, I ensured user-friendly interfaces, integrated libraries such as Bootstrap and Material-UI for enhanced functionality, and optimized performance and responsiveness for seamless user experiences across devices. Following industry-standard coding practices and Agile methodologies, I maintained code quality, met project deadlines, 
and actively contributed innovative ideas to improve the team's development process.`,
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Code-Blog',
    desc: `Introducing our fully responsive Blog App with featured and recent posts, categories, full markdown articles, author information, comments, and more. Easily manage the blog through a dedicated Content Management System. 
    Enjoy seamless navigation and optimized performance with React.js. User-friendly and engaging, all devices included!`,
    github: 'https://github.com/Rajesh-25-12/Portfolio',
    link: 'https://code-blog-rajesh.netlify.app/',
  },
  {
    name: 'CRUD-Blog',
    desc: `Experience our fully responsive CRUD blog platform built with React.js and Material-UI. Create, edit, and delete posts with real-time updates on the Code Blog. Simple, elegant, and user-friendly, this blog app empowers you to manage your content effortlessly. Take control of your blog and engage your readers with interactive features.`,
    github: 'https://github.com/Rajesh-25-12/Portfolio',
    link: 'https://crud-blog.netlify.app/',
  },
  {
    name: 'Admin Dashboards',
    desc: 'An admin dashboard is a web-based interface that provides an overview of an organization operations and data. It is typically used by administrators and managers to monitor performance, analyze data, and make decisions based on real-time informationOn work',
    github: 'https://github.com/Rajesh-25-12/Dashboard',
    link: 'https://rajeshdev-dashboard.netlify.app/',
  },
  {
    name: 'Finance Management',
    desc: 'Finance management refers to the process of managing an organization financial resources in order to achieve its goals and objectives. This includes activities such as budgeting, financial planning and analysis, accounting, financial reporting, and risk management',
    github: 'https://github.com/Rajesh-25-12/Portfolio',
    link: 'https://split-finance.netlify.app/',
  },
  {
    name: 'Human resource management',
    desc: 'The attendance module is an important component of human resource management (HRM) software that helps organizations track employee attendance and manage their leave entitlements. It simplifies the process of managing employee attendance and streamlines HR processes, saving time and improving accuracy',
  },
  {
    name: 'Production Management',
    desc: 'Production management is the process of planning, organizing, directing, and controlling the production process to ensure that goods and services are produced efficiently and effectively. It involves managing the production process from the raw materials stage to the finished product, while ensuring that quality, cost, and delivery deadlines are met ',
  },
  {
    name: 'Enterprise Resource Planning ',
    desc: 'Enterprise Resource Planning (ERP) is a software system that enables businesses to manage and integrate their core business processes in a centralized and automated way. ERP systems are designed to streamline operations, improve collaboration, and provide real-time data and insights to decision-makers',
  },
  {
    name: 'Vehicle  Management',
    desc: 'Vehicle monitoring and management is the process of using technology to track and manage a fleet of vehicles, typically used by businesses, such as delivery companies or transportation services. The main goal of vehicle monitoring and management is to improve efficiency and safety, reduce costs, and increase customer satisfaction',
  },
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
  title: 'Rajesh Kannan',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'React',
    'Website',
    'Rajesh',
    'jobs',
    'Portfolio',
    'react Portfolio ',
    'Rajesh dev Portfolio',
  ],
};
