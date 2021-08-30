import React from "react";
import Typography from "@material-ui/core/Typography";
import {
    Grid,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HeadingWithText } from "./utils/headingWithText"
import * as path from "path";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        wordWrap: "break-word",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontWeight: "700",
    },
    text: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",
    },
    watchVideoButton: {
        backgroundColor: "transparent",
        textTransform: "none",
        "&:hover": { backgroundColor: "transparent" },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    feature: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontSize: "2rem",
        border: "1px solid #B8BBBD",
        "&__image-box": {
            backgroundColor: "#E9F5FF",
            padding: "1rem 3rem"
        }
    },
    "&__content": {
    }
}
));


const Feature = ({ imgPath, name }) => {
    const classes = useStyles();

    return (
        <Grid container item direction="column" sm={6}>
            <Grid item sm={12} >
                <img src={imgPath} alt="feature" />
            </Grid>
            <Grid item sm={12}>
                <Typography variant="h6" >
                    {name}
                </Typography>
            </Grid>
        </Grid>
    )
}


export default function SimpleContainer() {

    const classes = useStyles();

    const features = useFeatures();


    return (
        <Grid container spacing={2}>
            <Grid container item direction="column" sm={12} md={6}>
                <Grid item xs={12}>
                    <HeadingWithText
                        heading="Believe what you see"
                        content="Checkout our SmartReports below and know the difference" />

                    <Grid container item xs={12} spacing={2} flexWrap="wrap">
                        {features}
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                <img src={path.join(process.env.PUBLIC_URL, "/report/report-big-report.png")} alt="hero" />
            </Grid>
        </Grid>
    );
}

function useFeatures() {
    return [
        {
            imgPath: path.join(process.env.PUBLIC_URL, "/report/report-vitamin.png"),
            name: "Vitamin"
        },

        {
            imgPath: path.join(process.env.PUBLIC_URL, "/report/report-kidney.png"),
            name: "Kidney"
        },
        {
            imgPath: path.join(process.env.PUBLIC_URL, "/report/report-electrolyte.png"),
            name: "Electrolyte"
        },
        {
            imgPath: path.join(process.env.PUBLIC_URL, "/report/report-diabetes.png"),
            name: "Diabetes"
        }
    ].map(({ imgPath, name }, index) => (<Feature {...{ imgPath, name }} key={index} />));
}

