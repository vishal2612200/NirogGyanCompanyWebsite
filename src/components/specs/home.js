import heroImage from "../home/static/imgs/hero-image.svg"

import brandCrelioHealth from "../home/static/imgs/brand-crelio-health.jpg"
import brandDrDangLabs from "../home/static/imgs/brand-dr-dang-labs.png"
import brandMedlife from "../home/static/imgs/brand-medlife.png"
import brandNiramaya from "../home/static/imgs/brand-niramaya.png"
import brandIqvia from "../home/static/imgs/brand-iqvia.png"
import brandItdose from "../home/static/imgs/brand-itdose.png"
import brandPracto from "../home/static/imgs/brand-practo.jpg"
import brandMaxlab from "../home/static/imgs/brand-maxlab.jpg"
import brandThyrocare from "../home/static/imgs/brand-thyrocare.png"


import brandWhatsappIcon from "../home/static/imgs/brand-whatsapp-icon.svg"

import featuresItem1 from "../home/static/imgs/features-item-1.png"
import featuresItem2 from "../home/static/imgs/features-item-2.png"
import featuresItem3 from "../home/static/imgs/features-item-3.png"


import servicesPdfWhatsapp from "../home/static/imgs/services-pdf-whatsapp.png"
import servicesMarketing from "../home/static/imgs/services-marketing.png"
import servicesAffordable from "../home/static/imgs/services-affordable.png"
import servicesBackground from "../home/static/imgs/services-background.png"
import servicesTemplates from "../home/static/imgs/services-templates.png"
import servicesCorporateOfferings from "../home/static/imgs/services-corporate-offerings.png"
import servicesInstant from "../home/static/imgs/services-instant.png"

import reportVitamin from "../home/static/imgs/report-vitamin.png"
import reportKidney from "../home/static/imgs/report-kidney.png"
import reportElectrolyte from "../home/static/imgs/report-electrolyte.png"
import reportDiabetes from "../home/static/imgs/report-diabetes.png"

import reportPdfVitamin from "../home/static/imgs/report-pdf-vitamin.png"
import reportPdfKidney from "../home/static/imgs/report-pdf-kidney.png"
import reportPdfLiver from "../home/static/imgs/report-pdf-liver.png"
import reportPdfCovid from "../home/static/imgs/report-pdf-covid.png"

import achievementsBackground from "../home/static/imgs/achievements-background.svg"

import clientMessage1 from "../home/static/imgs/client-message-1.png"
import clientMessage2 from "../home/static/imgs/client-message-2.png"
import clientMessage3 from "../home/static/imgs/client-message-3.png"
import clientMessage4 from "../home/static/imgs/client-message-4.png"
import clientMessage5 from "../home/static/imgs/client-message-5.png"
import clientMessageBackground from "../home/static/imgs/client-message-background.png"


import featuresBig from "../home/static/imgs/features-background.svg"



