import { useMediaQuery, useTheme } from "@material-ui/core"


export function useNumberOfSlides() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

    let numberOfSlides = 4;

    if (isSmallScreen)
        numberOfSlides = 1;
    else if (isMediumScreen)
        numberOfSlides = 2;
    else
        numberOfSlides = 4;
    return numberOfSlides;
}

export function useSmallScreen() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return isSmallScreen;
}