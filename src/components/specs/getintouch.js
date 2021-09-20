import * as path from "path";

export default (
    function () {
        return {
            GetInTouch: {

                block1: {
                    imagePath: path.join(process.env.PUBLIC_URL, "static", "about", "get-in-touch-1.svg"),

                },
                block2: {
                    line1: "Get In Touch",
                    line2: "contact@niroggyan.com",
                    line3: "+91-7678277891",
                },
                block3: {
                    imagePath: path.join(process.env.PUBLIC_URL, "static", "about", "get-in-touch-2.svg"),
                }
            }
        }
    })();