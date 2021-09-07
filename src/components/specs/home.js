import * as path from "path";

export default (function () {
  return {

    HeroSection: {
      info: {
        heading: { line1: "Simplifying", line2: "Medical Reports" },
        description:
          "NirogGyan makes lab tests engaging so that you understand your health better, with easy-to-understand and visual SmartReports. We are B2B and work with healthcare providers.",
        buttons: { services: "our Services", watchVideo: "Watch Video" },
      },
      imagePath: path.join(process.env.PUBLIC_URL, "homepage", "hero-image.png"),
    },
    Brand: {
      heading: "Trusted HealthCare Brands",
      trustedBrandsLogoImages: [
        path.join(process.env.PUBLIC_URL, "homepage", "brand-crelio-health.png"),
        path.join(process.env.PUBLIC_URL, "homepage", "brand-dr-dang-labs.png"),
        path.join(process.env.PUBLIC_URL, "homepage", "brand-medlife.png"),
        path.join(process.env.PUBLIC_URL, "homepage", "brand-niramaya.png"),
      ],
    },
    Features: {
      contentLeft: {
        header: {
          line1: ["Health Knowledge", "   +   ", "Modern Design"],
          line2: "combine to give you the most",
          line3: "Understandable Medical Reports",
        },
        cardsData: [
          {
            imagePath: path.join(process.env.PUBLIC_URL, "homepage", "features-item-1.png"),
            textThin: "Software covering 250+",
            textBold: "Pathology Biomarkers",
          },
          {
            imagePath: path.join(
              process.env.PUBLIC_URL,
              "homepage", "features-item-2.png"
            ),
            textThin: "Knowledge Bank based by",
            textBold: "Evidence-backed, Vetted Content",
          },
          {
            imagePath: path.join(
              process.env.PUBLIC_URL,
              "homepage",
              "features-item-3.png"
            ),
            textThin: "Add-ons : Multi - language",
            textBold: "Content, Graphs, Analytics",
          },
        ],
      },
      contentRight: {
        imagePath: path.join(process.env.PUBLIC_URL, "homepage", "features-big.png")
      }
    },

    Services: {
      content: {
        heading: "The best Patient-Engagement Tool out there",
        description:
          "We value the organisation that you’ve built. Hence, so many choices for the perfect fit for your use-case.",
      },
      servicesList: [
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "/services/services-templates.png"
          ),
          heading: "Multiple Reporting Templates",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "homepage", "services-instant.png"
          ),
          heading: "Instant, Automated, Secure",
          content:
            "Buy  your medicines with our mobile application with a simple delivery system",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "homepage", "services-pdf-whatsapp.png"
          ),
          heading: "PDF, App, E-mail, Whatsapp",
          content:
            "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "homepage", "services-marketing.png"
          ),
          heading: "Whitelabel + Marketing",
          content:
            "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "homepage", "services-affordable.png"
          ),
          heading: "Special Corporate Offerings",
          content:
            "You can get 24/7 urgent care for yourself or your children and your lovely family",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "homepage", "services-corporate-offerings.png"
          ),
          heading: "Affordable & Doctor-friendly",
          content: "Track and save your medical history and health data",
        },
      ],
    },
    Bytes: {
      content: {
        heading: "NirogGyan Bytes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur quas repellendus numquam assumenda, mollitia possimus similique sed modi, iure dicta velit, quaerat voluptatibus saepe aliquam in libero est commodi.",
      },
      videoLinks: [
        "https://www.youtube.com/embed/H0cHIewcQ2M",
        "https://www.youtube.com/embed/MlLAXpoxNvQ",
        "https://www.youtube.com/embed/L4aPen8hCL8",
      ],
    },

    Report: {
      contentLeft: {
        header: {
          heading: "Believe what you see.",
          description: "Checkout our SmartReports below and know the difference",
        },
        cardsData: [
          {
            imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-vitamin.png"),
            name: "Vitamin"
          },

          {
            imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-kidney.png"),
            name: "Kidney"
          },
          {
            imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-electrolyte.png"),
            name: "Electrolyte"
          },
          {
            imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-diabetes.png"),
            name: "Diabetes"
          }
        ]
      },
      contentRight: {
        imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-big-report.png"),
      }
    },
    Achievements: {
      cardsData: [
        {
          textBig: "40+",
          textSmall: "Labs Running",
        },
        {
          textBig: "300,000",
          textSmall: "Reports Generated",
        },

        {
          textBig: <>4.7 &#x2B50;</>,
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
        heading: "What Our Clients Say",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
      },
      backgroundImage: path.join(process.env.PUBLIC_URL, "homepage", "client-message-background.png"),
      cardsData: [
        {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: path.join(process.env.PUBLIC_URL, "homepage", "client-message-1.png"),
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        }
        , {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: path.join(process.env.PUBLIC_URL, "homepage", "client-message-1.png"),
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        }
      ]

    },
    MailingList: {
      block1: {
        heading: "Subscribe to our mailing list",
        description: "We'll send you updates about NirogGyan",
        footer: ["Get In Touch", ".", "contact@niroggyan.com"],
      },
      block2: {
        placeholderText: "Enter your email address",
      },
      block3: {
        buttonText: "Subscribe",
      },
      contentLeft: {
        heading: "Subscribe to our mailing list",
        description: "We'll send you updates about NirogGyan",
        footer: ["Get In Touch", ".", "contact@niroggyan.com"],
      },
      contentRight: {
        placeholderText: "Enter your email address",
        buttonText: "Subscribe",
      }
    },

  };
})();
