const heroImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/hero-image.svg"

const getInTouch1 = "https://dn96iqv3kf32j.cloudfront.net/getintouch/static/imgs/get-in-touch-1.svg"
const getInTouch2 = "https://dn96iqv3kf32j.cloudfront.net/getintouch/static/imgs/get-in-touch-2.svg"


const doctors = {
    self: { url: "/solutions/doctors", text: "Doctors", onNavbar: false },

    HeroSection: {
        contentLeft: {
            heading: { line1: "Smart reports for Doctors", line2: "" },
            descriptions: [
                "Technology driven diagnosis is a backbone of modern medicine. Patient is more likely to visit your clinic again if you maintain a record of the patient's past illnesses.",
                "Go digital with smart reports and provide a new age digital experience to your patients.Present your medical practice in a patient friendly manner.This is important for a long term patient and doctor relationship.Providing access to basic health information to your patients builds patient’s trust in you."
            ],
        },
        contentRight: {
            image: {
                imagePath: heroImage,
                altText: "hero"
            }
        },
        linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },

    Features: {

        contentLeft: {
            content: {
                heading: "Features available to offer the doctors",
                description: [


                    { text: "Lab reports for monitoring of treatment, case study and personalized medicine- Historical analysis will help you check the progress of disease and check effectiveness of particular treatment in a particular case. It will go a long way in adjusting the dosage of medicines for a specific patient. This can prevent overdose and underdose problems. " },
                    { text: "Get appointment booking directly from digital lab reports." }
                ]
            }
        },
        contentRight: {
            image: {
                imagePath: heroImage,
                altText: "hero"
            }
        },
        linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },
    Report: {
        contentLeft: {
            content: {
                heading: "Report which is used by Doctors",
                description: [
                    { text: "Save time spend per lab report with quick glance summary" },
                    { text: "Compact report is advisable if you think you are more comfortable with traditional report than with advanced lab reporting formats" },
                    { text: "Advanced and dynamic reports will help counsel the patient on diet and lifestyle tips.It will help your clinic get a better image as a preventive health care provider." },
                ]
            }
        },
        contentRight: {
            image: {
                imagePath: heroImage,
                altText: "hero"
            }
        },
        linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },
    USP: {

        contentLeft: {
            content: {
                heading: "Advantages offered by us to engage their customer (USP)",
                description: [
                    { text: "Increase brand visibility: Upto 3 times higher traction in social media was seen after adoption of digital smart reports by our clients." },
                    { text: "Increase repeat rate: On average the number of patients who visited the lab again increased by 10 % after adoption of smart reports." },
                    { text: "Increase patient satisfaction and better google reviews." },
                ]
            }
        },
        contentRight: {
            image: {
                imagePath: heroImage,
                altText: "hero"
            }
        },
        linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },

    GetInTouch: {

        block1: {
            imagePath: getInTouch1,

        },
        block2: {
            line1: "Get In Touch",
            line2: "contact@niroggyan.com",
            line3: "+91-7678277891",
        },
        block3: {
            imagePath: getInTouch2,
        }
    },

};
export default doctors;