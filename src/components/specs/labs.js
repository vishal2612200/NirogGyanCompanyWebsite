const heroImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/hero-image.svg"



const recognisedBy1 = "https://dn96iqv3kf32j.cloudfront.net/about/static/imgs/recognised-by-1.png"
const recognisedBy2 = "https://dn96iqv3kf32j.cloudfront.net/about/static/imgs/recognised-by-2.png"
const recognisedBy3 = "https://dn96iqv3kf32j.cloudfront.net/about/static/imgs/recognised-by-3.png"
const recognisedBy4 = "https://dn96iqv3kf32j.cloudfront.net/about/static/imgs/recognised-by-4.jpg"



const getInTouch1 = "https://dn96iqv3kf32j.cloudfront.net/getintouch/static/imgs/get-in-touch-1.svg"
const getInTouch2 = "https://dn96iqv3kf32j.cloudfront.net/getintouch/static/imgs/get-in-touch-2.svg"


const labs = {
    self: { url: "/solutions/labs", text: "Labs", onNavbar: false },

    HeroSection: {
        contentLeft: {
            heading: { line1: "Smart reports for Labs", line2: "-" },
            descriptions: [
                "If you are looking for a complete digital report solution for your lab then you are at the right place. ",
            ],
            buttons: {
                services: {
                    text: "Our Services",
                    link: "https://linktr.ee/niroggyan"
                },
                calendly: {
                    text: "E-Meet Us",
                    link: "https://calendly.com/niroggyan_reports"
                },
                watchVideo: {
                    text: "Watch Video",
                    link: "https://linktr.ee/niroggyan"
                }
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

    Features: {

        contentLeft: {
            content: {
                heading: "Features available to offer the labs (clients)",
                description: [
                    { text: "We get integrated with your Laboratory Information System(LIS).Our digital reports get automatically generated in your portal.You don’t have to change your lab setting. " },
                    { text: "Connect with us to know more about how we can provide world class online lab reports to even those labs which don’t have software for lab reports. " },
                    { text: "Besides our regular smart reports, we also provide customized profiles/ packages like detailed PCOS profile, hair fall package etc." },
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
                heading: "Report which is used by labs",
                description: [
                    { text: "If your lab has a high walkin of patients and you give preventive health packages, then advanced and dynamic medical report format is suitable for your lab." },
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
export default labs;