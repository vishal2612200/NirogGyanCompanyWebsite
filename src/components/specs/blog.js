import * as path from "path";

export default (function () {
    return {
        HeroSection: {
            contentLeft: {

                heading: "Blog",
                breadcrumbs: [{ text: "Home", link: "/home" }, { text: "About", link: "/about" }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {
                imagePath: path.join(process.env.PUBLIC_URL, "blog", "hero-image.png"),
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
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
                    cardsList: [{ text: "Adventure", key: "1" }, { text: "Portfolio", key: "2" }, { text: "Digital", key: "3" }, { text: "Adventure", key: "4" }, { text: "Portfolio", key: "5" }, { text: "Digital", key: "6" },],
                },


            }
        },
    };
})();
