import React from "react";
import Typography from "@material-ui/core/Typography";
import {
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import "../component.css";
import BigRightImageSection from "../utils/BigRightImageSection";
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // paddingTop: "3rem"

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
        <Grid container className={clsx(classes.root)} justifyContent="center" alignItems="center">
            <BigRightImageSection
                contentLeft={<ContentLeft content={believe.contentLeft} />}
                image={{
                    imagePath: believe.contentRight.imagePath, altText: "feature"
                }} />

        </Grid>
    );
}


const ContentLeft = ({ content }) => {
    const classes = useStyles();
    return <Grid container item direction="column" className={classes.contentLeft} justifyContent="flex-end" alignItems="center">
        <Grid item md={9}>

            <Header content={content.content} />
        </Grid>
    </Grid>
}


const Header = ({ content: { heading, description } }) => {
    const classes = useStyles();
    return <Grid container item direction="column" className={classes.header} justifyContent="space-evenly">
        <Grid item>

            <List >

                <ListSubheader color="primary" style={{ position: "relative" }}>
                    <Typography variant="h4" color="textPrimary" style={{ marginBottom: "1rem" }}>
                        {heading}
                    </Typography>

                </ListSubheader>
                {description.map((item, index) => (
                    <ListItem>
                        <ListItemText
                            primary={
                                <Typography variant="body1" color="textSecondary" key={index}>
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





