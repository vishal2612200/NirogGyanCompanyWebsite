import * as path from "path";



const heroImage = "https://dn96iqv3kf32j.cloudfront.net/faqs/static/imgs/hero-image.svg"

export default (function () {
    return {
        DocumentHeader:{
            title: "Frequently Asked Questions (FAQ) about Smart Reports | NirogGyan",
            description: "All your queries about Smart Reports are answered here. If you don't find what you need, contact our customer care. Read Doctor's opinion about Smart Reports.",
            canonical: "https://www.niroggyan.com/faqs",
        },
        HeroSection: {
            contentLeft: {

                heading: "FAQS",
                breadcrumbs: [{ text: "Home", link: "/home" }, { text: "Faqs", link: "/faqs" }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {
                image: { imagePath: heroImage, altText: "heroImage" },
  },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"

        },
        FrequentQuestions: {
            header: {
                heading: [{ text: "Frequently Asked Questions" }],
            },
            cardsList: [
                {
                    heading: "What does NirogGyan offer?",
                    content: "For the 21st century patients, NirogGyan offers diagnostic test reports which are 'Smart Reports' - all terms explained in simple language, interesting content, and world-class design. While a normal test report is just an A4 sheet with terms & measurements on it, our Smart Report is comprehensive but concise at the same time. Labs, doctors and patients in the post-pandemic world are all evolving with these informative reports.",
                },
                {
                    heading: "What are the types of Smart Reports available?",
                    content: "NirogGyan covers 150+ tests in its Smart format, which include LFT, KFT, CBC, COVID-19 and almost every other test covered by pathology labs.\nWe offer Smart Reports in 3 views:\n1) Advanced : Every test described in detail, with multiple actionable items\n2) Compact : Crisp information, smaller visualisation\n3) Dynamic : Focus on abnormal tests\n\n\nThe above three can be clubbed with these add-ons:\n1) Summary : Two-page report summary\n2) Hindi / Arabic : Entire Smart Report in the language of your choice\n3) Corporate Dashboard : Company-level health report",
                },
                {
                    heading: "What do doctors say about Smart Reports?",
                    content: "It is our endeavour to strengthen the relationship between healthcare professionals and patients, which is why we focus on simplification and making things easy-to-understand & easy-to-explain. Doctors who have encountered Smart Reports through their patients have endorsed the concept, and report that their patients took the consultation more seriously.",
                },
                {
                    heading: "Are my personal details and diagnostic data secure with NirogGyan?",
                    content: "Yes, your data is 100% safe with us.\n\nLike all major healthcare providers, we ensure that we don't consume any of your personal data (or contact details) in the first place and that we are legally bound never to disclose any identifiable test result information to third-parties.",
                },
                {
                    heading: "Where can I find NirogGyan’s Smart Reports?",
                    content: "If you own a pathology lab or a lab information system (LIS) company, you can delight your users with our service. Please reach out to us at +91-7678277891 or write an email to sales@niroggyan.com, and we’ll inform you about our subscription plans.\n  If you are a patient, drop us an email at contact@niroggyan.com and we’ll share our list of Smart labs with you, and facilitate your test booking as well.",
                },
                {
                    heading: "How much time will it take to integrate NirogGyan’s software with the pathology lab’s information systems?",
                    content: "  The integration process takes less than 2 days. Do contact the customer care for more details.",
                },
                {
                    heading: "How much time does the software take to process the test results and generate a Smart Report?",
                    content: "  Less than 15 seconds!",
                },
                {
                    heading: "What’s the pricing?",
                    content: "We have subscription plans based on the offerings you choose and the volumes of Smart Reports to be generated. Contact us to get the exact price quote",
                },
                {
                    heading: "How can I rely on the content in Smart Reports?",
                    content: "NirogGyan’s policy regarding providing health-related content:‘be descriptive, not prescriptive’.  Our team of dedicated doctors and pharmacy graduates curate all the information through a ‘triple check’ process, before our software visualises and generates it on your Smart Report.",
                },
                {
                    heading: "Who is behind NirogGyan?",
                    content: "NirogGyan is founded by a group of IIM and BITS Pilani graduates, supported by medical professionals, techies, hustlers and startup-based organisations from all stages.",
                },
                {
                    heading: "What if I want to cancel my subscription to NirogGyan’s software at a later stage?",
                    content: "Don’t worry, you will absolutely love our offerings 🙂. That being said, if you do wish to discontinue, your subscription can be cancelled at any time by getting in touch with our customer care.\n",
                },
            ]
        },
        Form: {
            header: {
                heading: [{ text: "Reach out with your queries" }],
            }
        }
    };
})();
