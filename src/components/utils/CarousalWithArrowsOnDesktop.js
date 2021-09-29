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
    return <React.Fragment>
        <Carousel
            plugins={plugins}
            value={dotIndex} onChange={(index) => setDotIndex(index)}
            slides={
                content.map((props, index) => (
                    <card.type {...card.props} {...props} key={index} />))}
        />
        {(isSmallScreen || dotsOnDeskTop) ? <Dots
            value={dotIndex}
            onChange={(index) => setDotIndex(index)}
            number={maxDots}
            thumbnails={dots}

        /> : ""}
    </React.Fragment>

}


const BlueDot = () => {
    return <div style={{ backgroundColor: "#3cd0ff", borderRadius: "50%", height: "20px", width: "20px" }}>o0hg</div>
}