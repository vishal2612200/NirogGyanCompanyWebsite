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
                image: { imagePath: heroImage, altText: "heroImage" },
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
        },
        Main: {
            contentLeft: {
                cardsList: [
                    {
                        image: { imagePath: blogHealthLiteracy , altText:"fhgj"},
                        date: "Sept 02, 2021",
                        content: {
                            heading: "No Health Literacy? No Health.",
                            description: "To make any major decision in life, vital information is the key, right? ☝ On a visit to the doctor, after walking in and paying the amount, we aren’t really worried about whether we understand the disease or the ailment. …",
                        },
                        readmore: <>Read More &rarr;</>
                    },
                    {
                        image: { imagePath: blogHealthLiteracy, altText:" fdghj" },
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
                            image: { imagePath: blogDoctor, altText: "doctor" },
                            date: "Sept 02, 2021",
                            heading: "No Health Literacy? No Health.",
                        },
                        {
                            image: { imagePath: blogDoctor, altText: "doctor" },
                            date: "Sept 02, 2021",
                            heading: "No Health Literacy? No Health.",
                        },
                        {
                            image: { imagePath: blogDoctor, altText: "doctor" },
                            date: "Sept 02, 2021",
                            heading: "No Health Literacy? No Health.",
                        }
                    ]
                }

            }
        },
    };
})();
