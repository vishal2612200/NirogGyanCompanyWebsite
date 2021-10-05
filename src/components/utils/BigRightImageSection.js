import React from "react";
import {
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem 0",
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",

        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }
    },
    contentRight: {
        textAlign: "center",
        margin: "auto",
        "& img": {
            maxWidth: "100%",
            height: "auto"
        }
    }
}
));






export default function BigRightImageSection({ contentLeft, image, ...props }) {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} {...props} >
         {contentLeft}
            <ImageBox image={image} />
        </Grid>
    );

}


const ImageBox = ({ image: { imagePath, altText = "logo-default" } }) => {
    const classes = useStyles();

    return <Grid container item direction="column" md={6} className={classes.contentRight} justifyContent="center" alignItems="center">
        <Grid container item justifyContent="center" alignItems="center">
            <img loading="lazy" src={imagePath} alt={altText} width={`calc(${0.9 * 90}%)`} />
        </Grid>
    </Grid>
}
