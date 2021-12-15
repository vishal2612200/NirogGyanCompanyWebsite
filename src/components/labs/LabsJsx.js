import React, { useEffect } from "react";
import "./labs.css"
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import Container from '@material-ui/core/Container';
import "@fontsource/open-sans";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import ButtonBase from '@mui/material/ButtonBase';
import { useHistory } from "react-router-dom";


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


// custom styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },
    root2: {
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },
    header: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontWeight: "700",
        "&>*": { marginBottom: "1rem" },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        }
    },
    contentLeft: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        borderRadius: "10px",
    },
    serviceCard: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        borderRadius: "20px",
        alignContent: "center",
        border: "1px solid #B8BBBD",
        margin: "2rem",
        boxShadow: "39px 11px 83px -53px #B8BBBD",
        "&__logo-box": {
            textAlign: "center",
            textWrap: "word-break",
            padding: "1rem"
        },
        "&__heading": {
            textAlign: "center",
        },
        "&__content": {
            padding: "1rem",
            textAlign: "center",
        }
    },
    paperContainer: {
        backgroundImage: `url(${"https://i.ibb.co/52rLnVQ/Group-6807-1.png"})`,
        innerHeight: "100%"
    }
})
);

// custom button css
const BootstrapButton = styled(Button)({
    textTransform: 'none',
});


//let solpageBackgroundImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-background.png"

// for material ui
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const LabsJsx = ({ state: pageData }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToTop()
    }, [])

    let history = useHistory()
    const classes = useStyles();
    console.log("pageData \n", pageData)

    console.log("resolution", window.innerWidth)

    return (
        <div>


            {/* How it works Component Starts */}
            <div>
                <Paper sx={{ boxShadow: 0, p: 2, margin: 'auto', maxWidth: '100%' }} id="lab-introComponentCss">
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2} id="lab-intro-contents-resol-css">
                                <Grid item>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        <span id="lab-intro-title-css">{pageData.mainHeading}</span>
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {pageData.howItWorksPoints.map(each => (
                                            <div style={{ paddingBottom: "10px" }}>
                                                <svg style={{ margin: "0px 15px 4px 0px" }} width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.6" width="6" height="4" fill="black" />
                                                </svg>
                                                <span id="intro-points-css">{each}</span>
                                            </div>
                                        ))}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>

                                    <img loading="lazy"
                                        style={{ height: "200px", width: "200px" }}
                                        src={pageData.howItWorksIcon} />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>
                                    <BootstrapButton
                                    onClick={() => window.open(`${pageData.howItWorksLink}`, "_blank")}
                                        disableRipple id="redirect-button-css" variant="contained">
                                        <span>Explore More</span>
                                        <span style={{ marginLeft: "5px" }}><i className="fas fa-arrow-right"></i></span>
                                    </BootstrapButton>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </Paper>
            </div>

            {/* How it works Component Ends */}


            {/* A Game Changer Component Stars */}

            <div
                id="lab-report-type-heading-css"
            >
                {pageData.mainHeading2}
            </div>

            <span id="lab-sol-page-info-text-css">{pageData.heading2InfoText1}</span>

            <div className={classes.root2}
                style={{ backgroundImage: `url(${pageData.backgroundImage})` }}>

                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container style={{ display: "flex", justifyContent: "center" }}>
                            {pageData.reportTypes.map(each => (
                                <Grid item xs={window.innerWidth <= 500 ? 9 : 3} className={`${classes.serviceCard}`}>
                                    <Grid item className={`${classes.serviceCard}__logo-box`} style={{ marginBottom: "1rem" }}>
                                        <div>
                                            <img loading="lazy" src={pageData.reportIcon} alt="CorporateOfferings" width="60px" height="60px" />
                                        </div>
                                        <Typography variant="h5">{each.type}</Typography>
                                    </Grid>
                                    <Grid item className={`${classes.serviceCard}__content`}>
                                        <Typography variant="body1" color="textSecondary">{
                                            each.type === "Smart Reports in other languages"
                                                ?
                                                each.languageDetails.map(every => (
                                                    <span>
                                                        <ul class="fa-ul">
                                                            <li style={{ display: "flex" }}>
                                                                <Avatar sx={{ bgcolor: deepPurple[500] }} style={{ padding: "5px" }}>{every.letter}</Avatar>
                                                                <div style={{ margin: "12px 0px 0px 5px" }}>{every.name}</div>
                                                            </li>
                                                        </ul>
                                                    </span>

                                                ))
                                                :
                                                each.reportDes
                                        }</Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>


            <div>
                <Paper sx={{ boxShadow: 0, p: 2, margin: 'auto', maxWidth: '100%' }} id="lab-introComponentCss">
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2} id="intro-contents-resol-css">
                                <Grid item>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        <span id="intro-title-css">{pageData.heading2InfoTextHeader}</span>
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>

                                        <div style={{ paddingBottom: "10px" }}>
                                            <svg style={{ margin: "0px 15px 4px 0px" }} width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.6" width="6" height="4" fill="black" />
                                            </svg>
                                            <span id="intro-points-css">{pageData.heading2InfoText2}</span>
                                        </div>

                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>

                                    <img loading="lazy"
                                        style={{ height: "200px", width: "160px" }}
                                        src={pageData.brochureImage} />
                                </div>
                                <div
                                    style={{
                                        marginTop: "12px",
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>
                                    <BootstrapButton
                                    onClick={() => window.open(`${pageData.brochureLink}`, "_blank")}
                                        disableRipple id="redirect-button-css" variant="contained">
                                        <span>Explore More</span>
                                        <span style={{ marginLeft: "5px" }}><i className="fas fa-arrow-right"></i></span>
                                    </BootstrapButton>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </Paper>
            </div>

            {/* A Game Changer Component Ends */}

        </div>
    )
}

export default LabsJsx
