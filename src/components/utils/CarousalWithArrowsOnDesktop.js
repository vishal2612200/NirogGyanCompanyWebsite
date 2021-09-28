import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import Carousel, { slidesToShowPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery, useTheme } from "@material-ui/core"
import HeadingWithText from "./HeadingWithText"

// const useStyles = makeStyles((theme) => ({
//     root: {
//         justifyContent: "center",
//         fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
//         paddingBottom: theme.spacing(4),
//     },
//     headerContainer: {
//         textAlign: "center",

//     },
//     card: {
//         backgroundColor: "#fff",
//         borderRadius: "15px",
//         textAlign: "center",
//         alignItems: "center",
//         padding: "2rem",
//         boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
//         width: "90%",

//         marginTop: "3%",
//         marginLeft: "3%",
//         marginBottom: "5%"
//     },
//     message: {
//         fontSize: "1rem",
//         "&::before": {
//             content: "open-quote",
//             fontSize: "2rem",
//             lineHeight: 0,
//             verticalAlign: "middle",

//         },
//         "&::after": {
//             content: "close-quote",
//             paddingTop: "0.5rem",
//             fontSize: "2rem",
//             lineHeight: 0,
//             verticalAlign: "middle",
//         },
//         paddingBottom: "1rem"
//     },
//     large: {
//         width: theme.spacing(20),
//         height: theme.spacing(20),
//     },
// }

// ));






export default function CarousalWithArrowsOnDesktop({ card, content, numberOfSlides = 1 }) {
    const [dotIndex, setDotIndex] = useState(0);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    let dots = [];
    for (let i = 0; i < content.length; i++) {
        dots.push(<BlueDot />)
    }

    const maxDots = Math.min(4, content.length);
    let plugins = [
        'infinite',
        {
            resolve: slidesToShowPlugin,
            options: {
                numberOfSlides:parseInt(numberOfSlides),
            }
        },
    ]

    if (!isSmallScreen) {
        plugins.push('arrows');
    }
    return <React.Fragment>
        <Carousel
            plugins={plugins}
            value={dotIndex} onChange={(index) => setDotIndex(index)}
            slides={
                content.map((props, index) => (
                    <card.type {...card.props} {...props} key={index} />))}
        />
        <Dots
            value={dotIndex}
            onChange={(index) => setDotIndex(index)}
            number={maxDots}
            thumbnails={dots}

        />
    </React.Fragment>

}


const BlueDot = () => {
    return <div style={{ backgroundColor: "#3cd0ff", borderRadius: "50%", height: "20px", width: "20px" }}>o0hg</div>
}