export default (function () {
  return {

    HeroSection: {
      contentLeft: {
        heading: { line1: "Simplifying", line2: "Medical Reports" },
        description:
          "For effective healthcare, it is crucial that correct and easily-to-follow medical information reaches patients every time. NirogGyan helps you achieve just that with Smart Reports.",
        buttons: { services: "our Services", watchVideo: "Watch Video" },
      },
      contentRight: {
        image: {
          imagePath: heroImage,
          altText: "hero"
        }
      },
      linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },
    Brand: {
      header: {
        heading: [
          { text: "Trusted by the best" },
          { text: "Healthcare Brands", style: { color: "#3567D6", fontWeight: "700" } }
        ],
        description: "We partner with the best Diagnostic providers"
      },
      trustedBrandsLogoImages: [
        { imagePath: brandIqvia, altText: "brandIqvia" },
        { imagePath: brandItdose, altText: "brandItdose" },
        { imagePath: brandPracto, altText: "brandPracto" },
        { imagePath: brandMaxlab, altText: "brandMaxlab" },
        { imagePath: brandThyrocare, altText: "brandThyrocare" },
        { imagePath: brandCrelioHealth, altText: "brandCrelioHealth" },
        { imagePath: brandDrDangLabs, altText: "brandDrDangLabs" },
        { imagePath: brandMedlife, altText: "brandMedlife" },
        { imagePath: brandNiramaya, altText: "brandNiramaya" },
      ],
      whatsapp: brandWhatsappIcon,
      whatsappurl: "https://wa.me/917678277891"

    },
    Features: {
      contentLeft: {
        header: {
          heading: [{
            text:
              "Knowledge, design and technology combine to transform medical data into something",
          },
          { text: "smart", style: { color: "#3567D6", fontWeight: "700" } }
          ],
        },
        cardsList: [
          {
            image: { imagePath: featuresItem1, altText: "featuresItem1" },
            textThin: "250+ Biomarkers and Specialised Profiles",
            textBold: "Pathology Biomarkers",
          },
          {
            image: { imagePath: featuresItem2, altText: "featuresItem2" },
            textThin: "Content and Design verified by Top Doctors",
            textBold: "",
          },
          {
            image: { imagePath: featuresItem3, altText: "featuresItem3" },
            textThin: "Analytics, Multi-language option, Customisable",
            textBold: "",
          },
        ],
      },
      contentRight: {
        image: {
          imagePath: featuresBig,
          altText: "features"
        },
      },
    },
    Services: {
      header: {
        heading: [
          { text: "The Ultimate Tool to" },
          { text: "Engage Patients", style: { color: "#3567D6", fontWeight: "700" } }

        ],
        description:
          "We’ve put 3 years to guarantee you the best user-experience in lab reporting.",
      },
      cardsList: [
        {
          image: { imagePath: servicesTemplates, altText: "reports" },
          heading: "Multiple Reporting Templates",
          content:
            "We cater to every type of audience with different styling & language options",
        },
        {
          image: { imagePath: servicesInstant, altText: "instant" },
          heading: "Instant, Automated, Secure",
          content:
            "Don't wait for Smart Reports : Instant download using our secure API",
        },
        {
          image: { imagePath: servicesPdfWhatsapp, altText: "PdfWhatsapp" },
          heading: "PDF, App, E-mail, Whatsapp",
          content:
            "Reach your customers the way they prefer, with our multiple integrations",
        },
        {
          image: { imagePath: servicesMarketing, altText: "Marketing" },
          heading: "Unique Whitelabel - Marketing",
          content:
            "Enhance your brand with whitelabel reports and product-centric marketing",
        },
        {
          image: { imagePath: servicesAffordable, altText: "Affordable" },
          heading: "Special Corporate Offerings",
          content:
            "A gamified Health-Check Dashboard for companies to take healthier decisions",
        },
        {
          image: { imagePath: servicesCorporateOfferings, altText: "CorporateOfferings" },
          heading: "Affordable & Doctor-friendly",
          content: "Organisations and medical experts love our offerings & packages",
        },
      ],
      backgroundImage: servicesBackground

    },
    Bytes: {
      header: {
        heading: [{ text: "NirogGyan Bytes" }],
      },
      videoLinks: [
        { link: "https://www.youtube.com/embed/7oLpkU2wCRU/" },
        { link: "https://www.youtube.com/embed/MlLAXpoxNvQ/" },
        { link: "https://www.youtube.com/embed/H0cHIewcQ2M/" },
        { link: "https://www.youtube.com/embed/p7XAjIv7YRI/" },
        { link: "https://www.youtube.com/embed/XVKS1rtTkbg/" },
        { link: "https://www.youtube.com/embed/L4aPen8hCL8/" },
      ],
    },
    Report: {
      contentLeft: {
        header: {
          heading: "Believe what you see.",
          description: "Checkout our Smart Reports below and know the difference",
        },
        footer: {
          textThin: "My Smart Diabetes Report helped me get the timely shock that I needed to correct myself. Thank you!",
          textBold: "Zubair Ahmed, veteran journalist"
        },
        cardsList: [
          {
            image: { imagePath: reportVitamin, altText: "vitamin" },
            name: "Vitamin",
            imageIdentity:"vitamin"
          },
          {
            image: { imagePath: reportKidney, altText: "kidney" },
            name: "Kidney",
            imageIdentity:"kidney"
          },
          {
            image: { imagePath: reportElectrolyte, altText: "electrolyte" },
            name: "Electrolyte",
            imageIdentity:"covid"
          },
          {
            image: { imagePath: reportDiabetes, altText: "diabetes" },
            name: "Diabetes",
            imageIdentity:"liver"
          }
        ]
      },
      contentRight: {
        vitamin: { imagePath: reportPdfVitamin, altText: "vitamin" },
        covid: { imagePath: reportPdfCovid, altText: "covid" },
        kidney: { imagePath: reportPdfKidney, altText: "kidney" },
        liver: { imagePath: reportPdfLiver, altText: "liver" },

      }
    },
    Achievements: {
      backgroundImage: achievementsBackground,
      cardsList: [
        {
          textBig: "40+",
          textSmall: "Labs Running",
        },
        {
          textBig: "300,000",
          textSmall: "Reports Generated",
        },

        {
          textBig: <>4.7 <span style={{ color: "yellow" }}>&#9733;</span></>,
          textSmall: "Rating from Users",
        },
        {
          textBig: "04",
          textSmall: "Countries Reached",
        },
      ]
    },
    ClientMessage: {
      header: {
        heading: [{ text: "What Our Clients Say" }],
        description: "We work to make every report just right for our clients’ needs",
      },
      backgroundImage: clientMessageBackground,
      cardsList: [
        {
          message: "It seems like yesterday when I met the founders to explore the possibility of providing patient- friendly reports, both to my walk -in and B2B customers.The team kept it sweet & simple.With minimal integration using APIs, we’ve been live since more than a year.",
          image: { imagePath: clientMessage1, altText: "clientMessage1" },
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "I've been a firm supporter of this concept since long. Fortunately, we at FamPhy got to work with the bright NirogGyan team to provide SmartReports & Analytics to our corporate client.The response was great, and it was an enjoyable experience for us.",
          image: { imagePath: clientMessage2, altText: "clientMessage2" },
          name: "Dr.Soumik Kalita",
          organisation: "Founder, FamPhy"
        },
        {
          message: "I am extremely health conscious and an ex - diabetic.Got my wife and myself tested during the lockdown and was just blown away by these reports.For the first time in my life, I didn’t have to google terms to know about my health.",
          image: { imagePath: clientMessage3, altText: "clientMessage3" },
          name: "Zubair Ahmed",
          organisation: "Journalist, BBC India"
        },
        {
          message: "A wonderful concept to make diagnostic reports legible and easy to understand. NirogGyan has made a great product which is loved by customers. The integration is very easy and the team is super quick to adapt. Loved working with this exceptional team.", 
          imagePath: clientMessage4,
          name: "Ashwani Mishra",
          organisation: "Product Manager"
        },
        {
          message: "A wonderful concept to make diagnostic reports legible and easy to understand. NirogGyan has made a great product which is loved by customers. The integration is very easy and the team is super quick to adapt. Loved working with this exceptional team.", 
          imagePath: clientMessage5,
          name: "Anita Sharma",
          organisation: "Housewife"
        },
      ]
    },
    MailingList: {
      block1: {
        heading: "Subscribe to our mailing list",
        description: "We'll keep sending you the best updates on Health Education",
        footer: <><span style={{ color: "#fff" }}>Get In Touch</span>  :   contact@niroggyan.com</>,
      },
      block2: {
        placeholderText: "Enter your email address",
        buttonText: "Subscribe",
      },
      actionurl: "https://niroggyan.us1.list-manage.com/subscribe/post?u=a8e8a8e8c9c8c8c8c8c8c8c8c&amp;id=8c8c8c8c8c8c8c8c8c8c8c8c8c",
    },

  };
})();
