import heroImage from "../home/static/imgs/hero-image.png"

import brandCrelioHealth from "../home/static/imgs/brand-crelio-health.png"
import brandDrDangLabs from "../home/static/imgs/brand-dr-dang-labs.png"
import brandMedlife from "../home/static/imgs/brand-medlife.png"
import brandNiramaya from "../home/static/imgs/brand-niramaya.png"


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
import reportBigReport from "../home/static/imgs/report-big-report.png"

import achievementsBackground1 from "../home/static/imgs/achievements-background-1.png"
import achievementsBackground2 from "../home/static/imgs/achievements-background-2.png"

import clientMessage1 from "../home/static/imgs/client-message-1.png"
import clientMessage2 from "../home/static/imgs/client-message-2.png"
import clientMessage3 from "../home/static/imgs/client-message-3.png"
import clientMessageBackground from "../home/static/imgs/client-message-background.png"


import featuresBig from "../home/static/imgs/features-big.png"



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
        imagePath: heroImage,
      },
      linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },
    Brand: {
      header: {
        heading: [
          { text: "Trusted by the best" },
          { text: "Healthcare Brands", style: { color: "#3567D6", fontWeight: "200" } }
        ],
        description: "We partner with the best Diagnostic providers (Thyrocare, Dr.Dangs, Max Labs, Al Arab, itDose, Creliohealth, Practo, Lupin, Northstar, IQVIA)"
      },
      trustedBrandsLogoImages: [
        brandCrelioHealth,
        brandDrDangLabs,
        brandMedlife,
        brandNiramaya,
      ],
      whatsapp: brandWhatsappIcon,

    },
    Features: {
      contentLeft: {
        header: {
          line1: "Knowledge, Design and Technology combine to transform medical data into something",
          line2: "Smart",
          line3: "",
        },
        cardsList: [
          {
            imagePath: featuresItem1,
            textThin: "Software covering 250+",
            textBold: "Pathology Biomarkers",
          },
          {
            imagePath: featuresItem2,
            textThin: "Knowledge Bank based by",
            textBold: "Evidence-backed, Vetted Content",
          },
          {
            imagePath: featuresItem3,
            textThin: "Add-ons : Multi - language",
            textBold: "Content, Graphs, Analytics",
          },
        ],
      },
      contentRight: {
        imagePath: featuresBig
      },
    },

    Services: {
      header: {
        heading: [
          { text: "The Ultimate Tool to Engage Patients" },
        
        ],
        description:
          "We’ve put 3 years to guarantee you the best user-experience in lab reporting.",
      },
      cardsList: [
        {
          imgPath: servicesTemplates,
          heading: "Multiple Reporting Templates",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
        },
        {
          imgPath: servicesInstant,
          heading: "Instant, Automated, Secure",
          content:
            "Buy  your medicines with our mobile application with a simple delivery system",
        },
        {
          imgPath: servicesPdfWhatsapp,
          heading: "PDF, App, E-mail, Whatsapp",
          content:
            "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          imgPath: servicesMarketing,
          heading: "Unique Whitelabel - Marketing",
          content:
            "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          imgPath: servicesAffordable,
          heading: "Special Corporate Offerings",
          content:
            "You can get 24/7 urgent care for yourself or your children and your lovely family",
        },
        {
          imgPath: servicesCorporateOfferings,
          heading: "Affordable & Doctor-friendly",
          content: "Track and save your medical history and health data",
        },
      ],
      backgroundImage: servicesBackground

    },
    Bytes: {
      header: {
        heading: [{ text: "NirogGyan Bytes" }],
      },
      videoLinks: [
        "https://www.youtube.com/embed/H0cHIewcQ2M/",
        "https://www.youtube.com/embed/MlLAXpoxNvQ/",
        "https://www.youtube.com/embed/L4aPen8hCL8/",
      ],
    },
    Report: {
      contentLeft: {
        header: {
          heading: "Believe what you see.",
          description: "Checkout our SmartReports below and know the difference",
        },
        footer: {
          textThin: "My Smart Diabetes Report helped me get the timely shock that I needed to correct myself. Thank you!",
          textBold: "Zubair Ahmed, veteran journalist"
        },
        cardsList: [
          {
            imagePath: reportVitamin,
            name: "Vitamin"
          },
          {
            imagePath: reportKidney,
            name: "Kidney"
          },
          {
            imagePath: reportElectrolyte,
            name: "Electrolyte"
          },
          {
            imagePath: reportDiabetes,
            name: "Diabetes"
          }
        ]
      },
      contentRight: {
        imagePath: reportBigReport
      }
    },
    Achievements: {
      backgroundImage: {
        left: achievementsBackground1,
        right: achievementsBackground2,
      },
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
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "I've been a firm supporter of this concept since long. Fortunately, we at FamPhy got to work with the bright NirogGyan team to provide SmartReports & Analytics to our corporate client.The response was great, and it was an enjoyable experience for us.", imagePath: clientMessage1,
          imagePath: clientMessage2,
          name: "Dr.Soumik Kalita",
          organisation: "Founder, FamPhy"
        },
        {
          message: "I am extremely health conscious and an ex - diabetic.Got my wife and myself tested during the lockdown and was just blown away by these reports.For the first time in my life, I didn’t have to google terms to know about my health.", imagePath: clientMessage1,
          imagePath: clientMessage3,

          name: "Zubair Ahmed",
          organisation: "Journalist, BBC India"
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
