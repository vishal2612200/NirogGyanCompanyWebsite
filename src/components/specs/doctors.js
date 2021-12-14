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
                title: "Smart Reports for Doctors",
                introPoints: [
                    "Technology-driven diagnosis is the backbone of the modern GP.",
                    "Any patient, whether from a metro city or a village, is more likely to visit you again if you maintain their past data and build trust by answering their basic queries.",
                    "Go digital with Smart Reports and present your medical practice in a patient-friendly manner."
                ],                
                introImage: "https://i.ibb.co/QjpDSfv/doctor-image-removebg-preview.png"
            },

            mainHeading: "Your New Ally",
            mainHeadingText: "Lab reports for monitoring of treatment, case-study and personalised medicine",
            featuresList: [
               "Historical analysis will help you check the progress of disease and effectiveness of particular treatments",
               "Save time spent per report with our quick-glance Summary and Compact",
               "Counsel your patients on lifestyle with Dynamic or Advanced",
               "Appointment booking directly from the test reports",
            ],
            brochureImage: "https://i.ibb.co/QJ3jrWM/niroggyanvitaminreport-1.png",
            brochureLink: "https://brochure.niroggyan.com/"

        }
    };
})();
