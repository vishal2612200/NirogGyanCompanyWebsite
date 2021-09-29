import React from "react";
import {
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0.5rem",
        minHeight: "75vh"
    },
    imageBox: {
        backgroundSize: "contain", backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
    },
    contentRight: {
        textAlign: "center",
        "& >img": {
            maxWidth: "100%",
            maxHeight: "100%"
        }
    }
}));


export default function BigRightImageSection({ contentLeft, image, ...props }) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} justifyContent="space-evenly" {...props} >
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
