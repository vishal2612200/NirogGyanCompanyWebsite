
import * as path from "path";

import heroImage from "../about/static/imgs/hero-image.svg"

import recognisedBy1 from "../about/static/imgs/recognised-by-1.png"
import recognisedBy2 from "../about/static/imgs/recognised-by-2.png"
import recognisedBy3 from "../about/static/imgs/recognised-by-3.png"
import recognisedBy4 from "../about/static/imgs/recognised-by-4.jpg"

import marketCardItem1 from "../about/static/imgs/market-card-item-1.png"
import marketBackground from "../about/static/imgs/market-background.svg"

import believeBackground from "../about/static/imgs/believe-background.svg"


import expertTeamShweta from "../about/static/imgs/expertteam-shweta.png"
import expertTeamJoy from "../about/static/imgs/expertteam-joy.jpg"
import expertTeamKartik from "../about/static/imgs/expertteam-kartik.png"
import expertTeamVishal from "../about/static/imgs/expertteam-vishal.png"
import expertTeamAbhishek from "../about/static/imgs/expertteam-abhishek.png"
import expertTeamYash from "../about/static/imgs/expertteam-yash.png"
import expertTeamNithish from "../about/static/imgs/expertteam-nitish.png"
import expertTeamRanjeet from "../about/static/imgs/expertteam-ranjeet.png"
import expertTeamJayanti from "../about/static/imgs/expertteam-jayanti.png"

