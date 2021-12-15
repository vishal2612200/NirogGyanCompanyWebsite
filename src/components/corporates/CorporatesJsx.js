import React, {useEffect} from "react";
import "./corporates.css"
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


const CorporatesJsx = ({ state: pageData }) => {

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

            {/* Introduction Component Starts */}
            <div>
                <Paper sx={{ boxShadow: 0, p: 2, margin: 'auto', maxWidth: '100%' }} id="corporates-introComponentCss">
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
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Img style={{ width: "380px", height: "350px" }} alt="complex" src={pageData.introduction.introImage} />
                        </Grid>
                    </Grid>
                </Paper>
            </div>

            {/* Introduction Component Ends */}


            {/* What we offer starts */}

            <div
                id="corporates-report-type-heading-css"
            >
                {pageData.mainHeading}
            </div>

            <div>
                <Paper sx={{ boxShadow: 0, p: 2, margin: 'auto', maxWidth: '100%' }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2} id="intro-contents-resol-css">
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        {pageData.featuresList.map(each => (
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

            {/* What we offer Ends */}


            {/* Niro Advantage Component Stars */}

            <div id="corporates-page-heading-css">
                {pageData.mainHeading2}
            </div>            

            <span id="corporates-page-info-text-css">{pageData.mainHeading2InfoText}</span>

            <div className={classes.root2}
                style={{ backgroundImage: `url(${pageData.backgroundImage})` }}>
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container style={{ display: "flex", justifyContent: "center" }}>
                            {pageData.niroAdvantages.map(each => (
                                <Grid item xs={window.innerWidth <= 500 ? 9 : 3} className={`${classes.serviceCard}`}>
                                    <Grid item className={`${classes.serviceCard}__logo-box`} style={{ marginBottom: "1rem" }}>
                                        <img
                                            loading="lazy"
                                            src="https://i.ibb.co/swLFrfH/instant-Automated-pic.png"
                                            alt={each.advantageType}
                                            width="60px"
                                            height="60px"
                                        />
                                        <Typography variant="h5">{each.advantageType}</Typography>
                                    </Grid>
                                    <Grid item className={`${classes.serviceCard}__content`}>
                                        <Typography variant="body1" color="textSecondary">{each.advantageDes}</Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>

            {/* Niro Advantage Component Ends */}
        </div>
    )
}

export default CorporatesJsx
