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

    },

    text: {
    }
    ,
    cardList: {
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    feature: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontSize: "2rem",
        border: "1px solid #B8BBBD",
        "&__image-box": {
            backgroundColor: "#E9F5FF",
            padding: "1rem 3rem"
        }
    },
    "&__content": {
    }
    ,
    card: {
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#fff",
    }
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
    return <Grid container item direction="column" sm={6} className={classes.contentLeft} >
        <Header content={content.header} />
        <CardList content={content.cardsData} />
    </Grid>
}

const ContentRight = ({ content }) => {
    const classes = useStyles();

    return <Grid container item direction="column" sm={6} className={classes.contentRight}>
        <ImageBox imagePath={content.imagePath} />
    </Grid>
}

const Header = ({ content }) => {
    const classes = useStyles();
    return <Grid item className={classes.headingContainer}>
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
    return <Grid container item className={classes.cardList} >
        {content.map(({ imagePath, name }, index) => (
            <Card {...{ imagePath, name }} key={index} />
        ))}
    </Grid>
}

const Card = ({ imagePath, name }) => {

    const classes = useStyles();

    return (
        <Grid container item direction="column" className={classes.card} sm={6}>
            <Grid item>
                <img src={imagePath} alt="feature" />
            </Grid>
            <Grid item>
                <Typography variant="h6" >
                    {name}
                </Typography>
            </Grid>
        </Grid>

    );
}

const ImageBox = ({ imagePath }) => {
    const classes = useStyles();
    return <Grid container item md={6}
        className={classes.imageBox}
        style={{ backgroundImage: `url(${imagePath})` }}>
    </Grid>
}
