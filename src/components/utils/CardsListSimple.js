import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { useMediaQuery, useTheme } from "@material-ui/core"
import CarousalWithArrowsOnDesktop from "../utils/CarousalWithArrowsOnDesktop"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "300px"
        
    },
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
    },
    media: {
        height: 180,
    },
    iconStyle: {
        border: "1px solid #B8BBBD",
        borderRadius: "50%",
        padding: "5px",

    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.8rem",

        }
    }

}));


export default function CardsList({ cardsList }) {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

    let numberOfSlides;
    if (isSmallScreen)
        numberOfSlides = 1;
    else if (isMediumScreen)
        numberOfSlides = 2;
    else if (isLargeScreen)
        numberOfSlides = 3;
    else
        numberOfSlides = 4;

    return <Grid container className={classes.cardList} item justifyContent="center" alignItems="center">
        <CarousalWithArrowsOnDesktop card={<TeamCard />} content={cardsList} numberOfSlides={numberOfSlides} />
    </Grid>
}



export const TeamCard = ({ imgPath, heading, content }) => {

    const classes = useStyles();
    const icons = [
        <FacebookIcon className={classes.iconStyle} />,
        <InstagramIcon className={classes.iconStyle} />,
        <TwitterIcon className={classes.iconStyle} />]
    return (
        <Card className={classes.root} >
            <CardActionArea style={{ textAlign: "center" }}>
                <img src={imgPath} alt="hello there" width="100%" height="200px" />
                <CardContent >
                    <Typography variant="h4" color="textSecondary" className={classes.title}>
                        <Box textAlign="center">
                            {heading}
                        </Box>
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        <Box textAlign="center">
                            {content}
                        </Box>
                    </Typography>
                    <Typography variant="h5">

                    </Typography>


                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
                <Box >
                    {
                        icons.map(icon => (
                            <IconButton>
                                {icon}
                            </IconButton>
                        )
                        )
                    }
                </Box>

            </CardActions>
        </Card>
    );
}

