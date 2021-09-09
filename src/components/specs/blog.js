import * as path from "path";

export default (function () {
    return {

        HeroSection: {
            info: {
                heading: { line1: "Blog", line2: undefined },
                description: undefined,
                buttons: { services: "", watchVideo: "" },
            },
            imagePath: path.join(process.env.PUBLIC_URL, "blog", "hero-image.png"),
        },
        Main: {
            contentLeft: {
                cardsList: [
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "blog", "blog-health-literacy.png"),
                        date: "Sept 02, 2021",
                        content: {
                            heading: "No Health Literacy? No Health.",
                            description: "To make any major decision in life, vital information is the key, right? ☝ On a visit to the doctor, after walking in and paying the amount, we aren’t really worried about whether we understand the disease or the ailment. …",
                        },
                        readmore: <>Read More &rarr;</>
                    },
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "blog", "blog-health-literacy.png"),
                        date: "Sept 02, 2021",
                        content: {
                            heading: "No Health Literacy? No Health.",
                            description: "To make any major decision in life, vital information is the key, right? ☝ On a visit to the doctor, after walking in and paying the amount, we aren’t really worried about whether we understand the disease or the ailment. …",
                        },
                        readmore: <>Read More &rarr;</>
                    },
                ]
            },
            contentRight: {
                popularPosts:
                {
                    heading: "Popular Posts",
                    cardsList: [
                        {
                            imagePath: path.join(process.env.PUBLIC_URL, "blog", "blog-doctor.png"),
                            date: "Sept 02, 2021",
                            heading: "No Health Literacy? No Health.",
                        }
                    ]
                },
                categoriesList: {
                    heading: "Categories",
                    cardsList: [{ text: "Corporate Business" }]
                },
                categoriesButtons: {
                    heading: "Categories",
                    cardsList: [{ text: "Adventure" }, { text: "Portfolio" }, { text: "Digital" }, { text: "Adventure" }, { text: "Portfolio" }, { text: "Digital" },],
                },


            }
        },
    };
})();
