const getInTouch1 = "https://niroggyan.s3.ap-south-1.amazonaws.com/getintouch/static/imgs/get-in-touch-1.svg"
const getInTouch2 = "https://niroggyan.s3.ap-south-1.amazonaws.com/getintouch/static/imgs/get-in-touch-2.svg"


export default (
    function () {
        return {
            GetInTouch: {

                block1: {
                    imagePath:getInTouch1,

                },
                block2: {
                    line1: "Get In Touch",
                    line2: "contact@niroggyan.com",
                    line3: "+91-7678277891",
                },
                block3: {
                    imagePath:getInTouch2,
                }
            }
        }
    })();