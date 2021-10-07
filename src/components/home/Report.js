import React, { useState, useContext, createContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import BigRightImageSection from "../utils/BigRightImageSection";
import { useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    contentLeft: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        padding: "3rem",
        paddingTop: "2rem",
        [theme.breakpoints.down('sm')]: {
            padding: "1rem"
        },
        "&>*": {
            marginBottom: "2rem"

        }
    },
    cardContainer: {
        alignItems: "center",
        textAlign: "center",
        padding: "1rem 0",
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",

        }
    },
    card: {
        boxShadow: "0px 2px 4px 4px #B8BBBD",
        width: "200px",
        height: "160px",
        padding: "1rem",
        borderRadius: "20px",
        backgroundColor: "#fff",

        "&:hover": { backgroundColor: "#E9F5FF" },
    },
    heading:{
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontSize: "2.25rem",
        fontWeight: "700"
    },
    description:{
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        fontSize: "1rem"
    }
}
));





const ReportContext = createContext();

export default function Report({ state: report }) {
    const [reportName, setReportName] = useState(Object.keys(report.contentRight)[0]);
    const reportImage = report.contentRight[reportName];



    return (
        <BigRightImageSection
            contentLeft={
                <ReportContext.Provider value={{ setReportName }}>
                    <ContentLeft content={report.contentLeft} />
                </ ReportContext.Provider >
            }
            image={reportImage}
            style={{ backgroundColor: "#EAEEF3" }} />

    );

}



const ContentLeft = ({ content }) => {
    const classes = useStyles();

    return <Grid container item xs={12} md={6} className={classes.contentLeft} >
        <Grid item md={2}></Grid>
        <Grid item md={10}>
            <Header content={content.header} />
            <CardsList content={content.cardsList} />
            <Footer content={content.footer} />
        </Grid>


    </Grid>
}

const Header = ({ content }) => {
    const classes = useStyles();

    return <Grid item style={{ paddingBottom: "1rem" }}>
        <Typography
            variant="h3"
            className={classes.heading}
        >
            {content.heading}
        </Typography>
        <Typography
            variant="h6"
            color="textSecondary"
            className = {classes.description}
        >
            {content.description}
        </Typography>
    </Grid>

}

const CardsList = ({ content }) => {

    return <Grid container item justifyContent="space-evenly" alignItems="center" style={{ paddingBottom: "1rem" }}>
        {content.map(({ image, name, imageIdentity }, index) => (
            <Card image={image} name={name} key={index} imageIdentity={imageIdentity} />
        ))}
    </Grid>
}

const Card = ({ image: { imagePath, altText = "logo-default" }, name, imageIdentity }) => {
    const classes = useStyles();
    const { setReportName } = useContext(ReportContext);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <Grid container item sm={6} className={classes.cardContainer} >
            <Grid container item className={classes.card} direction="column" justifyContent="center" onMouseOver={() => !isSmallScreen ? setReportName(imageIdentity) : ""}>
                <Grid item>
                    <img loading="lazy" src={imagePath} alt={altText} width="auto" height="50px" />
                </Grid>
                <Grid item>
                    <Typography variant="h6">{name}</Typography>
                </Grid>
            </Grid>
        </Grid>

    );
}
const Footer = ({ content }) => {
    return <Grid container item direction="column" md={11}>
        <Grid item>
            <Typography
                variant="h6"
                color="textSecondary"
                style={{ fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif' }}
            >
                {content.textThin}
            </Typography>
        </Grid>
        <Grid item>
            <Typography
                variant="h6"
                style={{
                    // fontSize: "2rem",
                    fontWeight: "950",
                    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
                    color: "#05152E"
                }}
            >
                {content.textBold}
            </Typography>
        </Grid>
    </Grid>

}
