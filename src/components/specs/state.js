import * as path from 'path';

export default (function () {
    return {
        NavBar: {
            navLinks: ["Home", "About Us", "How It Works", "Blog", "FAQs"],
            logoImg: path.join(process.env.PUBLIC_URL, "/logo-icon.png")
        },
        HeroSection: {
            info: {
                heading: { line1: "Simplifying", line2: "Medical Reports" },
                description: "NirogGyan makes lab tests engaging so that you understand your health better, with easy-to-understand and visual SmartReports. We are B2B and work with healthcare providers.",
                buttons: { services: "our Services", watchVideo: "Watch Video" }
            },
            imagePath: path.join(process.env.PUBLIC_URL, "/hero-image.png"),
        },
        Brand: {
            heading: "Trusted HealthCare Brands",
            trustedBrandsLogoImages: [
                path.join(process.env.PUBLIC_URL, "brands", "crelio-health.png"),
                path.join(process.env.PUBLIC_URL, "brands", "dr-dang-labs.png"),
                path.join(process.env.PUBLIC_URL, "brands", "medlife.png"),
                path.join(process.env.PUBLIC_URL, "brands", "niramaya.png")
            ]
        }
    }


})();