
import * as path from "path";

import heroImage from "../about/static/imgs/hero-image.png"

import recognisedBy1 from "../about/static/imgs/recognised-by-1.png"
import recognisedBy2 from "../about/static/imgs/recognised-by-2.png"
import recognisedBy3 from "../about/static/imgs/recognised-by-3.png"
import recognisedBy4 from "../about/static/imgs/recognised-by-4.jpg"

import marketCardItem1 from "../about/static/imgs/market-card-item-1.png"
import marketBackground from "../about/static/imgs/market-background.png"

import believeBackground from "../about/static/imgs/believe-background.png"


import expertTeam1 from "../about/static/imgs/expertteam-1.png"
import expertTeam2 from "../about/static/imgs/expertteam-2.png"
import expertTeam3 from "../about/static/imgs/expertteam-3.png"
// import expertTeam4 from "../about/static/imgs/expertteam-4.png"
import expertTeam5 from "../about/static/imgs/expertteam-5.jpg"
import expertTeam6 from "../about/static/imgs/expertteam-6.jpg"
// import expertTeam7 from "../about/static/imgs/expertteam-7.png"
import expertTeam8 from "../about/static/imgs/expertteam-8.jpg"

import productConsultant1 from "../about/static/imgs/product-consultant-1.jpeg"
// import productConsultant2 from "../about/static/imgs/product-consultant-2.jpeg"
import productConsultant3 from "../about/static/imgs/product-consultant-3.jpeg"
import productConsultant4 from "../about/static/imgs/product-consultant-4.png"
import productConsultant5 from "../about/static/imgs/product-consultant-5.jpeg"
import productConsultant6 from "../about/static/imgs/product-consultant-6.jpeg"
// import productConsultant7 from "../about/static/imgs/product-consultant-7.jpeg"
// import productConsultant8 from "../about/static/imgs/product-consultant-8.jpeg"
import productConsultant9 from "../about/static/imgs/product-consultant-9.jpeg"

import productConsultantKartik from "../about/static/imgs/product-consultant-kartik.png"

import helpedOrganisationsBackground from "../about/static/imgs/helped-organisations-background.png"


