import * as path from "path";

import heroImage from "../blog/static/imgs/hero-image.svg"


import blog1 from "../blog/static/imgs/blog-1.png"
import blog2 from "../blog/static/imgs/blog-2.png"

import sideblog1 from "../blog/static/imgs/side-blog-1.jpeg"
import sideblog2 from "../blog/static/imgs/side-blog-2.png"
import sideblog3 from "../blog/static/imgs/side-blog-3.gif"
import sideblog4 from "../blog/static/imgs/side-blog-4.jpeg"
import sideblog5 from "../blog/static/imgs/side-blog-5.png"
import sideblog6 from "../blog/static/imgs/side-blog-6.jpeg"
import sideblog7 from "../blog/static/imgs/side-blog-7.gif"



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
                        image: { imagePath: blog1, altText: "fhgj" },
                        date: "May 24, 2020",
                        content: {
                            heading: "A Tale of Two Reports",
                            description: "Let’s imagine the medical tale of two people.\
                                          Our lead characters, A and B—who we are going to call Ay and Bee,\
                                          respectively, for storytelling reasons—are both middle-aged men who\
                                          are experiencing early signs of type-2 diabetes. Ay or Bee don’t spend\
                                          any of their time exercising or being active in general.…",
                        },
                        readmore: <>Read More &rarr;</>,
                        blogurl: "https://niroggyan.medium.com/a-tale-of-two-reports-6c3e2fd9d600"
                    },
                    {
                        image: { imagePath: blog2, altText: " fdghj" },
                        date: "July 06, 2020",
                        content: {
                            heading: "Niroggyan Case Study — Corporate",
                            description: "Recently at Niroggyan, we worked with Getactive — a workforce fitness provider.\
                                          We assisted them in providing health reports for a complete health checkup they\
                                          had been conducting for IQVIA — one of the largest health data science and \
                                          contract research organisations in the world. …",
                        },
                        readmore: <>Read More &rarr;</>,
                        blogurl: "https://niroggyan.medium.com/niroggyan-case-study-corporate-dbbac642f68d"
                    },
                ]
            },
            contentRight: {
                popularPosts:
                {
                    heading: "Popular Posts",
                    cardsList: [
                        {
                            image: { imagePath: sideblog1, altText: "doctor" },
                            date: "August 17, 2021",
                            heading: "I’ve got a bone to pick with you!",
                            blogurl: "https://niroggyan.medium.com/ive-got-a-bone-to-pick-with-you-31b62be14d9d"
                        },
                        {
                            image: { imagePath: sideblog2, altText: "doctor" },
                            date: "August 14, 2021",
                            heading: "A Sound Sleep — From A to Zzz",
                            blogurl: "https://niroggyan.medium.com/a-sound-sleep-from-a-to-zzz-5614d76f7623"
                        },
                        {
                            image: { imagePath: sideblog3, altText: "doctor" },
                            date: "June 02, 2021",
                            heading: "The vaccine conundrum.",
                            blogurl: "https://niroggyan.medium.com/the-vaccine-conundrum-afc6d3243770"
                        },
                        {
                            image: { imagePath: sideblog4, altText: "doctor" },
                            date: "Sept 19, 2020",
                            heading: "No Health Literacy? No Health.",
                            blogurl: "https://niroggyan.medium.com/no-health-literacy-no-health-dd708a5e7237"
                        },
                        {
                            image: { imagePath: sideblog5, altText: "doctor" },
                            date: "August 02, 2020",
                            heading: "Healthcare, democratised.",
                            blogurl: "https://niroggyan.medium.com/healthcare-democratised-7f61aa0aced0"
                        },
                        {
                            image: { imagePath: sideblog6, altText: "doctor" },
                            date: "May 29, 2020",
                            heading: "Niroggyan Q&A #1.",
                            blogurl: "https://niroggyan.medium.com/niroggyan-q-a-1-99592ae3c37c"
                        },
                        {
                            image: { imagePath: sideblog7, altText: "doctor" },
                            date: "May 09, 2020",
                            heading: "The Other Epidemic",
                            blogurl: "https://niroggyan.medium.com/the-other-epidemic-bf8d2995bb13"
                        }

                    ]
                }

            }
        },
    };
})();
