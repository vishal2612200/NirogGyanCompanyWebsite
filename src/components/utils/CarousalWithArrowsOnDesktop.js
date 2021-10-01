import React, { useState } from "react";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import Carousel, { slidesToShowPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery, useTheme } from "@material-ui/core"
import Grid from "@material-ui/core/Grid";








export default function CarousalWithArrowsOnDesktop({ card, content, numberOfSlides = 1, dotsOnDeskTop = false }) {
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
                numberOfSlides: parseInt(numberOfSlides),
            }
        },
    ]

    if (!isSmallScreen) {
        plugins.push('arrows');
    }

    const roundedArrowCss = `.BrainhubCarousel__arrows{
                                        border-radius: 50%;
                                        background-color: #163b76;
                                    }`
    return <React.Fragment>
        <style>
            {roundedArrowCss}
        </style>

        <Carousel
            plugins={plugins}
            value={dotIndex} onChange={(index) => setDotIndex(index)}
            slides={
                content.map((props, index) => (
                    <card.type {...card.props} {...props} key={index} />))}
        />
        <Grid item style={{ marginTop: "2rem" }}>

            {(isSmallScreen || dotsOnDeskTop) ? <Dots
                value={dotIndex}
                onChange={(index) => setDotIndex(index)}
                number={maxDots}
                thumbnails={dots}

            /> : ""}
        </Grid>
    </React.Fragment>

}


const BlueDot = () => {
    return <div style={{ backgroundColor: "#163b76", borderRadius: "50%", height: "20px", width: "20px" }}>o0hg</div>
}