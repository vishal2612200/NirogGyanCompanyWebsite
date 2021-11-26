import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem 6rem 0rem 6rem",

        color: "#fff",
        backgroundColor: "#163B76",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            justifyContent: "center",
        }
    },
    heading: {
        paddingBottom: "1rem"
    },
    block: {
        minWidth: "min-content",
    },

    container: {
        marginRight: "2rem"
    },
    inActiveNavItemsStyling: {
        textDecoration: "none",
        fontSize: "1.2rem",
        color: "#fff",
        textAlign: "left",
        '&:hover': {
            color: "#fff",
            textDecoration: "underline",
        },
    },
    activeNavItemsStyling: {
        fontSize: "1.2rem",
        textDecoration: "none",
        textAlign: "left",
        color: "#fff",

    },
    icons: {
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center"
        }
    }
}));


export default function Footer({ state: footer }) {
    const classes = useStyles();
    return <Grid container className={classes.root} justifyContent="flex-start" alignItems="stretch" >
        <Block1 content={footer.block1} md={4} />
        <Block content={footer.block2} md={2} />
        <Block content={footer.block3} md={3} />
        <Block4 content={footer.block4} md={3} />
    </Grid>

}


const Block1 = ({ content, ...props }) => {
    const classes = useStyles()
    return <Grid item className={classes.block} {...props}>
        <Grid item>
            <img loading="lazy" width="83%" src={content.logoImage} alt="logo" />
        </Grid>
        <Grid item>
            <Typography variant="h6" component="div">
                <Box fontWeight="fontWeightMedium" m={1} style={{ fontSize: "1rem" }}>
                    {content.copyrightText.map((item, index) => <Box key={index}>{item}</Box>)}
                </Box>
            </Typography>
        </Grid>
    </Grid>
}

const Block = ({ content, ...props }) => {
    const classes = useStyles();
    return <Grid container item className={classes.block} {...props} direction="column">
        <Grid item style={{ paddingBottom: "1rem" }}>
            <Typography variant="h5">
                {content.heading}
            </Typography>
        </Grid>
        <Grid container item direction="column">

            {content.items.map(({ link, text }, index) =>
                <Grid key={index} item style={{ marginBottom: "1rem" }}>
                    <NavLink exact to={link} key={index}
                        className={isActive =>
                            isActive ? classes.activeNavItemsStyling : classes.inActiveNavItemsStyling
                        }>
                        {text}
                    </NavLink>
                </Grid>
            )}
        </Grid>
    </Grid >
}

const Block4 = ({ content, ...props }) => {
    const classes = useStyles()
    return <Grid container item className={classes.block4} {...props} direction="column">
        <Grid item style={{ paddingBottom: "1rem" }}>
            <Typography variant="h5">
                {content.heading}
            </Typography>
        </Grid>
        <Grid container item direction="row" className={classes.icons} >
            {content.images.map(
                ({ imagePath, altText = "logo-default", link }, index) => <Grid item key={index} >
                    <a key={index} href={link} rel="noreferrer" target="_blank">
                        <img loading="lazy" src={imagePath} alt={altText} />
                    </a>
                </Grid>)}
        </Grid>
    </Grid >
}
