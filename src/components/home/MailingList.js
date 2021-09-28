import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem 6rem",
        color: "#fff",
        backgroundColor: "#3567D6",

    },
    heading: {
        paddingBottom: "1rem",
        fontWeight: "bolder"
    },
    block1: {
        fontSize: "1.5rem",
        [theme.breakpoints.down('sm')]: {
            "& *": { textAlign: "center", }
        }
    },
    block2: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        }
    },
    buttonContainer: {
        textAlign: "center"

    },
    container: {
        marginRight: "2rem"
    },
    input: {
        color: "#fff",
        borderRadius: "40px",
        border: "1px solid white",
        background: "transparent",
        padding: "1rem 1.5rem",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        width: "100%",
        "&::placeholder": {
            color: "#fff",
            [theme.breakpoints.down('sm')]: {
                textAlign: "center",
            }
        },
        "&:focus": {
            outline: "none"
        }

    },

    inputContainer:
    {
        width: "inherit",
        padding: "0.5rem",
        paddingLeft: "0rem",
        paddingTop: "0rem",
    },
    button: {

        borderRadius: "20px",
        padding: "0.5rem 2rem",
        textTransform: "none",
        backgroundColor: "#052E88",
        color: "white",

    },
    footertext: {
        display: "inline-block",
    }
}));





export default function MailingList({ state: mailingList }) {
    const classes = useStyles();
    return <form action={mailingList.actionurl} method="post">
        <Grid container className={classes.root} justifyContent="flex-start" alignItems="stretch">
            <Block1 content={mailingList.block1} md={5} />
            <Block2 content={mailingList.block2} md={7} />
        </Grid>
    </form>
}

const Block1 = ({ content, ...props }) => {
    const classes = useStyles()
    return <Grid container item direction="column" justifyContent="space-around" alignItems="flex-start" className={classes.block1} {...props}>
        <Grid item>
            <Typography
                variant="h5"
                className={classes.heading}>
                {content.heading}
            </Typography>
        </Grid>
        <Grid item>
            <Typography
                variant="body1"
                className={classes.description} style={{ color: "#CBDBFF" }}>
                {content.description}
            </Typography>
        </Grid>

        <Grid item style={{ marginTop: "0.5rem" }}>
            {<Typography variant="body1" className={classes.footertext} style={{ color: "#CBDBFF" }}>
                {content.footer}
            </Typography>}
        </Grid>
    </Grid>
}

const Block2 = ({ content, ...props }) => {
    const classes = useStyles()
    const [email, setEmail] = useState("")
    return <Grid container item className={classes.block2} alignItems="center" {...props}>
        <Grid item md={5} className={classes.inputContainer}>
            <input className={classes.input}
                name="email"
                value={email}
                placeholder={content.placeholderText}
                onChange={e => setEmail(e.target.value)} />
        </Grid>
        <Grid item className={classes.buttonContainer} md={6}>

            <Button variant="contained" className={classes.button} type="submit">
                {content.buttonText}
            </Button>
        </Grid>

    </Grid>

}
