
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        borderRadius: "10px",
    },

    card: {
        border: "1px solid #B8BBBD",
        marginBottom: "2rem",
        borderRadius: "10px",
    },
    imageBox: {
        verticalAlign: "middle",
        textAlign: "center",
        padding: "20px 0",
        backgroundColor: "#E9F5FF",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",

        "&>img": {
            margin: "auto",
            maxHeight: "100%",
            maxWidth: "auto",

        }
    },
    textBox: {

        "&>*": {
            textAlign: "left",
            fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
            padding: "1rem",
            textWrap: "word-break"
        }
    },
}));

export default function FeatureCard({ image: { imagePath, altText = "logo-default" }, textThin, textBold }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.card}   >
            <Grid container item xs={4} className={classes.imageBox} justifyContent="center" alignItems="center">
                <Grid item >
                    <img loading="lazy" src={imagePath} alt={altText} width="50px" height="50px" />
                </Grid>
            </Grid>
            <Grid item xs={8} className={classes.textBox}>
                    <Box fontWeight="fontWeightLight" m={1}>
                        {textThin}
                    </Box>
                    <Box fontWeight="fontWeightBold" m={1}>
                        {textBold}
                    </Box>
            </Grid>
        </Grid>
    )
}
