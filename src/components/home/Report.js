import React from "react";
import Typography from "@material-ui/core/Typography";
import {
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#EAEEF3",
        justifyContent: "space-evenly",
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        padding: "3rem",
    },
    title: {
        wordWrap: "break-word",
        fontWeight: "700",
    },
    contentLeft: {
        alignItems: "center",
        justifyContent: "space-evenly",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    },
    contentRight: {
        textAlign: "center",
        margin: "auto",
        "& img": {
            maxWidth: "100%",
            height: "auto"
        }
    },
    headerContainer: {
        textAlign: "center",
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "4rem",
            textAlign: "left",

        }
    },
    cardList: {
        justifyContent: "space-around",
        padding: "2rem",
    },
    cardContainer: {
        justifyContent: "stretch",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        // "&:first-child>div": {

        //     backgroundColor: "#E9F5FF"
        // }
    },
    card: {
        boxShadow: "0px 2px 4px 4px #B8BBBD",
        width: "200px",
        height: "180px",
        padding: "1rem",
        borderRadius: "20px",
        backgroundColor: "#fff",
     
        "&:hover": { backgroundColor: "#E9F5FF" },
    },
    description: {
        fontSize: "1rem"
    },
    footer: {
        textAlign: "left",
        padding: "1rem",
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "4rem",

        },
        "&>*": {
            paddingBottom: "1rem"
        }
    },
}
));






export default function Report({ state: report }) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <ContentLeft content={report.contentLeft} />
            <ContentRight content={report.contentRight} />
        </Grid>
    );

}



const ContentLeft = ({ content }) => {
    const classes = useStyles();
    return <Grid item  xs={12} md={6} className={classes.contentLeft}>
        <Header content={content.header} />
        <CardList content={content.cardsList} />
        <Footer content={content.footer} />

    </Grid>
}

const Header = ({ content }) => {
    const classes = useStyles();
    return <Grid item className={classes.headerContainer} >
        <Typography
            variant="h3"
            className={classes.heading}
            style={{ fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif' }}
        >
            {content.heading}
        </Typography>
        <Typography
            variant="h6"
            color="textSecondary"
            className={classes.description}
            style={{ fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif' }}
        >
            {content.description}
        </Typography>
    </Grid>

}

const CardList = ({ content }) => {
    const classes = useStyles();
    return <Grid container item className={classes.cardList} >
        {content.map(({ imagePath, name }, index) => (
            <Card {...{ imagePath, name }} key={index} />
        ))}
    </Grid>
}

const Card = ({ imagePath, name }) => {

    const classes = useStyles();
    return (
        <Grid container item xs={12} sm={6} justifyContent="center" className={classes.cardContainer} >
            <Grid container item className={classes.card} direction="column" justifyContent="center" >
                <Grid item><img src={imagePath} alt="feature" width="auto" height="50px"/></Grid>
                <Grid item>
                    <Typography variant="h6">{name}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
const Footer = ({ content }) => {
    const classes = useStyles();
    return <Grid container direction="column" item className={classes.footer} md={10} justifyContent="flex-start">
        <Grid item>
            <Typography
                variant="h5"
                color="textSecondary"
                className={classes.textThin}
                style={{ fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif' }}
            >
                {content.textThin}
            </Typography>
        </Grid>
        <Grid item>

            <Typography
                variant="h5"
                style={{
                    fontSize: "2rem",
                    fontWeight: "950",
                    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
                    color: "#05152E"
                }}
            >
                <b>{content.textBold}</b>
            </Typography>
        </Grid>
    </Grid>

}

const ContentRight = ({ content }) => {
    const classes = useStyles();

    return <Grid container item direction="column" xs={12} md={6} className={classes.contentRight}>
        <Grid item >
            <img src={content.imagePath} alt="report-sample" />
        </Grid>
    </Grid>
}
