
import * as path from "path";

import heroImage from "../about/static/imgs/hero-image.svg"

import recognisedBy1 from "../about/static/imgs/recognised-by-1.png"
import recognisedBy2 from "../about/static/imgs/recognised-by-2.png"
import recognisedBy3 from "../about/static/imgs/recognised-by-3.png"
import recognisedBy4 from "../about/static/imgs/recognised-by-4.jpg"

import marketCardItem1 from "../about/static/imgs/market-card-item-1.png"
import marketBackground from "../about/static/imgs/market-background.svg"

import believeBackground from "../about/static/imgs/believe-background.svg"


import expertTeamShweta from "../about/static/imgs/expertteam-shweta.svg"
import expertTeamJoy from "../about/static/imgs/expertteam-joy.svg"
import expertTeamKartik from "../about/static/imgs/expertteam-kartik.svg"

import productConsultantAyush from "../about/static/imgs/product-consultant-ayush.png"
import productConsultantErik from "../about/static/imgs/product-consultant-erik.svg"
import productConsultantKartik from "../about/static/imgs/expertteam-kartik.svg"

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
                image: { imagePath: heroImage, altText: "hero" },
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"


        },
        RecognisedBy: {
            header: {
                heading: [{
                    text: "Recognised By"
                }],

            },
            trustedBrandsLogoImages: [
                { imagePath: recognisedBy1, altText: "recognisedBy1", link:"https://yourstory.com/2021/07/funding-saas-startup-niroggyan-seed-round-healthcare/amp" },
                { imagePath: recognisedBy2, altText: "recognisedBy2", link:"https://saasindustry.com/news/niroggyan-raises-an-undisclosed-seed-round-from-healthcare-industry-veterans/" },
                { imagePath: recognisedBy3, altText: "recognisedBy3", link:"https://entrackr.com/2021/07/funding-in-indian-startups-this-week-12-july-17-july/" },
                { imagePath: recognisedBy4, altText: "recognisedBy4", link:"https://www.biospectrumindia.com/news/20/15236/nha-nathealth-hosts-innovation-carnival-for-healthcare-startups.html" },

            ]
            
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
                    image: { imagePath: marketCardItem1, altText: "marketCardItem1" },
                    items: ["📈 3+ Years in Market", "📦 10+ Products", "📝 300,000+ Reports"],
                }],
            },
            contentRight: {
                image: { imagePath: marketBackground, altText: "marketBackground" },
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
                image: { imagePath: believeBackground, altText: "believeBackground" },
            }
        },

        ExpertTeam: {
            header: {

                heading: [{
                    text: "Our Expert Team"
                }],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
            },
            cardsList: [{
                image: { imagePath: expertTeamShweta, altText: "expertTeamShweta" },
                heading: "Shweta Gandhi",
                content: "Co-Founder, Business Head",
                linkedin: "www.linkedin.com/in/shweta-gandhi/"
            },
            {
                image: { imagePath: expertTeamJoy, altText: "expertTeamJoy" },
                heading: "Joyneel Acharya",
                content: "Co-Founder, Product Head",
                linkedin: "www.linkedin.com/in/joyneel-acharya/"
            },
            {
                image: { imagePath: expertTeamKartik, altText: "expertTeamKartik" },
                heading: "Kartik Tyagi",
                content: "Technical Lead",
                linkedin: "www.linkedin.com/in/kartiktyagi3/"
            },
            {
                image: { imagePath: expertTeamKartik, altText: "expertTeamKartik" },
                heading: "Ranjeet Jha",
                content: "Head of Design",
                linkedin: "www.linkedin.com/in/vishal-sharma-gbpecdelhi/"
            },
            {
                image: { imagePath: expertTeamKartik, altText: "expertTeamKartik" },
                heading: "Vishal Sharma",
                content: "Software Engineer",
                linkedin: "www.linkedin.com/in/vishal-sharma-gbpecdelhi/"
            },
            {
                image: { imagePath: expertTeamKartik, altText: "expertTeamKartik" },
                heading: "Abhishek Soni",
                content: "Software Engineer",
                linkedin: "www.linkedin.com/in/hello-abhishek/"
            },
            {
                image: { imagePath: expertTeamKartik, altText: "expertTeamKartik" },
                heading: "Nithish",
                content: "Software Engineer",
                linkedin: "www.linkedin.com/in/nithish-976b76218/"
            },
            {
                image: { imagePath: expertTeamKartik, altText: "expertTeamKartik" },
                heading: "Yash Marmat",
                content: "Web Developer",
                linkedin: "www.linkedin.com/in/yash-marmat/"
            }],
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
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "Mr. Teji HS",
                    content: "Global Head in Oracle, Singapore national & works with Healthtech startups",
                    linkedin: "www.linkedin.com/in/teji-hs-9765143/"
                },
                {
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "Mr. Arindam Haldar",
                    content: "Ex-CEO of SRL & Thyrocare, and IIM-C alum",
                    linkedin: "www.linkedin.com/in/arindamhaldar/"
                },
                {
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "Ruchira Roy",
                    content: "Managing Partner, Positron and IIM-A alum",
                    linkedin: "www.linkedin.com/in/ruchira-roy-a155855/"
                },

                {
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "PIEDS, BITS Pilani",
                    content: "Incubator of BITS Pilani",
                    linkedin: "www.linkedin.com/company/pilani-innovation-entrepreneurship-development-society-pieds-bits-pilani/"
                },
                {
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "Mr. Gaurav Rautela",
                    content: "Senior Tech Lead at Gojek",
                    linkedin: "www.linkedin.com/in/gaurav-rautela-5b0223b9/"
                },
                {
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "Mr. Sumit Bagaria",
                    content: "CEO, Hemogenomics & IIM-C alum",
                    linkedin: "www.linkedin.com/in/sumit-bagaria-8170a81/"
                },
                {
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "Mr. Rakesh Luthra",
                    content: "Director at Novo Nordisk",
                    linkedin: "www.linkedin.com/in/rakeshluthra1984/"
                },
                {
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "Mr. Vish Sathappan",
                    content: "Director at Times of India Group",
                    linkedin: "www.linkedin.com/in/vish-sathappan-8b170b13/"
                },
                {
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },
                    heading: "Mr. Sanjeev Kathpalia",
                    content: "IIM-C alum in healthcare",
                    linkedin: "www.linkedin.com/in/sanjeevkathpalia/"
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