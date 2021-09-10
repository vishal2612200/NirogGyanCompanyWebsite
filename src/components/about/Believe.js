import React from "react";
import Typography from "@material-ui/core/Typography";
import {
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ListSubheader } from '@material-ui/core';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

import clsx from 'clsx';
import "../component.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    contentRight: {
        textAlign: "center",
        "& >img": {
            maxWidth: "100%",
            maxHeight: "100%"
        }
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
    imageBox: {
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#E9F5FF",
        "&>img": {
            margin: "auto "
        }
    },
    cardsList: {
        marginTop: "2rem",
    },

    card: {
        border: "1px solid #B8BBBD",
        marginBottom: "2rem"

    },
    textBox: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        padding: "1rem",
        textWrap: "word-break",
        alignItems: "flex-end",
    }

})
);

export default function Believe({ state: believe }) {

    const classes = useStyles();

    return (
        <Grid container className={clsx(classes.root, 'padding-heavy-side-low-bottom')}  >
            <ContentLeft content={believe.contentLeft} />
            <ContentRight content={believe.contentRight} />
        </Grid>
    );
}


const ContentLeft = ({ content }) => {
    const classes = useStyles();
    return <Grid container item direction="column" xs={12} md={6} className={classes.contentLeft}>
        <Header content={content.content} />
        <CardsList content={content.cardsList} />
    </Grid>
}


const Header = ({ content }) => {
    const classes = useStyles();
    return <Grid container item direction="column" className={classes.header} justifyContent="space-evenly">
        <Grid item>

            <List >

                <ListSubheader color="primary" style={{position:"relative"}}>
                    <Typography variant="h3" color="textPrimary" h3>
                        {content.heading}
                    </Typography>

                </ListSubheader>
                {content.description.map(item => (
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography variant="h6" color="textSecondary">
                                    {item}
                                </Typography>
                            }

                        />
                    </ListItem>

                )
                )}
            </List>
        </Grid>
    </Grid>
}




const CardsList = ({ content }) => {
    const classes = useStyles();
    return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}>
        {content.map(({ imagePath, textThin, textBold }, index) => (<Card {...{ imagePath, textThin, textBold }} key={index} />))}
    </Grid>


}


const Card = ({ imagePath, textThin, textBold }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.card}  >
            <Grid item xs={4} className={classes.imageBox}>
                <img src={imagePath} alt="market" />
            </Grid>
            <Grid item xs={8} className={classes.textBox}>
                <Typography variant="h6" color="textSecondary">
                    {textThin}
                </Typography>
                <Typography variant="h6" color="textSecondary" style={{ fontWeight: "bolder" }}>
                    {textBold}
                </Typography>
            </Grid>
        </Grid>
    )
}

const ContentRight = ({ content }) => {
    const classes = useStyles();

    return <Grid item xs={12} md={6} className={classes.contentRight}>
        <img src={content.imagePath} alt="doctor" />
    </Grid>
}






