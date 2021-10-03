import * as path from "path";

import heroImage from "../blog/static/imgs/hero-image.png"

import blogHealthLiteracy from "../blog/static/imgs/blog-health-literacy.png"
import blogDoctor from "../blog/static/imgs/blog-doctor.png"

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
                imagePath: heroImage,
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
        },
        Main: {
            contentLeft: {
                cardsList: [
                    {
                        imagePath: blog1,
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
                        imagePath: blog2,
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
                            imagePath: sideblog1,
                            date: "August 17, 2021",
                            heading: "I’ve got a bone to pick with you!",
                            blogurl: "https://niroggyan.medium.com/ive-got-a-bone-to-pick-with-you-31b62be14d9d"
                        },
                        {
                            imagePath: sideblog2,
                            date: "August 14, 2021",
                            heading: "A Sound Sleep — From A to Zzz",
                            blogurl: "https://niroggyan.medium.com/a-sound-sleep-from-a-to-zzz-5614d76f7623"
                        },
                        {
                            imagePath: sideblog3,
                            date: "June 02, 2021",
                            heading: "The vaccine conundrum.",
                            blogurl: "https://niroggyan.medium.com/the-vaccine-conundrum-afc6d3243770"
                        },
                        {
                            imagePath: sideblog4,
                            date: "Sept 19, 2020",
                            heading: "No Health Literacy? No Health.",
                            blogurl: "https://niroggyan.medium.com/no-health-literacy-no-health-dd708a5e7237"
                        },
                        {
                            imagePath: sideblog5,
                            date: "August 02, 2020",
                            heading: "Healthcare, democratised.",
                            blogurl: "https://niroggyan.medium.com/healthcare-democratised-7f61aa0aced0"
                        },
                        {
                            imagePath: sideblog6,
                            date: "May 29, 2020",
                            heading: "Niroggyan Q&A #1.",
                            blogurl: "https://niroggyan.medium.com/niroggyan-q-a-1-99592ae3c37c"
                        },
                        {
                            imagePath: sideblog7,
                            date: "May 09, 2020",
                            heading: "The Other Epidemic",
                            blogurl: "https://niroggyan.medium.com/the-other-epidemic-bf8d2995bb13"
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
