import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/fond_acc2.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio de Mickaël ',
  description: "portfolio de Mickaël DJEGHERIF",
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
  name: `Mickaël DJEGHERIF`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Je suis actuellement Ingénieur Logiciel à <strong className="text-stone-100">CGI</strong>, et suis actuellement
        le cursus de Master 2 Informatique <strong className="text-stone-100">Expert en développement logiciel, mobiel et IoT</strong>.
        Après une 2ans en tant que développeur informatique, j'ai constaté mes lacunes et mon envie de développer ce coté managérial. J'ai donc choisi de reprendre l'alternance.
        Toujours à la recherche de nouvelles technologies et de nouveaux projets pour nourrir ma soif de savoir.
          J'aime particulièrement travailler sur des projets <strong className="text-stone-100">complexes</strong> et me challenger pour sans cesse me <strong className="text-stone-100">dépasser</strong> et me <strong className="text-stone-100">perfectionner</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          En dehors de l'informatique, je suis également un grand sportif et un passionné <strong className="text-stone-100">d'arts martiaux</strong>.
          Je passe une grande partie de mon temps libre à pratiquer diverses activités sportives.
          Je considère que la pratique sportive est essentielle pour maintenir un équilibre entre le <strong className="text-stone-100">corps</strong> et <strong className="text-stone-100">l'esprit</strong>, ce qui me permet de rester concentré et motivé dans mes projets.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
    {
        href:"https://www.canva.com/design/DAF9_7-KOyA/I7ImvrDnMaM_ob8MY65Yig/view?utm_content=DAF9_7-KOyA&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        text: 'CV',
        primary: true,
        Icon: ArrowDownTrayIcon,
    }
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label:'Ville', text:'Mougins', Icon:MapIcon},
    {label:'Age', text:'32', Icon:CalendarIcon},
    {label:'Nationalité', text:'Français', Icon:FlagIcon},
    {label:'Intérêt', text:'Motorcycles, Muay Thai, Banjos', Icon:SparklesIcon},
    {label:'Etudes', text:'Sophia Ynov Campus', Icon:AcademicCapIcon},
    {label:'Entreprise', text:'Infotel', Icon:BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Développement Frontend',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Angular',
        level: 4,
      },
      {
        name: 'Html',
        level: 8,
      },
      {
        name: 'CSS',
        level: 5,
      },
      {
        name: 'JS',
        level: 7,
      }
    ],
  },
  {
    name: 'Développement Backend',
    skills: [
      {
        name: 'Symfony',
        level: 7,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Golang',
        level: 4,
      },
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
    ],
  },
  {
    name: 'Autre',
    skills: [
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'API',
        level: 8,
      },
      {
        name: 'JAVA',
        level: 4,
      },
      {
        name: 'C#',
        level: 3,
      },
    ],
  },
  {
    name: 'Langues',
    skills: [
      {
        name: 'Français',
        level: 10,
      },
      {
        name: 'Anglais',
        level: 4,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Pokedex',
    description: 'Voici une application réalisé en React dans le cadre d\'un projet au sein de Ynov.',
    url: 'https://pokedex-mikexxi.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Funko Pop Shop',
    description: 'Un shop réalisé en angular !',
    url: 'https://angular-projet.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'Mario Portfolio',
    description: 'Voici une ébauche d\'un projet personnel réalisé en JS vanilla, dans le but de crée un mini jeux à travers un portfolio .',
    url: 'https://js-portfolio-mikexxi.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Applications Périmètre',
    description: 'Cette application en JAVA, a pour but d\'aider les enfants à calculer un pélimètre ou une surface d\'une forme.',
    url:'',
    image: porfolioImage4,
  },
  {
    title: 'Site Freelance',
    description: 'Dans le cadre de mon BTS, nous avons du réaliser un site de freelance. Avec toute le système de communications et la base de données, en php vanilla.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Le bon coin',
    description: 'Ce projet java a pour but de créer un site de petites annonces.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Generation de token',
    description: 'Lors de mon stage chez Monument Tracker, j\'ai du réaliser une génération de token pour leurs applications mobiles.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Site Eshop',
    description: 'Ce site e-commerce réalisé en PHP vanilla, a pour but de vendre des produits. Toutes les fonctionnalités sont présentes, sans les modules de paiement.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Challenge 48',
    description: 'Ceci est un projet d\'école réalisé en 48H, l\'obejectif était de réaliser un défi. Nous avons donc décidez de réliser plusieurs mini jeux (morpion, quizz, mastermind, etc), qui rapporte des missiles afin de détruire un bateau, dans une bataille navale. Le nomnbre de missile récupérable étant restreint.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Quizz',
    description: 'Un quizz en JS vanilla, réalisé en 2H',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Eworld',
    description: 'Ce projet a été réalisé avec pour objectif de permettre a une personne, d\'afficher sa liste de taches, ainsi que d\'ajouter une liste d\'achats (courses ou cadeaux). La v2 implémetera un système de groupe. Afin de diffuser ses listes.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2025',
    location: 'Sophia Ynov Campus',
    title: 'Mastère 2 - Expert en Développement Logiciel, Mobiel et IoT',
    content: <p></p>,
  },
  {
    date: '2024',
    location: 'Sophia Ynov Campus',
    title: 'Mastère 1 - Expert en Développement Logiciel & IoT ',
    content: <p></p>,
  },
  {
    date: '2023',
    location: 'Sophia Ynov Campus',
    title: 'Bachelor 3 - Développement',
    content: <p></p>,
  },
  {
    date: '2017',
    location: 'UFIP',
    title: 'Brevet de technicien supérieur - Services informatiques aux organisations',
    content: <p></p>,
  },
  
];

export const experience: TimelineItem[] = [
  {
    date: '2024 - En cours',
    location: 'CGI',
    title: 'Ingénieur Logiciel',
    content: (
      <p>
        Réalisation d'évolutions et de corrections diverses sur le panel des différentes applications du client PRO BTP.
        Back-end en Java 8.
        Front-end en AngularJS / AngularX.
      </p>
    ),
  },
  {
    date: '2023 - 2024',
    location: 'Infotel',
    title: 'Développeur Full Stack',
    content: (
      <p>
        Développement d'un CRM pour les ressources internes et externes à l'entreprise.
        Le back-end a été réalisé en Java avec Spring Boot, et le front-end en Angular.
        La gestion des tickets ainsi que le déploiement ont été effectués avec Azure, en utilisant une méthodologie Agile.
      </p>
    ),
  },
  {
    date: '2022 - 2023',
    location: 'Sophia Ynov Campus',
    title: 'Mentor informatique',
    content: (
      <p>
        Responsable des étudiants de première et deuxième année post-bac, j'ai été chargé de préparer et d'animer des cours ainsi que des projets pour leur enseigner les bases du développement informatique.
        J'ai également dû évaluer et corriger les divers travaux et projets tout au long de l'année.
      </p>
    ),
  },
  {
    date: '2019 - 2022',
    location: 'ECS / DSO',
    title: 'Développeur informatique',
    content: (
      <p>
        Au sein d'ECS, une filiale du groupe DSO, j'étais responsable de la gestion du parc informatique.
        En tant que développeur, j'ai notamment collaboré à la création de l'intranet de DSO et au développement d'une GED interne pour ECS.
        J'ai également développé un bot pour automatiser la création des signatures, simplifiant ainsi le processus pour une centaine de collaborateurs.
      </p>
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
      name: 'Socrate',
      text: 'La chute n\'est pas un échec. L\'échec, c\'est de rester là où on est tombé.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Socrate_du_Louvre.jpg',
    },
    {
      name: 'Alice Parizeau',
      text: 'Il faut critiquer, il faut constamment tout remettre en cause. Cela permet de rester jeune et de progresser.',
      image: 'https://img.huffingtonpost.com/asset/5ccd936823000065019b11c7.jpeg?ops=scalefit_720_noupscale&format=webp',
    },
    {
      name: 'Boris Cyrulnik',
      text: 'La résilience, c\'est l\'art de naviguer dans les torrents.',
      image: 'https://images.ladepeche.fr/api/v1/images/view/5c33c7408fe56f1afb3e4e53/full/image.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contactez-moi',
  description: 'L\'endroit parfait pour me joindre !',
  items: [
    {
      type: ContactType.Email,
      text: 'mickael.djegherif@outlook.fr',
      href: 'mailto:mickael.djegherif@outlook.fr',
    },
    {
      type: ContactType.Phone,
      text: '06 99 79 48 52',
      href: 'tel:+33699794852',
    },
    {
      type: ContactType.Location,
      text: 'Mougins',
      href: 'https://goo.gl/maps/4iZvZDHNrJfzbsx47',
    },
    {
      type: ContactType.Instagram,
      text: '@mickael.djegherif',
      href: 'https://www.instagram.com/mickael.djegherif/',
    },
    {
      type: ContactType.Github,
      text: 'mikexxi',
      href: 'https://github.com/mikexxi',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mikexxi'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/21632474/mikexxi'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mickael-djegherif/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/mickael.djegherif/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/MikeDje21'},
];
