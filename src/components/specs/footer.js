import * as path from "path";

export default (
    function () {
        return {
            Footer: {
                block1: {
                    logoImage: path.join(process.env.PUBLIC_URL, "footer", "logo-icon.png"),
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
                    items: [path.join(process.env.PUBLIC_URL, "footer", "facebook.png"),
                    path.join(process.env.PUBLIC_URL, "footer", "twitter.png"),
                    path.join(process.env.PUBLIC_URL, "footer", "instagram.png")],
                    svgitems: [path.join(process.env.PUBLIC_URL, "footer", "facebook.svg"),
                    path.join(process.env.PUBLIC_URL, "footer", "twitter.svg"),
                    path.join(process.env.PUBLIC_URL, "footer", "instagram.svg")]
                }
            }
        }
    })();