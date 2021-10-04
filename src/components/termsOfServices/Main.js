import React from "react";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import { Grid, Typography, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "60vh",
        "&>div": {
            marginBottom: "2rem"
        },
        [theme.breakpoints.down("sm")]: {
            padding: "2rem 0",
            textAlign: "center",
            justifyContent: "center",
        }
    },
    heading: {
        paddingBottom: "1rem"
    },
    block: {
        minWidth: "min-content",
    },
    container: {
        marginRight: "2rem"
    }
}));


export default function Main({ state: main }) {

    const classes = useStyles();
    return <Grid container className={classes.root} justifyContent="center" alignItems="center">
        <Header content={main.header} xs={10}/>
    </Grid>

}

const Header = ({ content, ...props }) => {
    const classes = useStyles();
    return <Grid container item direction="column" className={classes.header} justifyContent="space-evenly" {...props}>
        <Grid item>
            <Typography
                variant="h4" gutterBottom
                className={classes.headingstyle}>
                {
                    content.heading.map(
                        ({ text, style = {} }, index) => ((style && <span key={index} style={style}> {`${text} `}</span>) || `${text} `)
                    )}
            </Typography>
            {
                content?.description.map(({ text }, index) => <Typography
                    variant="body1"
                    color="textSecondary"
                    key={index}
                    style={{
                        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
                        // padding: "0.5rem"
                        paddingBottom: "0.5rem"
                    }}>
                    {text}
                </Typography>
                )}

        </Grid>
    </Grid>
}

