import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        padding: ".5rem",
        paddingTop: "0",
    },
    serviceCard: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        borderRadius: "15px",
        alignContent: "center",
        border: "1px solid #B8BBBD",
        margin: "2rem",
        boxShadow: "39px 11px 83px -53px #B8BBBD",
        "&__logo-box": {
            textAlign: "center",
            textWrap: "word-break",
            padding: "1rem"
        },
        "&__heading": {
            textAlign: "center",
        },
        "&__content": {
            padding: "1rem",
            textAlign: "center",
        }
    },
    heading: {
        textAlign: "center",
        "&:hover": {
            color: "#0f53b8",
        }
    }
}

));






export default function CardsGrid2D({ cardsList }) {
    const classes = useStyles();
    return cardsList.map((row, index) => <Grid key={index} className={classes.root} container item justifyContent="space-evenly" alignItems="center">
        {row.map((props, index) => (
            <Card  {...props} key={index} md={Math.round(12 / row.length)} />
        ))
        }
    </Grid>)
}


const Card = ({ url, image: { imagePath, altText = "logo-default" }, heading, content, ...props }) => {

    const classes = useStyles();

    return (
        <Grid container item direction="column" justifyContent="center" alignItems="baseline" xs={12} sm={5} {...props}  >
            <Grid container item direction="column" className={`${classes.serviceCard}__logo-box`} style={{ marginBottom: "1rem" }}>
                <Grid item>
                    <img loading="lazy" src={imagePath} alt={altText} width="60px" height="60px" />
                </Grid>
                <Grid item className={classes.heading}>
                    {heading.style ?
                        <Typography variant="h5" style={heading.style}>{heading.text}</Typography> :
                        <Typography variant="h5">{heading.text}</Typography>}
                </Grid>
            </Grid>
            <Grid item >
                <Typography variant="body1" color="textSecondary" component="div">
                    {content.map(
                        ({ text, style = {} }, index) => ((style && <span key={index} style={style}> {`${text} `}</span>) || `${text} `)
                    )}
                </Typography>
            </Grid>
        </Grid>

    );
}
