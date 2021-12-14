import * as path from "path";


// main title image
const heroImage = "https://i.ibb.co/dBxdg4Y/labs-image-removebg-preview.png"

const solpageBackgroundImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-background.png"


export default (function () {
    return {
        DocumentHeader: {
            title: "Labs Page",
            description: "Labs page description",
        },
        HeroSection: {
            contentLeft: {
                heading: "Smart Reports for Labs",
                breadcrumbs: [{ text: "Solutions", link: "/solutions" }, { text: "Labs", link: "/labs" }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),
            },
            contentRight: {
                image: { imagePath: heroImage, altText: "heroImage" },
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
        },
        PageContentHolder: {
            
            mainHeading: "How It Works",
            howItWorksPoints: [
                "The Niro software gets integrated with your Laboratory Information System (LIS), with the reports self-generated on your portal. You don’t have to change anything!",
                "Connect with us to know more about how we provide our world-class services to even those labs who don’t have an LIS."
            ],
            howItWorksIcon: "https://i.ibb.co/R6h74Kz/question-mark-300x300-removebg-preview.png",
            howItWorksLink: "https://www.niroggyan.com/how-it-works",
            backgroundImage: solpageBackgroundImage,
            mainHeading2: "A Game Changer",
            heading2InfoText1: "Besides our regular smart reports, we also provide customised profiles/packages like PCOS profile, hormones, COVID, etc.",
            reportIcon: "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-pdf-whatsapp.png",
            reportTypes: [
                { type: "Increase brand visibility", reportDes: "Upto 3 times higher traction in social media was seen after adoption of digital Smart Reports by our clients" },
                { type: "Increase repeat rate", reportDes: "On average the number of patients who visited the lab again increased by 10% after adoption of smart reports." },
                { type: "Increase patient satisfaction", reportDes: "Patient satisfaction and better Google reviews." },                
            ],
            heading2InfoTextHeader: "NirogGyan Brochure",
            heading2InfoText2: "If your lab has a high walk-in of patients and some preventive health packages, go for the Advanced or the Dynamic.",
            brochureImage: "https://i.ibb.co/QJ3jrWM/niroggyanvitaminreport-1.png",
            brochureLink: "https://brochure.niroggyan.com/"
        }
    };
})();
