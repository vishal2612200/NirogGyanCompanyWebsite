// import * as path from "path";
const navlogoIcon = "https://dn96iqv3kf32j.cloudfront.net/websitelogos/logo-icon.svg"

export default (
    function () {
        return {
            NavBar: {
                navLinks: [
                    { text: "Home", id: "home" },
                    { text: "About Us", id: "about" },
                    { text: "How It Works", id: "how-it-works" },
                    { text: "Blogs", id: "blogs" },
                    { text: "FAQs", id: "faqs" }
                ],
                // logoImg: path.join(process.env.PUBLIC_URL, "/logo-icon.svg"),
                logoImg: navlogoIcon
            }
        }
    }
)();