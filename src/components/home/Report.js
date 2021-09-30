import React from "react";
import Typography from "@material-ui/core/Typography";
import {
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import BigRightImageSection from "../utils/BigRightImageSection1";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#EAEEF3",
        justifyContent: "space-evenly",
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        padding: "3rem",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }
    },
    title: {
        wordWrap: "break-word",
        fontWeight: "700",
    },
    contentLeft: {

        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',

        "&>*": {
            marginBottom: "2rem"

        }
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

        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }

    },
    cardList: {
        marginTop: "2rem",
        justifyContent: "space-around",
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
            <BigRightImageSection
                contentLeft={<ContentLeft content={report.contentLeft} />}
                image={{
                    imagePath: report.contentRight.imagePath, altText: "feature"
                }} />
        </Grid>
    );

}



const ContentLeft = ({ content }) => {
    const classes = useStyles();
    return <Grid container item xs={12} md={6} className={classes.contentLeft} >
      <Grid item md={2}></Grid>
        <Grid item md={10}>
        <Header content={content.header} />
        <CardList content={content.cardsList} />
        <Footer content={content.footer} />
     </Grid>
     

    </Grid>
}

const Header = ({ content }) => {
    return <Grid item  style={{paddingBottom:"1rem"}}>
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

const CardList = ({ content }) => {
    const classes = useStyles();
    return <Grid container item justifyContent="space-evenly" alignItems="center" style={{ paddingBottom: "1rem" }}>
       
        {content.map((props, index) => (
                

                <Card {...props} key={index} />

            ))}
       
    </Grid>
}

const Card = ({ imagePath, name }) => {

    const classes = useStyles();
    return (
        <Grid container item sm={6} className={classes.cardContainer} >
            <Grid container item className={classes.card} direction="column" justifyContent="center" >
                <Grid item><img src={imagePath} alt="feature" width="auto" height="50px" /></Grid>
                <Grid item>
                    <Typography variant="h6">{name}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
const Footer = ({ content }) => {
    const classes = useStyles();
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

const ContentRight = ({ content }) => {
    const classes = useStyles();

    return <Grid container item direction="column" xs={12} md={6} className={classes.contentRight}>
        <Grid item >
            <img src={content.imagePath} alt="report-sample" />
        </Grid>
    </Grid>
}
