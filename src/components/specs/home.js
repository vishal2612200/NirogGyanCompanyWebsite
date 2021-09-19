import * as path from "path";

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
        imagePath: path.join(process.env.PUBLIC_URL, "home", "hero-image.png"),
      },
      linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },
    Brand: {
      header: {
        heading: [{ text: "Trusted by the best" }, { text: "Healthcare Brands", style: { color: "#3567D6", fontWeight:"200" } }],
      },
      trustedBrandsLogoImages: [
        path.join(process.env.PUBLIC_URL, "home", "brand-crelio-health.png"),
        path.join(process.env.PUBLIC_URL, "home", "brand-dr-dang-labs.png"),
        path.join(process.env.PUBLIC_URL, "home", "brand-medlife.png"),
        path.join(process.env.PUBLIC_URL, "home", "brand-niramaya.png"),
      ],
      whatsapp: path.join(process.env.PUBLIC_URL, "home", "brand-whatsapp-icon.svg"),

    },
    Features: {
      contentLeft: {
        header: {
          line1: <><span style={{ color: "#3567D6" }}>Health Knowledge</span>  +   <b>Modern Design</b></>,
          line2: <b>Combine to give you the most</b>,
          line3: "Understandable Medical Reports",
        },
        cardsData: [
          {
            imagePath: path.join(process.env.PUBLIC_URL, "home", "features-item-1.png"),
            textThin: "Software covering 250+",
            textBold: "Pathology Biomarkers",
          },
          {
            imagePath: path.join(
              process.env.PUBLIC_URL,
              "home", "features-item-2.png"
            ),
            textThin: "Knowledge Bank based by",
            textBold: "Evidence-backed, Vetted Content",
          },
          {
            imagePath: path.join(
              process.env.PUBLIC_URL,
              "home",
              "features-item-3.png"
            ),
            textThin: "Add-ons : Multi - language",
            textBold: "Content, Graphs, Analytics",
          },
        ],
      },
      contentRight: {
        imagePath: path.join(process.env.PUBLIC_URL, "home", "features-big.png")
      },
    },

    Services: {
      header: {
        heading: [{ text: "The best" }, { text: "Patient-Engagement Tool", style: { color: "#3567D6", fontWeight:"200" } }, { text: " out there" }],
        description:
          "We value the organisation that you’ve built. Hence, so many choices for the perfect fit for your use-case.",
      },
      cardsList: [
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "home", "services-templates.png"
          ),
          heading: "Multiple Reporting Templates",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "home", "services-instant.png"
          ),
          heading: "Instant, Automated, Secure",
          content:
            "Buy  your medicines with our mobile application with a simple delivery system",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "home", "services-pdf-whatsapp.png"
          ),
          heading: "PDF, App, E-mail, Whatsapp",
          content:
            "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "home", "services-marketing.png"
          ),
          heading: "Unique Whitelabel - Marketing",
          content:
            "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "home", "services-affordable.png"
          ),
          heading: "Special Corporate Offerings",
          content:
            "You can get 24/7 urgent care for yourself or your children and your lovely family",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "home", "services-corporate-offerings.png"
          ),
          heading: "Affordable & Doctor-friendly",
          content: "Track and save your medical history and health data",
        },
      ],
      backgroundImage: path.join(process.env.PUBLIC_URL, "home", "services-background.png"),

    },
    Bytes: {
      header: {
        heading: [{ text: "NirogGyan Bytes" }],
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
          heading:  "Believe what you see." ,
          description: "Checkout our SmartReports below and know the difference",
        },
        footer: {
          textThin: "My Smart Diabetes Report helped me get the timely shock that I needed to correct myself. Thank you!",
          textBold: "Zubair Ahmed, veteran journalist"
        },
        cardsData: [
          {
            imagePath: path.join(process.env.PUBLIC_URL, "home", "report-vitamin.png"),
            name: "Vitamin"
          },
          {
            imagePath: path.join(process.env.PUBLIC_URL, "home", "report-kidney.png"),
            name: "Kidney"
          },
          {
            imagePath: path.join(process.env.PUBLIC_URL, "home", "report-electrolyte.png"),
            name: "Electrolyte"
          },
          {
            imagePath: path.join(process.env.PUBLIC_URL, "home", "report-diabetes.png"),
            name: "Diabetes"
          }
        ]
      },
      contentRight: {
        imagePath: path.join(process.env.PUBLIC_URL, "home", "report-big-report.png"),
      }
    },
    Achievements: {
      backgroundImage: {
        left: path.join(process.env.PUBLIC_URL, "home", "achievements-background1.png"),
        right: path.join(process.env.PUBLIC_URL, "home", "achievements-background2.png"),
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
      backgroundImage: path.join(process.env.PUBLIC_URL, "home", "client-message-background.png"),
      cardsList: [
        {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: path.join(process.env.PUBLIC_URL, "home", "client-message-1.png"),
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
          imagePath: path.join(process.env.PUBLIC_URL, "home", "client-message-1.png"),
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
