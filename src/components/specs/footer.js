import logoIcon from "../footer/static/imgs/logo-icon.png"
import facebook from "../footer/static/imgs/facebook.svg"
import twitter from "../footer/static/imgs/twitter.svg"
import instagram from "../footer/static/imgs/instagram.svg"

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
                    items: ["About us", "How it works", "Blog"]
                },
                block3: {
                    heading: "Further information",
                    items: ["Community", "Guidelines", "Terms of Services", "Privacy Policy"]
                },
                block4: {
                    heading: "Community",

                    svgitems: [facebook, twitter, instagram]
                }
            }
        }
    })();