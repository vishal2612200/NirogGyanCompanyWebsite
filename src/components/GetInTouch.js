import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/open-sans";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        background: "#3567D6",
        "&> *": {
            // padding: "0.5rem"
        },
    },
    block2: {
        flexGrow: 1,
        textAlign: "left",
        color: "#fff !important",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            margin: "auto auto",
        }
    },
    image: {
        maxWidth: "85%",
        // maxHeight: "auto"
    },

}));





export default function GetInTouch({ state: mailingList }) {
    const classes = useStyles();
    return <Grid container justifyContent="flex-end" alignItems="stretch" className={classes.root}>

        <Block content={mailingList.block1} />
        <Block2 content={mailingList.block2} />
        <Block content={mailingList.block3}/>
    </Grid>

}






const Block = ({ content }) => {
    const classes = useStyles()
    return <Grid container item md={4} className={classes.block} alignItems="center" justifyContent="center">
        <Grid item style={{textAlign:"right"}}>
            <img src={content.imagePath} className={classes.image} alt="" />
        </Grid>
    </Grid>

}

const Block2 = ({ content }) => {
    const classes = useStyles()
    return <Grid item md={4} className={classes.block2} >
            <Typography variant="paragraph" style={{color:"#fff"}}>
                <Box fontWeight="fontWeightBold" m={1}>
                    {content.line1}
                </Box>
            </Typography>
            <Typography variant="h4" style={{color:"#fff"}}>
                <Box fontWeight="fontWeightBold"  m={1}>
                    {content.line2}
                </Box>
            </Typography>
            <Typography variant="h4" className={classes.block2}>
                {content.line3}
            </Typography>
    </Grid>

}