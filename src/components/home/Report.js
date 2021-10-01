import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import BigRightImageSection from "../utils/BigRightImageSection";

const useStyles = makeStyles((theme) => ({
    contentLeft: {

        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        paddingTop: "2rem",
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
    }
}
));






export default function Report({ state: report }) {
    return (
        <BigRightImageSection
            contentLeft={<ContentLeft content={report.contentLeft} />}
            image={report.contentRight.image}
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
    return <Grid item style={{ paddingBottom: "1rem" }}>
        <Typography
            variant="h3"
            style={{ fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif' }}
        >
            {content.heading}
        </Typography>
        <Typography
            variant="h6"
            color="textSecondary"
            style={{ fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif' }}
        >
            {content.description}
        </Typography>
    </Grid>

}

const CardsList = ({ content }) => {
    console.log(content, "Report")

    return <Grid container item justifyContent="space-evenly" alignItems="center" style={{ paddingBottom: "1rem" }}>
        {content.map(({ image, name }, index) => (
            <Card image={image} name={name} key={index} />
        ))}
    </Grid>
}

const Card = ({ image: { imagePath, altText = "logo-default" }, name }) => {
    const classes = useStyles();

    return (
        <Grid container item sm={6} className={classes.cardContainer} >
            <Grid container item className={classes.card} direction="column" justifyContent="center" >
                <Grid item>
                    <img src={imagePath} alt={altText} width="auto" height="50px" />
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
                    fontSize: "2rem",
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
