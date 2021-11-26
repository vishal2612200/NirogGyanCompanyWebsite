import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: "2rem",
        color: "#fff",
        backgroundColor: "#3567D6",
        justifyContent: "flex-start",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center"
        }
    },
    heading: {
        paddingBottom: "1rem",
        fontWeight: "bolder"
    },
    block1: {
        fontSize: "1.5rem",
        padding: "0 auto",

        [theme.breakpoints.down('sm')]: {
            "& *": {
                textAlign: "center"
            }
        }
    },
    block2: {
        alignItems: "space-evenly",
        padding: "1rem",

        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
        "&> *": {
            marginBottom: "1rem"
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
        maxWidth: "70%",
        minWidth: "60%",
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
        padding: "0.5rem",
        paddingLeft: "0rem",
        paddingTop: "0rem",
        margin: "2rem"
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

    return <Grid container className={classes.root} component="form"
        action={mailingList.actionurl} method="post">

        <Block1 content={mailingList.block1} md={6} />
        <Block2 content={mailingList.block2} md={6} />
    </Grid>
}

const Block1 = ({ content, ...props }) => {
    const classes = useStyles()
    return <Grid container item sm={6} justifyContent="center" alignItems="center" {...props}>
        <Grid container item md={10} direction="column" justifyContent="space-around" alignItems="stretch" className={classes.block1} >
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
                    {content.footer.map(
                        ({ text, style = {} }, index) => ((style && <span key={index} style={style}> {`${text} `}</span>) || `${text} `)
                    )}
                </Typography>}
            </Grid>
        </Grid>
    </Grid>
}

const Block2 = ({ content, ...props }) => {
    const classes = useStyles()
    const [email, setEmail] = useState("")
    return <Grid container item className={classes.block2} alignItems="center" justifyContent="center" {...props}>
        <Grid item md={6} style={{ textAlign: "center" }}>
            <input className={classes.input}
                name="email"
                value={email}
                placeholder={content.placeholderText}
                onChange={e => setEmail(e.target.value)} />
        </Grid>
        <Grid item md={6}>
            <Button variant="contained" className={classes.button} type="submit">
                {content.buttonText}
            </Button>
        </Grid>

    </Grid>

}
