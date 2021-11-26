const heroImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/hero-image.svg"

const getInTouch1 = "https://dn96iqv3kf32j.cloudfront.net/getintouch/static/imgs/get-in-touch-1.svg"
const getInTouch2 = "https://dn96iqv3kf32j.cloudfront.net/getintouch/static/imgs/get-in-touch-2.svg"


const solutions = {
    self: { url: "/solutions/corporates", text: "Corporate", onNavbar: false },

    HeroSection: {
        contentLeft: {
            heading: { line1: "Smart reports for Corporates", line2: "" },
            descriptions: [
                "Healthy and happy employees are the backbone of every successful company in modern times; better productivity, strong employee retention, and a good reputation overall.",
                "If your people are used to shopping on Amazon, why send them to the local fish market ? With Corporate Smart Reports, give them the power of digital health, and an amazing experience with the Annual Health Checkup.It’s the age of being health- conscious."
            ]
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
                heading: "Features available to offer corporate clients",
                description: [
                    { text: "We have user-friendly corporate health solutions — a gamified dashboard for the health status analysis of all employees. No need to spend hours on a clunky Excel file." },
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
    Advantages: {

        contentLeft: {
            content: {
                heading: "Advantages offered by us to engage their customer ",
                description: [
                    { text: "Multiple cuts & filters : demographic cohorts, employee department, office location, etc." },
                    { text: "Complete biomarker coverage, incl.simplified medical content on EVERYTHING!" },
                    { text: "Detailed statistical and health insights, along with the possible next steps." },
                    { text: "Separating the healthy employees from the not-so-healthy ones." },
                    { text: "Modern design and user-experience, incl.user login." },
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
export default solutions;