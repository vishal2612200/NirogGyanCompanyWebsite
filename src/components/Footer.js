import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1rem",
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
    return <Grid container item direction="column" justifyContent="flex-start" md={3} className={classes.block}>
        <Grid item>
            <img src={content.logoImage} alt="logo" />
        </Grid>
        <Grid item>  
            <Typography variant="h6">
                {content.copyrightText}
            </Typography>
        </Grid>
    </Grid>
}

const Block = ({ content }) => {
    const classes = useStyles();
    return <Grid item md={3} className={classes.block}>
        <Typography
            variant="h4"
            className={classes.heading}>
            {content.heading}
        </Typography>
        {content.items.map(link => <Typography variant="h6">{link}</Typography>)}
    </Grid>
}

const Block4 = ({ content }) => {
    const classes = useStyles();

    return <Grid item md={3}>
        <Typography
            variant="h4"
            className={classes.heading}>
            {content.heading}
        </Typography>
        {content.items.map(imagePath => <img src={imagePath} alt="logo" />)}
        <Typography variant="h6">{content.copyrightText}</Typography>
    </Grid>
}

export default function Footer({ state: footer }) {
    const classes = useStyles();
    return <Grid container justifyContent="space-evenly" alignItems="stretch" className={classes.root}>
        <Block1 content={footer.block1} />
        <Block content={footer.block2} />
        <Block content={footer.block3} />
        <Block4 content={footer.block4} />
    </Grid>

}