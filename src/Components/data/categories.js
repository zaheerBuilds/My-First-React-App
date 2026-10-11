 
// icons for skills

import creativeWebImg from "../../assets/creative_web_design.png";
import financeImg from "../../assets/finance_accounting.png";
import itSoftwareImg from "../../assets/it_software.png";
import digitalMarketingImg from "../../assets/digital_marketing.png";
import webDevelopmentImg from "../../assets/web_development.png";
import contentWritingImg from "../../assets/content_writing.png";





export const categories = [
    {title: "Creative web design", courses: 8, icon: creativeWebImg},
    {title: "Finance accounting", courses: 10, icon: financeImg},
    {title: "IT and software", courses: 5, icon: itSoftwareImg},
    {title: "Digital marketing", courses: 4, icon: digitalMarketingImg},
    {title: "Web development", courses: 8, icon: webDevelopmentImg},
    {title: "Content writing", courses: 3, icon: contentWritingImg}
];

//images for course carda

import person1 from "../../assets/thumbnail1.webp";
import person2 from "../../assets/thumbnail2.webp";
import person3 from "../../assets/thumbnail3.webp";
import person4 from "../../assets/thumbnail4.webp";
import person5 from "../../assets/thumbnail5.webp";
import person6 from "../../assets/thumbnail6.webp";
import stars from "../../assets/stars.svg";






export const courses = [
    {title: "DEVELOPMENT", desc: "Crisis management and problem-solving strategies", price: 0, img: person1, star: stars, lessons: 6, enroll: 8, 
        cardDesc: "Building single page applications with angular",
    },
    {title: "DESIGN", desc: "Advanced photoshop techniques for designers", price: 0, img: person2, star: stars,lessons: 6, enroll: 8,
        cardDesc: "Database integration with MongoDB"
    },
    {title: "FINANCE", desc: "Operations management and process improvement", price: 0, img: person3, star: stars, lessons: 6, enroll: 8,
        cardDesc: "Risk management and business continuity"
    },
    {title: "MANAGEMENT", desc: "Database integration with MongoDB", price: 59.9, img: person4, star: stars, lessons: 6, enroll: 8,
        cardDesc: "Full-stack development with the MERN stack"
    },
    {title: "DEVELOPMENT", desc: "Database integration with MongoDB", price: 99.9, img: person5, star: stars, lessons: 6, enroll: 8},
    {title: "DEVELOPMENT", desc: "Database integration with MongoDB", price: 40, img: person6, star: stars, lessons: 6, enroll: 8},
];




//images for lastCard

import certificateImg from "../../assets/certificate.svg";
import moneyImg from "../../assets/save.svg";
import learnImg from "../../assets/learn.svg";
import courseImg from "../../assets/courses.svg";


export const icons = [
    {img: learnImg, title: "Learn anything", desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin."}, 
    {img: moneyImg, title: "Save money", desc:"Lorem ipsum dolor sit amet conse non quis id viverra id proin." }, 
    {img: courseImg, title: "Flexible Courses", desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin."}, 
    {img: certificateImg, title: "Unlimited certificate", desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin."},
]