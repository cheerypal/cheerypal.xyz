import { Work, Mates, Social, Uni, Additional, Snafler } from "./types";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiOctopusdeploy } from "react-icons/si";

export const work: Work = {
  para1:
    "Currently working in the Innovation Team at Arch-Consulting. My role in this team takes on a multitude of jobs, from building, maintaining and improving the backend of one of our new apps to building and maintaining our internal webapp to moderate and control what is presented to our users via our new app. Since joining Arch in May of 2021 I have been a part of a 4 man development team that has successfully developed the app I previously mentioned - Snafler. Our team, albeit small, consists of: myself, 2 other graduates and a manager. We have successfully developed a fully functioning mobile application that released to the public on the 1st of December on both Apple and Android within 6 months of development!",
  para2:
    "It's been the company's most ambitious project yet whilst also being the company's first ever Business to Consumer App.",
  languages: ["React", "React-Native", "AWS", "TypeScript"],
};

export const snafler: Snafler = {
  title: "Snafler",
  description:
    "Snafler, think of it like a bucket list but with a game and level system stuck on top of it. You can create and make sets for other users to complete, follow content creators or just complete the sets we make, its purely up to our users how they want to use our app. The whole idea is to allow people to 'flex' or 'show-off' their passions by 'Snafling' experiences and posting them to our app. A set, as mentioned above, is a group of items that you can complete - 'Snafle' - to gain levels and get rewards via our app. A 'set' could be to 'Snafle' all the top rated Christmas films on IMDB. \n\nSince we finished development on the gamification and all core concepts we aimed to have in our app at launch we are looking to the future of Snafler. We want more incentives for our users to keep using Snafler, we are looking towards NFTs as rewards and many other cool ideas to reward our users.",
  link: "https://www.snafler.com",
  skills: work.languages,
};

export const uni: Uni[] = [
  {
    id: 1,
    title: "TrustBLK",
    description:
      "For my honours project I developed a trustworthy yet fair ad-blocker that you can use with Google Chrome. The project highlighted that there is potential to automate the process of highlighting acceptable ads (ads that don't completely ruin the internet). The ad-blocker developed showed these ads to the end user where they made the final call on if the ad should be blocked.",
    skills: ["Vanilla JavaScript"],
    link: "https://github.com/cheerypal/TrustBLK",
  },
  {
    id: 2,
    title: "F20DB",
    description:
      "I have implemented a multi-layer neural network that trained using Particle Swarm Optimisation. The ANN made use of multiple activation functions that were easily configurable depending on the task the NN had to complete. The neural network accurately predicted several tests when given test data and expected outputs.",
    skills: ["Python"],
    link: "https://github.com/amaan-akram/F20BC",
  },
  {
    id: 3,
    title: "Uplink",
    description:
      "Uplink was a project undertaken in my 3rd year of university as part of the software engineering course I had taken. The task was develop a Smart Home Hub System to control and monitor smart device energy usage within the home. Users could control the smart devices they had connected, set schedules and automate tasks. The system could send push notifications to the user if a device was consuming too much energy. The system was developed using the SCRUM development process.",
    skills: ["Vue.js", "Node.js", "SQLite"],
    link: "https://github.com/HutchieV/F29SO-Sinderet-Green",
  },
];

export const additional: Additional[] = [
  {
    id: 1,
    title: "VIROLL",
    description:
      "Developed a COVID-19 stats comparison webapp. The webapp was a PWA therefore the user can download and install it on their phone via supporting browsers",
    skills: ["Vue.js"],
    link: "https://viroll.herokuapp.com",
  },
  {
    id: 2,
    title: "Personal Site",
    description:
      "Developed this very site to display my projects, experience and other things I find interesting.",
    skills: ["TypeScript", "React", "Redux"],
    link: "https://github.com/cheerypal/euangordon.me",
  },
];

export const mates: Mates[] = [
  {
    id: 1,
    name: "Amaan",
    link: "https://www.amaanakram.tech/",
  },
  {
    id: 2,
    name: "Adithya",
    link: "https://www.instagram.com/aydee.wav/",
  },
  {
    id: 3,
    name: "Alakbar",
    link: "https://alak.bar/",
  },
  {
    id: 4,
    name: "Abdelrahman",
    link: "https://elkabbany.xyz/",
  },
  {
    id: 5,
    name: "Humaid",
    link: "https://huma.id/",
  },
];

export const social: Social[] = [
  {
    id: 1,
    name: "twitter",
    link: "https://twitter.com/Cheerypal_",
    element: <FaTwitter />,
  },
  {
    id: 2,
    name: "github",
    link: "https://github.com/Cheerypal",
    element: <FaGithub />,
  },
  {
    id: 3,
    name: "linkedin",
    link: "https://www.linkedin.com/in/euan-gordon-8b984b151/",
    element: <FaLinkedinIn />,
  },
  {
    id: 4,
    name: "Snafler",
    link: "https://share.snafler.com/referralcode/euangordo",
    element: <SiOctopusdeploy />,
  },
];
