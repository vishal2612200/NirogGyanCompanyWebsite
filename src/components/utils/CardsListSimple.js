import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
    cardsList: {
        justifyContent: "center",
        alignItems: "stretch",
        textAlign: "center",
    },
    card: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        justifyContent: "space-evenly",
        margin: "2%",
        alignContent: "center",
        border: "1px solid #B8BBBD",
        textAlign: "center",
        borderRadius: "10px",
    },

    image: {
        maxWidth: "100%",
        maxHeight: "auto"
    },
    iconContainer: {
        justifyContent: "center",
        alignContent: "center",
    }
}
)


export default function CardsList({ cardsList }) {
    const classes = useStyles();
    return <Grid container item className={classes.cardsList} spacing={1}>
        {cardsList.map(({ imgPath, heading, content }, index) => (
            <Card {...{ imgPath, heading, content }} key={index} />
        ))
        }
    </Grid>
}


const Card = ({ imgPath, heading, content }) => {

    const classes = useStyles();
    const icons = [
        <FacebookIcon />,
        <InstagramIcon />,
        <TwitterIcon />]
    return (
        <Grid container item direction="column" className={classes.card} sm={3} >
            <Grid item className={classes.imageBox} >
                <img src={imgPath} alt="service" className={classes.image} />
            </Grid>
            <Grid item className={classes.personName}>
                <Typography variant="h6" style={{color:"#716A6A", fontWeight:"bolder"}}>{heading}</Typography>
            </Grid>
            <Grid item className={classes.personName}>
                <Typography variant="body1" color="textSecondary">{content}</Typography>
            </Grid>

            <Grid container item className={classes.iconContainer}>

                {
                    icons.map(icon => (
                        <Grid item className={classes.icon}>
                            <IconButton>
                                {icon}
                            </IconButton>
                        </Grid>
                    )
                    )
                }

            </Grid>
        </Grid >

    );
}

