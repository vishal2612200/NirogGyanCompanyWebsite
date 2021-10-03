import logoIcon from "../footer/static/imgs/logo-icon.svg"
import facebook from "../footer/static/imgs/facebook.svg"
import instagram from "../footer/static/imgs/instagram.svg"
import linkedin from "../footer/static/imgs/linkedin.svg"

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
                        { text: "About us", link: "/about" },
                        { text: "How it works", link: "/how-it-works" },
                        { text: "Blog", link: "/blog" }
                    ]
                },
                block3: {
                    heading: "Further information",
                    items: [{ text: "Terms of Services", link: "#" }, { text: "Privacy Policy", link: "#" }]
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