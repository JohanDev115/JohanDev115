/** Brand */
import Ilogo from '@images/brand/Logo.svg';
import Ijohan from '@images/brand/johan.webp';

/** Diplomas */
import IdiplomaSTC from '@images/diplomas/System_Technician_certificate.webp';
import IdiplomaTC from '@images/diplomas/teamwork_certificate.webp';

/** Icons */
import Ivsc from '@images/icons/vsc.svg';
import Igit from '@images/icons/git.svg';
import Ifigma from '@images/icons/figma.svg';
import Ibook from '@images/icons/book.png';
import Imicrophone from '@images/icons/microphone.png';
import Ijoystick from '@images/icons/joystick.png';
import Ifacebook from '@images/icons/facebook.png';
import Iinstagram from '@images/icons/instagram.png';
import Itwitter from '@images/icons/twitter.png';
import Ilinkeind from '@images/icons/linkedin.png';

/** Projects */
import Ibatatabit from '@images/projects/batatabit.webp';
import Imuviz from '@images/projects/muviz.webp';
import Irickandmorty from '@images/projects/RickandMorty.webp';
import IkittyLand from '@images/projects/kittyLand.webp';
import IkittyRun from '@images/projects/KittyRun.webp';
import Icolombia from '@images/projects/colombia.webp';

