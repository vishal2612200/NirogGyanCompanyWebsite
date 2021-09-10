import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "1.5rem",
        color: "#fff",
        backgroundColor: "#163B76",
        "&>div": {
            marginBottom: "2rem"
        }
    },
    heading: {
        paddingBottom: "1rem"
    },
    block: {
        minWidth:"min-content",
        margin: "1rem",
    }
}));

const Block1 = ({ content }) => {
    const classes = useStyles()
    return <Grid item className={classes.block}>
        <Grid item>
            <img src={content.logoImage} alt="logo" />
        </Grid>
        <Grid item>  
            <Typography variant="h6">
                <Box fontWeight="fontWeightMedium" m={1}>
                    {content.copyrightText}
                </Box>
            </Typography>
        </Grid>
    </Grid>
}

const Block = ({ content }) => {
    const classes = useStyles();
    return <Grid item  className={classes.block}>
        <Typography variant="h5">
            <Box fontWeight="fontWeightMedium" m={1}>
                {content.heading}
            </Box>
        </Typography>
        {content.items.map(link => <Typography>
                <Box fontWeight="fontWeightMedium" m={1}>
                    {link}
                </Box>
            </Typography>)}
    </Grid>
}

const Block4 = ({ content }) => {
    const classes = useStyles();

    return <Grid item>
        <Typography variant="h5">
            <Box fontWeight="fontWeightMedium" m={1}>
                {content.heading}
            </Box>
        </Typography>
        {content.items.map(imagePath => <img src={imagePath} alt="logo" />)}
        <Typography variant="h6">{content.copyrightText}</Typography>
    </Grid>
}

export default function Footer({ state: footer }) {
    const classes = useStyles();
    return <Grid container className={classes.root}>
        <Grid item md={1}></Grid>
        <Grid item md={3}>
            <Block1 content={footer.block1} />
        </Grid>
        <Grid item md={2}>
            <Block content={footer.block2} />
        </Grid>
        <Grid item md={3}>
            <Block content={footer.block3} />
        </Grid>
        <Grid item md={2}>
            <Block4 content={footer.block4} />
        </Grid>
        <Grid item md={1}></Grid>
    </Grid>

}
