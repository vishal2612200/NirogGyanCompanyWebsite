import React from "react";
import "./solutions.css"
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
import { Helmet } from "react-helmet";

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import ButtonBase from '@mui/material/ButtonBase';


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


const SolutionJsx = ({ state: pageData }) => {

    const classes = useStyles();
    console.log("pageData \n", pageData)

    console.log("resolution", window.innerWidth)

    return (
        <div>

            <Helmet>
                <title>Solution Page</title>
                <meta name="description" content="sol page description" />
                <link rel="canonical" href="https://www.niroggyan.com/solutions" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>

            {/* Introduction Component Starts */}
            <div>
                <Paper sx={{ boxShadow: 0, p: 2, margin: 'auto', maxWidth: '100%' }} id="introComponentCss">
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2} id="intro-contents-resol-css">
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        <span id="intro-title-css">{pageData.introduction.title}</span>
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {pageData.introduction.introPoints.map(each => (
                                            <div style={{ paddingBottom: "10px" }}>
                                                <svg style={{ margin: "0px 15px 4px 0px" }} width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.6" width="6" height="4" fill="black" />
                                                </svg>
                                                <span id="intro-points-css">{each}</span>
                                            </div>
                                        ))}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <div>
                                            {pageData.introduction.introSubHeadings.map(each => (
                                                <div id="intro-sub-heading-css">{each}</div>
                                            ))}
                                        </div>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item id="intro-image-resol-css">
                            <Img alt="complex" src={pageData.introduction.introImage} />
                        </Grid>
                    </Grid>
                </Paper>
            </div>

            {/* Introduction Component Ends */}


            {/* Redirect Links Component Starts */}

            <div style={{ display: "flex", justifyContent: "center" }}>
                {pageData.redirectLinks.map(each => (
                    <BootstrapButton disableRipple id="redirect-button-css" variant="contained">{each.linkName}</BootstrapButton>
                ))}
            </div>

            {/* Redirect Links Component Ends */}


            {/* Features of Niroggyan Component Stars */}

            <div id="sol-page-heading-css">
                {pageData.mainHeading}
            </div>
            <span id="sol-page-info-text-css">{pageData.infoText}</span>

            <div className={classes.root2}
                style={{ backgroundImage: `url(${pageData.backgroundImage})` }}>
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container style={{ display: "flex", justifyContent: "center" }}>
                            {pageData.featuresList.map(each => (
                                <Grid item xs={window.innerWidth <= 500 ? 9 : 3} className={`${classes.serviceCard}`}>
                                    <Grid item className={`${classes.serviceCard}__logo-box`} style={{ marginBottom: "1rem" }}>
                                        <img
                                            loading="lazy"
                                            src={each.featureImgLink}
                                            alt={each.heading}
                                            width={
                                                each.heading === "Unique White-Label Branding"
                                                    ?
                                                    "40px"
                                                    :
                                                    each.heading === "Simple Content, best Design"
                                                        ?
                                                        "65px"
                                                        :
                                                        "60px"
                                            }
                                            height="60px"
                                        />
                                        <Typography variant="h5">{each.heading}</Typography>
                                    </Grid>
                                    <Grid item className={`${classes.serviceCard}__content`}>
                                        <Typography variant="body1" color="textSecondary">{each.description}</Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>

            {/* Features of Niroggyan Component Ends */}


            {/* Why Choose us? Component Stars */}

            <div>
                <Paper sx={{ boxShadow: 0, p: 2, margin: 'auto', maxWidth: '100%' }} id="whyChooseUs-background-css">

                    <Grid container spacing={2}>

                        <Grid item sm container>
                            <Grid item xs container direction="column" spacing={2} id="intro-contents-resol-css">
                                <Grid item xs={window.innerWidth <= 600 ? "" : 11}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        <span id="whyChooseUs-heading-css">{pageData.mainHeading2}</span>
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>

                                        {pageData.reasonsToChooseUs.map((each, idx) => (
                                            <div style={{ display: "flex" }}>
                                                <div id="whyChooseUs-numbers-css">{idx + 1 + ")"}</div>
                                                <div key={idx} id="whyChooseUs-reason-css">
                                                    {each.reasonDes}
                                                </div>
                                            </div>
                                        ))}

                                    </Typography>

                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            id="intro-image-resol-css"
                        >
                            <Img id="whyChooseUs-image-css" src={pageData.chooseUsImage} />
                        </Grid>
                    </Grid>
                </Paper>
            </div>

            {/* Why Choose us? Component Ends */}


            {/* Report Types Component Stars */}

            <div
                id="report-type-heading-css"
            >
                {pageData.mainHeading3}
            </div>

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

            {/* Report Types Component Ends */}

        </div>
    )
}

export default SolutionJsx