const user = {
    name: "JohanDev",
    profession: "Frontend Developer",
    logo: Ilogo,
    photo: Ijohan,
    aboutme: "Hello, I am JohanDev, a person passionate about web development and programming in general to the point of wanting to practice them professionally, this allows me to have a constant interest in learning many of the technologies that this profession implies with the aim of greatly expanding my knowledge which I practice with the creation of various projects that I also really enjoy doing. This has led me to be a person of free learning and passion for what I do. In this Web portfolio you will find a lot of information about me and <a href='#biography'>here</a> you can know more about who I am.",
    skills: [
        "Ability to work in a team, listen to opinions and lead projects.",
        "High level of perseverance to finish projects and/or tasks once started",
        "Motivation when starting projects",
        "Ability to identify faults through the use of logic.",
        "Easy to follow instructions and generate quality results.",
        "Seriousness in recognizing my mistakes and finding a way to correct them.",
        "I like to abide by rules that allow a team to achieve better results, for example design systems, workflows, etc."
    ],
    education: [
        "Technical Bachelor in Systems - SENA 2019.",
        "Teamwork and assertive communication - Latin American Center for Minor Species 2020.",
        "Online courses - PLATZI Feb 2022 - Feb 2023."
    ],
    diplomas: [
        {
            name: "System Technician certificate",
            image: IdiplomaSTC
        },
        {
            name: "Teamwork certificate",
            image: IdiplomaTC
        }
    ],
    workExperience: [
        {
            name: "Atento Colombia, Junior Quality Engineer",
            date: "Oct 2021 - Jan 2022",
            obligations: [
                "Perform quality tests on applications",
                "Assign bugs and contact developers to get them resolved",
                "Produce weekly reports on the status of incidents"
            ]
        }
    ],
    quality: {
        strengths: [
            "Honest",
            "Persistent",
            "Fellowship",
            "Solidary",
            "Disciplined",
            "Generous",
            "Tolerant",
            "Resilient",
            "Motivation",
            "Prudence",
            "comprehensive"
        ],
        weaknesess: [
            "Unsure",
            "perfectionist",
            "inexperience",
            "dispersion",
            "indecisive"
        ],
    },
    knowledge: {
        languages: [
            {
                name: "Spanish",
                level: "Native"
            },
            {
                name: "English",
                level: "B2"
            }
        ],
        programLanguages: [
        {
            id: "html",
            name: "HTML",
            level: "90"
        },
        {
            id: "css",
            name: "CSS",
            level: "85"
        },
        {
            id: "js",
            name: "JavaScript",
            level: "70"
        },
        {
            id: "ts",
            name: "TypeScript",
            level: "60"
        }
        ],
        ides: [
            {
                name: "Visual Studio Code",
                icon: Ivsc
            },
        ],
        others: [
            {
                name: "GIT",
                icon: Igit
            },
            {
                name: "FIGMA",
                icon: Ifigma
            }
        ]
    },
    hobbies: [
        {
            name: "Read",
            icon: Ibook
        },
        {
            name: "Sign",
            icon: Imicrophone
        },
        {
            name: "Play",
            icon: Ijoystick
        }
    ],
    socials: [
        {
            name: "Facebook",
            iconUrl: Ifacebook,
            href: "https://www.facebook.com/JohanDev-106866391958410"
        },
        {
            name: "Instagram",
            iconUrl: Iinstagram,
            href: "https://www.instagram.com/johandev115"
        },
        {
            name: "Twitter",
            iconUrl: Itwitter,
            href: "https://twitter.com/JohanDev115"
        },
        {
            name: "Linkedin",
            iconUrl: Ilinkeind,
            href: "https://www.linkedin.com/in/johan-arena-51a1a8233"
        },
    ],
    projects: {
        webPages: [
            {
                title: "Batatabit",
                description: "Babatabit is a platform that helps with the exchange of cryptocurrencies made with the use of the first mobile rule and focused on the use of the BEM methodology carried out as a form of practice of the mobile first concept with the help of Diego de Granda professor and Software Engineering Manager at Platzi.",
                image: Ibatatabit,
                link: "https://johandev115.github.io/Batatabit/",
                className: "slidebatatabit fade"
            },
            {
                title: "Muviz",
                description: "Muviz is a not a functional project about Movies made with the use of Axios which is a tool that help us with the use of APIS and make dinamic pages with the use of DOM with help of JAVASCRIPT, this is one of the most important projects tha i have made for me.",
                image: Imuviz,
                link: "https://johandev115.github.io/muviz/#home",
                className: "slidemuviz fade"
            },
            {
                title: "Rick and Morty",
                description: "Rick and Morty is a single page application created with javascript vanilla with the use of Rick and Morty's API and built it with the webpack bundler.",
                image: Irickandmorty,
                link: "https://johandev115.github.io/RickandMorty/",
            },
            {
                title: "KittyLand",
                description: "It is my first real project about consume of API REST following the course in PLATZI in wich i aply the basement of DOM management, this project could be update depending of the developer's motivation.",
                image: IkittyLand,
                link: "https://johandev115.github.io/KittyLand/",
            },
            {
                title: "Colombia",
                description: "Colombia is a simple page made to put in pratice the layaout and animations on web pages which objective might more appreciated in desktop a view.",
                image: Icolombia,
                link: "https://johandev115.github.io/colombia/"
            }
        ],
        videoGames: [
            {
                title: "KittyRun",
                description: "KittyRun is a flexible game made with canvas in HTML5 and javascript applying flexibility to code. it is a code that i really enoyed doing and im really proud of the result",
                image: IkittyRun,
                link: "https://johandev115.github.io/KittyRun/",
            },
        ]
    },
    biography: {
        firstName: "Johan",
        lastName: "Arena",
        age: "19",
        Nationality: "Colombian",
        gender: "Male",
        maritalStatus: "Single",
        dateOfBirth: "March 20th 2003",
        email: "joarenava@gmail.com",
        history: "Hello my name is Johan, I was born in a city of Cali Colombia where I grew up, since I was little my family has cataloged me as a very intelligent person, which may be due to the dedication I had to learn. but personally I have not considered myself that way, I am a person who always looks for the solution to a problem and always wants to know more, many times it is difficult for me to memorize things or I do not retain them as much as I would like, however I always review the concepts until finally I maintain a logical relationship with the term I am dealing with. Going back to my childhood, I was never one of many friends because I have never felt that I fit in any circle, that's why my childhood was books that my mother made me read but over time I took them on my own, that helped me. She had great gifts for reading, surpassing almost 80% of the students of the school in the average age that she was. For some personal reasons we had to move to another town, something that at 8 years old did not matter much to me since I was not very attached to my town, but yes, I had to change schools and... I never had a perspective on it, but As soon as I arrived at the new school in fifth grade, I had to take an attitude that I had never had before. Most of the kids in that school were older than me and they took advantage of my innocence to tease me and since I was the new one, the teacher blamed me for everything. My mother gave me advice since she had never had that attitude, however she always knew how to explain what was happening and with her support I managed to stay and pass the course. already in high school it was a different attitude I was able to make more friends go out with them and live incredible experiences but not everything was rosy, there were fights, girlfriends, disappointments etc. we had to move to another place, not far from the old one, but still very far. I kept going to the same school, this time on a motorcycle, and since it was supposed to be that distance, it prevented me from continuing to interact with him. no person but my family at the same time I got to high school, I met friends at school and not the typical ones you go out with, you don't speak to each other for a week and you say hello nono. They are my best friends and they were the people I started hanging out with since high school. It was that moment in which I met programming and from the first moment I knew that it was I fell in love with it. It was incredible. see that a machine that I always thought was only handled by professional and very intelligent people was doing what I ordered through instructions, from that moment I knew that it was what I wanted to do in my life, we are talking about the year 2018 the first programming languages that I worked on were HTML5 and I know that it is not a programming language as such but they were my first approaches to this world of technology, at the same time I continued with CSS and javascript, the latter was the one that gave me the possibility of opening my mind to a world of possibilities with the things that occurred to me. I discovered a creativity in my mind that I had never discovered before. I felt like a 'God' haha. My first big project was motobot, a robbery What I did with these languages was wonderful when when I published it I received messages from people who told me that my robot is wonderful that gave me great self-esteem when creating things and thanks to that I wanted to create more and more things that later were not so compatible but that I nevertheless enjoyed doing. I have had many experiences with my friends, we are passionate about video games and together we have a dream to one day build our own video game company and have it be well recognized worldwide. And so far that has made me who I am today.",
        achieves: [
            "When I was 14 years old I opened a YouTube channel that today has 140 subscribers, I abandoned it.",
            "At the age of 16, I won an award at the institution from which I graduated for excellent performance in class.",
            "At the age of 17, I set up a visual entertainment business using consoles and video games."
        ]
    }
}

export default user;