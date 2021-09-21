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
import clientMessageBackground from "../home/static/imgs/client-message-background.png"


import featuresBig from "../home/static/imgs/features-big.png"



export default (function () {
  return {

    HeroSection: {
      contentLeft: {
        heading: { line1: "Simplifying", line2: "Medical Reports" },
        description:
          "NirogGyan makes lab tests engaging so that you understand your health better, with easy-to-understand and visual SmartReports. We are B2B and work with healthcare providers.",
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
          line1: <><span style={{ color: "#3567D6", fontWeight: "200" }}>Health Knowledge</span>  +   <b>Modern Design</b></>,
          line2: <b>Combine to give you the most</b>,
          line3: "Understandable Medical Reports",
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
          { text: "The best" },
          { text: "Patient-Engagement Tool", style: { color: "#3567D6", fontWeight: "200" } },
          { text: " out there" }
        ],
        description:
          "We value the organisation that you’ve built. Hence, so many choices for the perfect fit for your use-case.",
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
          textBig: <>4.7 <span style={{ color: "yellow", fontSize: "1.25em" }}>&#9733;</span></>,
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
      },
      backgroundImage: clientMessageBackground,
      cardsList: [
        {
          message: "Lorem 1  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        }
        ,
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        }
        ,
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: clientMessage1,
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        }
      ]

    },
    MailingList: {
      block1: {
        heading: "Subscribe to our mailing list",
        description: "We'll send you updates about NirogGyan",
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