import productConsultantTeji from "../about/static/imgs/product-consultant-teji.png"
import productConsultantArindam from "../about/static/imgs/product-consultant-arindam.png"
import productConsultantRuchira from "../about/static/imgs/product-consultant-ruchira.png"
import productConsultantGirish from "../about/static/imgs/product-consultant-girish.png"
import productConsultantPIEDS from "../about/static/imgs/product-consultant-PIEDS.png"
import productConsultantGaurav from "../about/static/imgs/product-consultant-gaurav.png"
import productConsultantRakesh from "../about/static/imgs/product-consultant-rakesh.png"
import productConsultantVish from "../about/static/imgs/product-consultant-vish.png"
import productConsultantSanjeev from "../about/static/imgs/product-consultant-sanjeev.png"
import productConsultantSumit from "../about/static/imgs/product-consultant-sumit.png"

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
                    text: "In the News"
                }],

            },
            trustedBrandsLogoImages: [
                { imagePath: recognisedBy1, altText: "recognisedBy1", link: "https://yourstory.com/2021/07/funding-saas-startup-niroggyan-seed-round-healthcare/amp" },
                { imagePath: recognisedBy2, altText: "recognisedBy2", link: "https://saasindustry.com/news/niroggyan-raises-an-undisclosed-seed-round-from-healthcare-industry-veterans/" },
                { imagePath: recognisedBy3, altText: "recognisedBy3", link: "https://entrackr.com/2021/07/funding-in-indian-startups-this-week-12-july-17-july/" },
                { imagePath: recognisedBy4, altText: "recognisedBy4", link: "https://www.biospectrumindia.com/news/20/15236/nha-nathealth-hosts-innovation-carnival-for-healthcare-startups.html" },

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
                description: "Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilisation work.",
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
                image: { imagePath: expertTeamJayanti, altText: "expertTeamJayanti" },
                heading: "Dr. Jayanti",
                content: "Medical Advisor",
                linkedin: "www.linkedin.com/in/dr-jayanti-a-35862b7/"
            },
            {
                image: { imagePath: expertTeamRanjeet, altText: "expertTeamKartik" },
                heading: "Ranjeet Jha",
                content: "Head of Design",
                linkedin: "www.linkedin.com/in/vishal-sharma-gbpecdelhi/"
            },
            {
                image: { imagePath: expertTeamVishal, altText: "expertTeamVishal" },
                heading: "Vishal Sharma",
                content: "Software Engineer",
                linkedin: "www.linkedin.com/in/vishal-sharma-gbpecdelhi/"
            },
            {
                image: { imagePath: expertTeamAbhishek, altText: "expertTeamAbhishek" },
                heading: "Abhishek Soni",
                content: "Software Engineer",
                linkedin: "www.linkedin.com/in/hello-abhishek/"
            },
            {
                image: { imagePath: expertTeamNithish, altText: "expertTeamNithish" },
                heading: "Nithish",
                content: "Software Engineer",
                linkedin: "www.linkedin.com/in/nithish-976b76218/"
            },
            {
                image: { imagePath: expertTeamYash, altText: "expertTeamYash" },
                heading: "Yash Marmat",
                content: "Software Engineer",
                linkedin: "www.linkedin.com/in/yash-marmat/"
            }],
        },

        ProductConsultant: {
            header: {

                heading: [{
                    text: "Believers in NirogGyan"
                }],
                description: "Industry and Technology experts, helping the novel idea spread its wings",
            },
            cardsList: [
                {
                    image: { imagePath: productConsultantArindam, altText: "productConsultantAyush" },
                    heading: "Mr. Arindam Haldar",
                    content: "CEO, Pure Health (labs)",
                    linkedin: "www.linkedin.com/in/arindamhaldar/"
                },
                {
                    image: { imagePath: productConsultantTeji, altText: "productConsultantAyush" },
                    heading: "Mr. Teji HS",
                    content: "Global Head, Oracle",
                    linkedin: "www.linkedin.com/in/teji-hs-9765143/"
                },
                {
                    image: { imagePath: productConsultantGirish, altText: "productConsultantAyush" },
                    heading: "Girish Mehta",
                    content: "ex-CEO of MedGenome India",
                    linkedin: "www.linkedin.com/in/girish-mehta-a8b88a67"
                },
                {
                    image: { imagePath: productConsultantRuchira, altText: "productConsultantAyush" },
                    heading: "Ruchira Roy",
                    content: "Managing Partner, Positron",
                    linkedin: "www.linkedin.com/in/ruchira-roy-a155855/"
                },
                {
                    image: { imagePath: productConsultantRakesh, altText: "productConsultantRakesh" },
                    heading: "Mr. Rakesh Luthra",
                    content: "Director, Novo Nordisk",
                    linkedin: "www.linkedin.com/in/rakeshluthra1984/"
                },
                {
                    image: { imagePath: productConsultantVish, altText: "productConsultantVish" },
                    heading: "Mr. Vish Sathappan",
                    content: "Director, Times of India Group",
                    linkedin: "www.linkedin.com/in/vish-sathappan-8b170b13/"
                },
                {
                    image: { imagePath: productConsultantSanjeev, altText: "productConsultantAyush" },
                    heading: "Mr. Sanjeev Kathpalia",
                    content: "CEO & MD, Mindteck",
                    linkedin: "www.linkedin.com/in/sanjeevkathpalia/"
                },
                {
                    image: { imagePath: productConsultantSumit, altText: "productConsultantSumit" },
                    heading: "Mr. Sumit Bagaria",
                    content: "CEO, Hemogenomics",
                    linkedin: "www.linkedin.com/in/sumit-bagaria-8170a81/"
                },
                {
                    image: { imagePath: productConsultantGaurav, altText: "productConsultantGaurav" },
                    heading: "Mr. Gaurav Rautela",
                    content: "Senior Tech Lead, Gojek",
                    linkedin: "www.linkedin.com/in/gaurav-rautela-5b0223b9/"
                },
                {
                    image: { imagePath: productConsultantPIEDS, altText: "productConsultantAyush" },
                    heading: "PIEDS, BITS Pilani",
                    content: "Startup Incubator",
                    linkedin: "www.linkedin.com/company/pilani-innovation-entrepreneurship-development-society-pieds-bits-pilani/"
                },
            ],
        },
        HelpedOrganisations: {
            header: {
                heading: [{
                    text: "We have helped 100+ organizations"
                }],
                description: "Labs, hospitals, startups and corporates have tried our Patient-Engagement solutions (with Smart Reports, specialised profiles, dashboards and analytics). Why don't you join the list as well?",
            },
            button: {
                text: { desktop: "Discover & Get Support From Our Team", mobile: "Discover more" }, link: "mailto:sales@niroggyan.com"
            },
            backgroundImage: helpedOrganisationsBackground
        },

    }
})();