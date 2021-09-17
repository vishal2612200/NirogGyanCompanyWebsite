import React from "react";
import Typography from "@material-ui/core/Typography";
import {
    Grid,
    Button,
    IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: "linear-gradient(to right, #52BBE8, #69C3EB, #A3D8F1, #E1EFF8)",
        padding: "0.5rem",
        minHeight: "75vh"
    },
    imageBox: {
        minHeight: "70vh",
        backgroundSize: "contain", backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        [theme.breakpoints.down('md')]: {
            minHeight: "50vh",

        }
    },
    contentRight: {
        textAlign: "center",
        "& >img": {
            maxWidth: "100%",
            maxHeight: "100%"
        }
    }
}));


export default function BigRightImageSection({ contentLeft, image }) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} justifyContent="space-around">
            <Grid item md={6}>
                {contentLeft}
            </Grid>
            <Grid item md={6}>
                <ImageBox image={image} />
            </Grid>
        </Grid>
    )

}




const ImageBox = ({ image: { imagePath, altText = "logo" } }) => {
    const classes = useStyles();

    return <Grid container item justifyContent="flex-start" className={classes.imageBox}>
        <img src={imagePath} alt={altText} width="100%" />
    </Grid>
}