export default (function () {
    return {

        HeroSection: {
            contentLeft: {

                heading: "About Us",
                breadcrumbs: [{
                    text: "Home",
                    link: "/home"
                }, {
                    text: "About",
                    link: "/about"
                }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {
                imagePath: heroImage,
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"


        },
        RecognisedBy: {
            header: {
                heading: [{
                    text: "Recognised By"
                }],

            },
            trustedBrandsLogoImages: {
                recognisedBy1: [recognisedBy1, "https://yourstory.com/2021/07/funding-saas-startup-niroggyan-seed-round-healthcare/amp"],
                recognisedBy2: [recognisedBy2, "https://saasindustry.com/news/niroggyan-raises-an-undisclosed-seed-round-from-healthcare-industry-veterans/"],
                recognisedBy3: [recognisedBy3, "https://entrackr.com/2021/07/funding-in-indian-startups-this-week-12-july-17-july/"],
                recognisedBy4: [recognisedBy4, "https://www.biospectrumindia.com/news/20/15236/nha-nathealth-hosts-innovation-carnival-for-healthcare-startups.html"],
            }
        },
        Market: {
            contentLeft: {
                header: {
                    heading: [{ text: "As the first point-of-evidence, Diagnostic data is the most effective tool to tell the status of a person's health and compel them to be proactive." }],
                    description: [
                        { text: "Yet, they are extremely difficult to interpret by anyone who is not a doctor, leading to low health literacy and ineffective long-term measures." },
                        { text: "Born out of a need almost everyone over the age of 30 has faced at least once in their lives, NirogGyan emerged as an innovative startup in a space which needed evolution for a long time. We keep it simple with our easy-to-understand medical test reports." }
                    ]
                },
                cardsList: [{
                    imagePath: marketCardItem1,
                    items: ["📈 3+ Years in Market", "📦 10+ Products", "📝 Founders from IIM - BITS backgrounds"],
           }],
            },
            contentRight: {
                imagePath: marketBackground
            }
        },

        Believe: {
            contentLeft: {
                content: {

                    heading: "We believe that",

                    description: ["🏥 To truly engage with patients, one has to understand what they are worried about and what they are trying to do",
                        "🏥 Consumer health technologies have the potential to strengthen the patient-physician connection and improve health outcomes",
                        "🏥 Good Health is easy once clearly understood and imbibed into everyday lives"
                    ]
                }
            },
            contentRight: {
                imagePath: believeBackground
            }
        },

        ExpertTeam: {
            header: {

                heading: [{
                    text: "Our Expert Team"
                }],
                description: "Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilisation work.",
            },
            cardsList: [{
                imgPath: expertTeam1,
                heading: "Shweta Gandhi",
                content: "Co-Founder, Business Head",
                linkedin: "https://www.linkedin.com/in/shweta-gandhi/"
            },
            {
                imgPath: expertTeam2,
                heading: "Joyneel Acharya",
                content: "Co-Founder, Product Head",
                linkedin: "https://www.linkedin.com/in/joyneel-acharya/"
            },
            {
                imgPath: expertTeam3,
                heading: "Kartik Tyagi",
                content: "Technical Lead",
                linkedin: "https://www.linkedin.com/in/kartiktyagi3/"
            },
            {
                imgPath: expertTeam5,
                heading: "Ranjeet Jha",
                content: "Head of Design",
                linkedin: ""
            },
            {
                imgPath: expertTeam5,
                heading: "Vishal Sharma",
                content: "Software Engineer",
                linkedin: "https://www.linkedin.com/in/vishal-sharma-gbpecdelhi/"
            },
            {
                imgPath: expertTeam6,
                heading: "Abhishek Soni",
                content: "Software Engineer",
                linkedin: "https://www.linkedin.com/in/hello-abhishek/"
            },
            {
                imgPath: expertTeam5,
                heading: "Nithish",
                content: "Software Engineer",
                linkedin: "https://www.linkedin.com/in/nithish-976b76218/"
            },
            {
                imgPath: expertTeam8,
                heading: "Yash Marmat",
                content: "Web Developer",
                linkedin: "https://www.linkedin.com/in/yash-marmat/"
            }

            ],
        },

        ProductConsultant: {
            header: {

                heading: [{
                    text: "Product Consultant"
                }],
                description: "People helping out Niroggyan to grow its reach and expand more at a faster pace.",
            },
            cardsList: [
                {
                    imgPath: productConsultant1,
                    heading: "Mr. Teji HS",
                    content: "Global Head in Oracle, Singapore national & works with Healthtech startups",
                    linkedin: "https://www.linkedin.com/in/teji-hs-9765143/"
                },
                {
                    imgPath: expertTeam5,
                    heading: "Mr. Arindam Haldar",
                    content: "Ex-CEO of SRL & Thyrocare, and IIM-C alum",
                    linkedin: "https://www.linkedin.com/in/arindamhaldar/"
                },
                {
                    imgPath: productConsultant3,
                    heading: "Ruchira Roy",
                    content: "Managing Partner, Positron and IIM-A alum",
                    linkedin: "https://www.linkedin.com/in/ruchira-roy-a155855/"
                },
                
                {
                    imgPath: productConsultant4,
                    heading: "PIEDS, BITS Pilani",
                    content: "Incubator of BITS Pilani",
                    linkedin: "https://www.linkedin.com/company/pilani-innovation-entrepreneurship-development-society-pieds-bits-pilani/"
                },
                {
                    imgPath: productConsultant5,
                    heading: "Mr. Gaurav Rautela",
                    content: "Senior Tech Lead at Gojek",
                    linkedin: "https://www.linkedin.com/in/gaurav-rautela-5b0223b9/"
                },
                {
                    imgPath: productConsultant6,
                    heading: "Mr. Sumit Bagaria",
                    content: "CEO, Hemogenomics & IIM-C alum",
                    linkedin: "https://www.linkedin.com/in/sumit-bagaria-8170a81/"
                },
                {
                    imgPath: expertTeam5,
                    heading: "Mr. Rakesh Luthra",
                    content: "Director at Novo Nordisk",
                    linkedin: "https://www.linkedin.com/in/rakeshluthra1984/"
                },
                {
                    imgPath: expertTeam5,
                    heading: "Mr. Vish Sathappan",
                    content: "Director at Times of India Group",
                    linkedin: "https://www.linkedin.com/in/vish-sathappan-8b170b13/"
                },
                {
                    imgPath: productConsultant9,
                    heading: "Mr. Sanjeev Kathpalia",
                    content: "IIM-C alum in healthcare",
                    linkedin: "https://www.linkedin.com/in/sanjeevkathpalia/"
                }
            ],
        },
        HelpedOrganisations: {
            header: {
                heading: [{
                    text: "We have helped 100+ organizations"
                }],
                description: "Labs, hospitals, startups and corporates have tried our Patient-Engagement solutions (with Smart Reports, specialised profiles, dashboards and analytics). Why don't you join the list as well?",
            },
            buttonText: "Discover & Get Support From Our Team",
            backgroundImage: helpedOrganisationsBackground
        },

    }
})();