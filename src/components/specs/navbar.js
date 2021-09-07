import * as path from "path";

export default (
    function () {
        return {
            NavBar: {
                navLinks: [
                    { text: "Home", id: "home" },
                    { text: "About Us", id: "about" },
                    { text: "How It Works", id: "how-it-works" },
                    { text: "Blog", id: "blog" },
                    { text: "FAQs", id: "faqs" }
                ],
                logoImg: path.join(process.env.PUBLIC_URL, "/logo-icon.png"),
            }
        }
    }
)();