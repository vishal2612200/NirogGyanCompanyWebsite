import * as path from "path";


// main title image
const heroImage = "https://anytimesolutions.in/wp-content/uploads/2021/01/anytime-blue.png"

const solpageBackgroundImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-background.png"


export default (function () {
    return {
        DocumentHeader: {
            title: "Solution Page",
            description: "solution page description",
        },
        PageContentHolder: {
            introduction: {
                title: "Smart Reports for Corporates",
                introPoints: [
                    "Healthy and happy employees are the backbone of every successful company in modern times; better productivity, strong employee retention, and a good reputation overall.",
                    "If your colleagues are used to the best of modern tech, why keep their health behind? With Corporate Smart Reports, give them a Google-like amazing experience with the Annual Health Checkup. It’s the age of being conscious.",
                ],                
                introImage: "https://i.ibb.co/NtPjDbd/corporate-image-removebg-preview.png"
            },

            mainHeading: "What We Offer",
            featuresList: [
               "We have user-friendly corporate health solutions",
               "a gamified dashboard for the health status analysis of all employees. No need to spend hours on a clunky Excel file",               
            ],
            brochureImage: "https://i.ibb.co/QJ3jrWM/niroggyanvitaminreport-1.png",
            brochureLink: "https://brochure.niroggyan.com/",
            backgroundImage: "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-background.png",
            
            mainHeading2: "The Niro Advantage",
            mainHeading2InfoText: "Data Analytics Solutions (dashboard images & features explained & Adding Corporate Dashboard Explainer Video)",
            niroAdvantages: [
                {advantageType: "Multiple cuts & filters", advantageDes: "demographic cohorts, departments, office location, etc." },
                {advantageType: "Complete biomarker coverage", advantageDes: "with simplified medical content on EVERYTHING!" },
                {advantageType: "Detailed health statistical insights", advantageDes: "Detailed health statistical insights, along with possible next steps." },
                {advantageType: "healthy and unhealthy cohorts", advantageDes: "Look at your healthy and unhealthy cohorts differently." },
                {advantageType: "Modern design & UX", advantageDes: "Modern design & UX, with multi-user login and auto-message options." },
                {advantageType: "analytics solution", advantageDes: "Build your own analytics solution with NirogGyan and DataUno [in pipeline]" },
            ]
        },
    };
})();
