import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid  from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import BigRightImageSection from "../utils/BigRightImageSection";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
    }
})
);

export default function Believe({ state: believe }) {

    return (
        <BigRightImageSection
            contentLeft={<ContentLeft content={believe.contentLeft} />}
            image={believe.contentRight.image} />

    );
}


const ContentLeft = ({ content }) => {
    const classes = useStyles();
    return <Grid container item direction="column" className={classes.contentLeft} justifyContent="flex-end" alignItems="center" md={6}>
        <Grid item md={9}>
            <Header content={content.content} />
        </Grid>
    </Grid>
}


const Header = ({ content: { heading, description } }) => {
    const classes = useStyles();
    return <Grid item direction="column" className={classes.header} justifyContent="space-evenly" alignItems="center">

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
}





