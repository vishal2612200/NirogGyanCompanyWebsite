import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { makeStyles } from "@material-ui/core/styles";
import { useSmallScreen } from "../customHooks";

const useStyles = makeStyles((theme) => ({
    image: {
        filter: "grayscale(100%)",
        "&:hover": {
            filter: "none"
        }
    }
}))

export default function CarouselInfiniteAutomatic({ logoImages }) {
    const classes = useStyles();
    const isSmallScreen = useSmallScreen();

    return <Carousel
        plugins={[
            'infinite',
            {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: isSmallScreen ? 1 : 4
                }
            },
            {
                resolve: autoplayPlugin,
                options: {
                    interval: 1000,
                }
            },
        ]}
        animationSpeed={1000}
    >
        {logoImages.map(({ imagePath, altText = "logo-default", link }, index) => <a href={link} key={index} ><img loading="lazy" key={index} src={imagePath} alt={altText} width="289" height="131" className={classes.image} /></a>
        )}
    </Carousel>;
}

