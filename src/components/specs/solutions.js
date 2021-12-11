import * as path from "path";


// main title image
const heroImage = "https://anytimesolutions.in/wp-content/uploads/2021/01/anytime-blue.png"

const solpageBackgroundImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-background.png"


export default (function () {
    return {
        DocumentHeader: {
            title: "Solution Page",
            description: "solution page description",
        },
        PageContentHolder: {
            introduction: {
                title: "Introduction",
                introPoints: [
                    "Need to upgrade your healthcare organisation?",
                    "Patients cribbing about their lab test reports?",
                    "Medical marketing campaigns getting stagnant?"
                ],
                introSubHeadings: [
                    "Modern problems require modern solutions. Here’s one for new-age diagnostics providers: the SMART REPORT",
                    "The ultimate lab reporting software that helps you take a leap forward from an outdated format to a more patient-centric & dynamic style."
                ],
                introImage: "https://i.ibb.co/TqQm6pY/1-Laptop-Book-Pro-1.png"
            },
            redirectLinks: [
                { linkName: "Labs", linkAddress: "" },
                { linkName: "Doctors", linkAddress: "" },
                { linkName: "Corporates", linkAddress: "" },
            ],
            mainHeading: "Features of NirogGyan Smart Reports",
            infoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nisi ac metus vehicula sodales sed ut nisi.",
            featuresList: [
                {
                    heading: "Simple Content, best Design",
                    description: "We give relevant & reliable information to patients, with self-explanatory scientific visualisation, improving their UX by 10x",
                    featureImgLink: "https://i.ibb.co/Cszpwsr/simple-Component-pic.png"
                },
                {
                    heading: "Print + Digital (Whatsapp, SMS, E-mail, Print, App)",
                    description: "Our patient-friendly medical reports are accessible to and personalised for the end-user",
                    featureImgLink: "https://i.ibb.co/v4WLRrs/printer-pic.png"
                },
                {
                    heading: "Advanced Analytics",
                    description: "See where you create maximum impact for your patients, and business.",
                    featureImgLink: "https://i.ibb.co/fn41KZ7/advanced-analytics-pic.png"
                },
                {
                    heading: "Instant & Automated",
                    description: "Detailed LIMS integration and no change in regular workflow, to deliver your Smart Reports online",
                    featureImgLink: "https://i.ibb.co/swLFrfH/instant-Automated-pic.png"
                },
                {
                    heading: "Unique White-Label Branding",
                    description: "Let your e-lab report shine with your unique colours, logos and formatting style. Our software, your brand.",
                    featureImgLink: "https://i.ibb.co/qJ6WJKp/while-Label-pic.png"
                },
                {
                    heading: "Multiple Report Templates",
                    description: "to exactly match your needs",
                    featureImgLink: "https://i.ibb.co/X4nGwKZ/multiple-Report-pic.png"
                },
                {
                    heading: "Budget-friendly",
                    description: "We are value-for-money and global by nature",
                    featureImgLink: "https://i.ibb.co/X4nGwKZ/multiple-Report-pic.png"
                },
            ],
            backgroundImage: solpageBackgroundImage,
            mainHeading2: "Why Choose Us?",
            reasonsToChooseUs: [
                { reasonHeading: "Flexibility", reasonDes: "We listen, understand, show flexibility and deliver!" },
                { reasonHeading: "Solid Review Process", reasonDes: "Triple-review process for content : Before becoming a part of our knowledge bank, our in-house team of researchers & doctors goes through each and every word. Have doubts? We’ll give you the source/reference/citation for any part that you want." },
                { reasonHeading: "Quality Product", reasonDes: "Top-quality and easy-to-integrate Software-as-a-Service (SaaS), with strict policies to ensure data protection and privacy." },
                { reasonHeading: "Online Support", reasonDes: "1 month complementary marketing support, just for you! Just talk to us, and we’ll make you see a whole new world in patient-education." }
            ],
            chooseUsImage: "https://i.ibb.co/52rLnVQ/Group-6807-1.png",
            mainHeading3: "Report Types",
            reportIcon: "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-pdf-whatsapp.png",
            reportTypes: [
                { type: "Advanced", reportDes: "Comprehensive reports for those who want to know the most about their tests and results, with simple explanations for all biomarkers, large visuals, and elaborate tips (causes, symptoms, diet and lifestyle tips relevant for disease profiles)." },
                { type: "Compact", reportDes: "Simple and tabular Smart Reports for those who want to quickly check their visualised results. Customisable and with compact graphs, short tips, minimal text and lesser pages." },
                { type: "Dynamic", reportDes: "Highlight elaborate information for all abnormal results, while normal values are represented in the ‘Compact’ way. It’s the ultimate tool to deliver personalised reports to users and get them to act on their problematic areas." },
                { type: "Covid", reportDes: "QR-code-enabled COVID reports, with self-care tips." },
                { type: "Summary (add-on)", reportDes: "Entire report summarised in a couple of pages, with focus on the out-of-range biomarkers." },
                { type: "Body Summary (add-on)", reportDes: "All test results represented on a digital human body, with their respective profiles and organs." },
                { type: "Trend Report (historical analysis)", reportDes: "Graphical representation of disease progression. We show the patient's medical report data from past to present in a single picture. Helps both patients and doctors to keep track of biomarkers and measure effectiveness of treatments over time." },
                {
                    type: "Smart Reports in other languages",
                    languageDetails: [
                        { name: " Hindi Language", letter: "हिन्दी" },
                        { name: "Arabic Language", letter: "عربى" }
                    ]
                }
            ]
        }
    };
})();
