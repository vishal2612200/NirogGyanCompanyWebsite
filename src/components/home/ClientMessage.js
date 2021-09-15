import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from '@material-ui/core/Box';
import HeadingWithText from "../utils/HeadingWithText"

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    },
    headerContainer: {
        textAlign: "center",

    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "15px",
        textAlign: "center",
        alignItems: "center",
        padding: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
        width: "90%",

        marginTop: "3%",
        marginLeft: "3%",
        marginBottom: "5%"
    },
    message: {
        fontSize: "1rem",
        "&::before": {
            content: "open-quote",
            fontSize: "4rem"
        },
        "&::after": {
            content: "close-quote",
            fontSize: "4rem",
            transform: "translate(10px, 10px)"
        },
        paddingBottom: "1rem"
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}

));





export default function ClientMessage({ state: clientMessage }) {

    const classes = useStyles();
    return <Grid container className={classes.root} style={{ backgroundImage: `url(${clientMessage.backgroundImage})`, paddingTop: "2rem" }} >
        <HeadingWithText content={clientMessage.header} />

        <Grid container item md={8} style={{ marginTop:"-3rem"}}>

            <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={false}>
                <Grid container justifyContent="center" className={classes.card} >
                    <Grid item>
                        <Typography variant="h6" color="textSecondary" className={classes.message}>
                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada,
                                et viverra ex ultrices. Aliquam quis sodales massa,
                                ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.</i>
                        </Typography>

                    </Grid>

                    <Grid item>
                        <img src="https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
                            alt="client" style={{ height: "150px", width: "150px", borderRadius: "50%", border: "1px dashed grey" }} />

                        <Typography variant="h5">
                            <Box fontWeight="fontWeightBold" m={1}>
                                Vishal Sharma
                            </Box>
                            <Box color="textSecondary" m={1}>
                                Niroggyan
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item justifyContent="space-around" alignItems="center" className={classes.card} >
                    <Grid item>
                        <Typography variant="h6" color="textSecondary" className={classes.message}>
                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada,
                                et viverra ex ultrices. Aliquam quis sodales massa,
                                ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.</i>
                        </Typography>

                    </Grid>

                    <Grid item>
                        <img src="https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
                            alt="client" style={{ height: "150px", width: "150px", borderRadius: "50%" }} />
                        <Typography variant="h5">
                            <Box fontWeight="fontWeightBold" m={1}>
                                Vishal Sharma
                            </Box>
                            <Box color="textSecondary" m={1}>
                                Niroggyan
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Carousel>
        </Grid>
        <Grid item></Grid>
    </Grid>
}