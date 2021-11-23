import home from "./home";
import about from "./about";
import howitworks from "./howitworks";
import blogs from "./blogs";
import faqs from "./faqs";
import termsOfServices from "./termsOfServices";
import privacyPolicy from "./privacyPolicy";
import solutions from "./solutions";

import navbar from "./navbar";
import subscribe from "./subscribe"
import footer from "./footer"
import labs from "./labs"
import doctors from "./doctors"
import corporates from "./corporates"
const statesPages = {
    home,
    about,
    howitworks,
    blogs,
    faqs,
    termsOfServices,
    privacyPolicy,
    solutions,
    labs,
    doctors,
    corporates

};

const statesComponents = {
    navbar,
    subscribe,
    footer
}

const appState = { pages: statesPages, components: statesComponents };

export default appState;