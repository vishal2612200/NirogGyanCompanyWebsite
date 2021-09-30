import * as path from "path";

import heroImage from "../blog/static/imgs/hero-image.svg"

import blogHealthLiteracy from "../blog/static/imgs/blog-health-literacy.png"
import blogDoctor from "../blog/static/imgs/blog-doctor.png"




export default (function () {
    return {
        HeroSection: {
            contentLeft: {

                heading: "Blog",
                breadcrumbs: [{ text: "Home", link: "/home" }, { text: "Blog", link: "/blog" }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {
                imagePath: heroImage,
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
        },
        Main: {
            contentLeft: {
                cardsList: [
                    {
                        imagePath: blogHealthLiteracy,
                        date: "Sept 02, 2021",
                        content: {
                            heading: "No Health Literacy? No Health.",
                            description: "To make any major decision in life, vital information is the key, right? ☝ On a visit to the doctor, after walking in and paying the amount, we aren’t really worried about whether we understand the disease or the ailment. …",
                        },
                        readmore: <>Read More &rarr;</>
                    },
                    {
                        imagePath: blogHealthLiteracy,
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
                            imagePath: blogDoctor,
                            date: "Sept 02, 2021",
                            heading: "No Health Literacy? No Health.",
                        },
                        {
                            imagePath: blogDoctor,
                            date: "Sept 02, 2021",
                            heading: "No Health Literacy? No Health.",
                        },
                        {
                            imagePath: blogDoctor,
                            date: "Sept 02, 2021",
                            heading: "No Health Literacy? No Health.",
                        }
                    ]
                },
                categoriesList: {
                    heading: "Categories",
                    cardsList: [
                        {
                            text: "Corporate Business"
                        },
                        {
                            text: "Corporate Business"
                        },
                        {
                            text: "Corporate Business"
                        }
                    ]
                },
                categoriesButtons: {
                    heading: "Categories",
                    cardsList: [
                        { text: "Adventure", key: "1" },
                        { text: "Portfolio", key: "2" },
                        { text: "Digital", key: "3" }, 
                        { text: "Adventure", key: "4" }, 
                        { text: "Portfolio", key: "5" }, 
                        { text: "Digital", key: "6" },],
                },


            }
        },
    };
})();
