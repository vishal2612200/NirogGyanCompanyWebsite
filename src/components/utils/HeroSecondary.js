import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    title: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        fontWeight: "700",
        color: "#fff",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }
    },
    contentLeft: {
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        padding: "2rem",
        paddingRight: "5rem",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        }
    },
    text: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            padding: "1rem"
        }
    },
    contentRight: {
        alignItems: "flex-end",
        verticalAlign: "middle",
        padding: "2rem 2rem 0 0",
        "& >img": {
            maxWidth: "100%",
            maxHeight: "auto"
        }
    },
    breadcrumbs: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        }
    }
}));


export default function HeroSecondary({ state: heroSection }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} justifyContent="space-around"
            style={{ backgroundImage: heroSection.linearGradient }}>
            <ContentLeft content={heroSection.contentLeft} />
            <ContentRight content={heroSection.contentRight} />
        </Grid>
    )

}


const ContentLeft = ({ content }) => {
    const classes = useStyles();
    return <Grid container item md={6} direction="column" className={classes.contentLeft} style={

        { backgroundImage: `url(${content.backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }}>

        <Grid container item md={8} direction="column">
            <Grid item>
                <Typography
                    variant="h2"
                    style={{ fontSize: "2.5rem" }}
                    className={classes.title}>
                    {content.heading}
                </Typography>
            </Grid>
            <Grid container item className={classes.breadcrumbs}>
                <Breadcrumbs separator={<Typography
                    variant="h6"
                    style={{ color: "#fff" }}
                    className={classes.title}>
                    ›
                </Typography>} aria-label="breadcrumb">
                    {
                        content.breadcrumbs.map(({ text, link }, index) => <Link color="inherit" href={link} key={index}>
                            <Typography
                                variant="h6"
                                style={{ fontSize: "1rem" }}
                                className={classes.title}>
                                {text}
                            </Typography>
                        </Link>)
                    }
                </Breadcrumbs>
            </Grid>
        </Grid>
    </Grid>
}



const ContentRight = ({ content }) => {
    const classes = useStyles();
    const { imagePath, altText = "logo-default" } = content.image;
    return <Grid item md={6} className={classes.contentRight} >
        <img loading="lazy" src={imagePath} alt={altText} />
    </Grid>
}
