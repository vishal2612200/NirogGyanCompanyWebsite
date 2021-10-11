const logoIcon = "https://niroggyan.s3.ap-south-1.amazonaws.com/footer/static/imgs/logo-icon.svg"
const facebook = "https://niroggyan.s3.ap-south-1.amazonaws.com/footer/static/imgs/facebook.svg"
const instagram = "https://niroggyan.s3.ap-south-1.amazonaws.com/footer/static/imgs/instagram.svg"
const linkedin = "https://niroggyan.s3.ap-south-1.amazonaws.com/footer/static/imgs/linkedin.svg"


export default (
    function () {
        return {
            Footer: {
                block1: {
                    logoImage: logoIcon,
                    copyrightText: <>Copyright 2020 © NirogGyan<br />All rights reserved.</>,
                },
                block2: {
                    heading: "Company",
                    items: [
                        { text: "About Us", link: "/about" },
                        { text: "How It works", link: "/how-it-works" },
                        { text: "Blogs", link: "/blogs" }
                    ]
                },
                block3: {
                    heading: "Further information",
                    items: [{ text: "Terms of Services", link: "/terms-of-services" }, { text: "Privacy Policy", link: "/privacy-policy" }]
                },
                block4: {
                    heading: "Community",
                    images: [
                        { imagePath: facebook, altText: "fghj", link: "https://www.facebook.com/niroggyan/" },
                        { imagePath: linkedin, altText: "fc", link: "https://www.linkedin.com/company/niroggyan/mycompany/" },
                        { imagePath: instagram, altText: "dx", link: "https://www.instagram.com/niroggyan_reports" }
                    ],

                }
            }
        }
    })();