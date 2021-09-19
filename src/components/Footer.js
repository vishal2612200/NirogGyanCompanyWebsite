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
        padding: "2rem 6rem",
        color: "#fff",
        backgroundColor: "#163B76",

        "&>div": {
            marginBottom: "2rem"
        },
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
    }
}));


export default function Footer({ state: footer }) {
    const classes = useStyles();
    return <Grid container className={classes.root} justifyContent="flex-start" alignItems="stretch">
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
            <img width="83%" src={content.logoImage} alt="logo" />
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

const Block = ({ content, ...props }) => {
    const classes = useStyles();
    return <Grid item className={classes.block} {...props}>
        <Typography variant="h5">
            <Box fontWeight="fontWeightMedium" m={1}>
                {content.heading}
            </Box>
        </Typography>
        <Box style={{ height: ".25rem" }} />
        {content.items.map((link,  index) => <Typography key={index}>
            <Box fontWeight="fontWeightMedium" m={2}>
                {link}
            </Box>
        </Typography>)}
    </Grid>
}

const Block4 = ({ content, ...props }) => {

    return <Grid item {...props}>
        <Typography variant="h5">
            <Box fontWeight="fontWeightMedium" mb={2} mt={1} >
                {content.heading}
            </Box>
        </Typography>
        <Box style={{ height: ".4rem" }} />
        {content.svgitems.map((imagePath, index) => <img key={index} style={{ marginRight: "1rem" }} src={imagePath} alt="logo" />)}
        <Typography variant="h6">{content.copyrightText}</Typography>
    </Grid>
}