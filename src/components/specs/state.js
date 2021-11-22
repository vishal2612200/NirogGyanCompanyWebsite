import home from "./home";
import about from "./about";
import howitworks from "./howitworks";
import blogs from "./blogs";
import faqs from "./faqs";
import termsOfServices from "./termsOfServices";
import privacyPolicy from "./privacyPolicy";
import dummy from "./dummy"

import navbar from "./navbar";
import subscribe from "./subscribe"
import footer from "./footer"

const statesPages = {
    home,
    about,
    howitworks,
    blogs,
    faqs,
    termsOfServices,
    privacyPolicy,
    dummy
};

const statesComponents = {
    navbar,
    subscribe,
    footer
}

const appState = { pages: statesPages, components: statesComponents };

export default appState;