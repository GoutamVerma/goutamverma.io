import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import React from 'react';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Goutam Verma Portfolio',
  description: "Goutam Verma Portfolio!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Goutam Verma.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Major League Hacking</strong> as developer fellow.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have contributed to many OpenSource programs like Google Summer of Code'22 & 21, Summer of Bitcoin'22, CodeHeat, MLH local hack day.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Dedicated junior software engineer with experience in Java (Backend), Networking, Unix, and Monitoring. 
  I love to explore avenues regarding tech and fix the difficulty I find while interfacing with tech innovation. 
  In general, I put my foot forward in leading and dealing with any task and have a quality of 
  bringing a positive impact to the community.`,
  aboutItems: [
    {label: 'Location', text: 'Indore, India', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Debuging, Football', Icon: SparklesIcon},
    {label: 'Study', text: 'Devi Ahiliya University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Major League Hacking, NYC.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'C/C++',
        level: 4,
      },
      {
        name: 'Javascript',
        level: 6,
      },
    ],
  },
  {
    name: 'Developer Tools',
    skills: [
      {
        name: 'Git/GitHub',
        level: 9,
      },
      {
        name: 'Prometheus',
        level: 8,
      },
      {
        name: 'Grafana',
        level: 8,
      },
      {
        name: 'Jenkins',
        level: 6,
      },
    ],
  },  
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Weather API',
    description: 'This project is build under the part of MLH prep',
    url: 'https://mlh-prep-22-nov-prep-2-project.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: 'Eclair monitoring tool',
    description: 'This project is build under the part of summer of bitcoin',
    url: 'https://www.summerofbitcoin.org/project-ideas-details?recordId=recZvDHXyNFqWTqsz',
    image: porfolioImage2,
  },
  {
    title: 'TinyGS Data Visualization Tool',
    description: 'This project is build under the part of Google Summer of Code.',
    url: 'https://summerofcode.withgoogle.com/programs/2022/projects/Ft7KP8Dj',
    image: porfolioImage3,
  },
  {
    title: 'SimpleCMS ES',
    description: 'This project is build under the part of Google Summer of Code.',
    url: 'https://summerofcode.withgoogle.com/archive/2021/projects/6663634549211136',
    image: porfolioImage4,
  },
  {
    title: 'MLH Prep Portfolio',
    description: 'This project is build under the MLH Prep',
    url: 'https://mlh-prep-22-nov-prep-1-portfolio.netlify.app/',
    image: porfolioImage5,
  },
  {
    title: 'GeeksforGeeks articles',
    description: 'Tehnical articles',
    url: 'https://auth.geeksforgeeks.org/user/goutamverma84009/articles',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2019 - April 2024',
    location: 'Indore, India',
    title: 'Masters in Information Technology',
    content: <p>Relevant Coursework: <br></br>Computer Science, Algorithms Analysis, System Design, Data Structures, Networking(TCP/UDP), Database. </p>,
  },
  
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - November 2022',
    location: 'Open Source Intern',
    title: 'Major League Hacking',
    content: (
      <p align='justify'>Selected from a pool of 10,000 global applicants to be an open-source fellow for the Winter’22 batch.
      Collaborated on large-scale open-source web app projects that have thousands of daily users worldwide.
     </p>),
  },
  {
    date: 'May 2022 - September 2022',
    location: 'Software Engineer Intern',
    title: 'Google Summer of Code',
    content: (
      <p align='justify'>Developed a robust android application. which helps users to track satellites and stations with the help of REST APIs
and visualize their live locations on distributed systems(Unix) via SSH(secure shell) and KML commands.
Designed and implemented architecture of functions to retrieve data from REST API. Increased the refresh velocity of
retry trials by 25X and the potential to save 2x of the cost of computing resources(RAM,Storage,Internet) used.
Implement the testing strategy for microservices developed by team which decreased production issues by 20 percent and
increase scalability or efficiency.</p>
      
    ),
  },
 
  {
    date: 'May 2022 - September 2022',
    location: 'Software Engineer Intern',
    title: 'Summer of Bitcoin',
    content: (
      <p align='justify'>Worked with one of the largest lighting networks in the world - Eclair. Implemented the monitoring tool and alerts
      manager for node users. which increases application security and helps to track activities on node. Implemented the exporter to export time series data for Grafana and prevent users from sharing statistics with third
      parties.Collaborate with eclair developers and lead members using version control systems such as Git to organize modifications
      and new solutions, assign tasks and maintain a collaborative environment.
      </p>
      
    ),
  },
  {
    date: 'September 2021 - March 2022',
    location: 'Technical Writer',
    title: 'GeeksforGeeks',
    content: (
      <p align='justify'>Authored 12+ articles and enhanced published articles.Presented articles on core concepts of the Java programming language, network infrastructure and operating System. By writing papers, I was able to help 10K+ students in understanding the core concepts of Java and networking.
      </p>
    ),
  },
  {
    date: 'May 2021 - August 2021',
    location: 'Software Engineer Intern',
    title: 'Google Summer of Code',
    content: (
      <p align='justify'> Developed an android application(mobile) which is capable of mimicking the functionality of Google Earth Studio(an
        animation studio) and export animation in .esp format. Implement a feature that drafts an animation in spiral, orbit, zoom to view around the point of interest. Innovate a record button to capture the current view of the google earth and prevent users from searching for accurate
        coordinate of location which increases the usability.</p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Merul Diman, Co-Founder TangleLabs',
      text: 'Goutam has been amazing this year, he has been taking the feedback in stride and improving himself nby each passing day.it was excellent to see him grow and learn as a developer! finally learning the value of testing and how importang good architecture is. Google Summer of Good might be over, But this is just a prepartion, his biggest feats lie ahead of him :)',
      image: 'https://avatars.githubusercontent.com/u/69296233?v=4',
    },
    {
      name: 'Andreu Ibanez Perales, Liquid Galaxy Admin',
      text: 'Goutam has been an amazing student this year, he had worked with us in the previous year as well and learnt from his experiences last year to make this one so much better! Goutam goes above and beyond to make sure that the project he delivers is up to the point in code standard and execution. He is great at taking criticism and always bounces back stronger, the changes he has made from when he first started to the stage he is in right now has been nothing short of extraordinary!',
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQGCjOzLbqMbXw/profile-displayphoto-shrink_400_400/0/1516347663893?e=1676505600&v=beta&t=pirKfZebNzYTFyiZ2sIlF6PnoEAJtHebLAfcj16Zn68',
    },
    {
      name: 'Diego Riveros, Solution Architect at AWS',
      text: 'Goutam did an amazing job doing the documantation of what he did. This is really important. Remember communication is key, keep developing it.',
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQEwzvAsrxZcYg/profile-displayphoto-shrink_800_800/0/1559789156667?e=1676505600&v=beta&t=v11UHGsMXhJ05mkPqrPH1EQyiv_30cpUqbd-Ssj91g0',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'goutamverma84009@gmail.com',
      href: 'mailto:goutamverma84009@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Indore, India',
      href: 'https://www.google.com/maps/place/Indore,+Madhya+Pradesh/@22.7239117,75.723764,11z/data=!3m1!4b1!4m5!3m4!1s0x3962fcad1b410ddb:0x96ec4da356240f4!8m2!3d22.7195687!4d75.8577258',
    },
    {
      type: ContactType.Github,
      text: 'GoutamVerma',
      href: 'https://github.com/GoutamVerma',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Goutam Verma',
      href: 'https://www.linkedin.com/in/goutam-verma-3064931a4/',
    },
  ],
  description: ''
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/GoutamVerma'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/goutam-verma-3064931a4/'},
  ];
