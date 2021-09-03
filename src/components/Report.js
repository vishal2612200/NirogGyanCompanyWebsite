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
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontWeight: "700",
    },
    contentLeft: {
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    contentRight: {
        "& >img": {
            maxWidth: "100%",
            maxHeight: "100%"
        }
    },
    headerContainer: {
        textAlign: "center",
    },
    cardList: {
        justifyContent: "space-between",

    },
    card: {
        marginBottom: "3rem",
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: "20px",
    }
}
));






export default function Report({ state: report }) {
    const classes = useStyles();
    return (
        <Grid container spacing={8} className={classes.root}>
            <ContentLeft content={report.contentLeft} />
            <ContentRight content={report.contentRight} />
        </Grid>
    );

}



const ContentLeft = ({ content }) => {
    const classes = useStyles();
    return <Grid container item direction="column" sm={6} className={classes.contentLeft}>
        <Header content={content.header} />
        <CardList content={content.cardsData} />
    </Grid>
}

const ContentRight = ({ content }) => {
    const classes = useStyles();

    return <Grid container item direction="column" sm={6} className={classes.contentRight}>
        <Grid item>
            <img src={content.imagePath} alt="report-sample" />
        </Grid>
    </Grid>
}

const Header = ({ content }) => {
    const classes = useStyles();
    return <Grid item className={classes.headerContainer}>
        <Typography
            variant="h3"
            className={classes.heading}>
            {content.heading}
        </Typography>
        <Typography
            variant="h6"
            color="textSecondary"
            className={classes.description}>
            {content.description}
        </Typography>
    </Grid>

}

const CardList = ({ content }) => {
    const classes = useStyles();
    return <Grid container item spacing={2} className={classes.cardList} >
        {content.map(({ imagePath, name }, index) => (
            <Card {...{ imagePath, name }} key={index} />
        ))}
    </Grid>
}

const Card = ({ imagePath, name }) => {

    const classes = useStyles();
    return (
        <Grid container direction="column" item spacing={3} sm={6} className={classes.card} >
            <Grid item><img src={imagePath} alt="feature" /></Grid>
            <Grid item>
                <Typography variant="h6">
                    {name}
                </Typography>
            </Grid>
        </Grid>

    );
}
