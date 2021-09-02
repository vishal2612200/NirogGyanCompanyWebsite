import * as path from "path";

export default (function () {
  return {
    NavBar: {
      navLinks: ["Home", "About Us", "How It Works", "Blog", "FAQs"],
      logoImg: path.join(process.env.PUBLIC_URL, "/logo-icon.png"),
    },
    HeroSection: {
      info: {
        heading: { line1: "Simplifying", line2: "Medical Reports" },
        description:
          "NirogGyan makes lab tests engaging so that you understand your health better, with easy-to-understand and visual SmartReports. We are B2B and work with healthcare providers.",
        buttons: { services: "our Services", watchVideo: "Watch Video" },
      },
      imagePath: path.join(process.env.PUBLIC_URL, "/hero-image.png"),
    },
    Brand: {
      heading: "Trusted HealthCare Brands",
      trustedBrandsLogoImages: [
        path.join(process.env.PUBLIC_URL, "brands", "crelio-health.png"),
        path.join(process.env.PUBLIC_URL, "brands", "dr-dang-labs.png"),
        path.join(process.env.PUBLIC_URL, "brands", "medlife.png"),
        path.join(process.env.PUBLIC_URL, "brands", "niramaya.png"),
      ],
    },
    Features: {
      content: {
        heading: {
          line1: ["Health Knowledge", "+", "Modern Design"],
          line2: "combine to give you the most",
          line3: "Understandable Medical Reports",
        },
        featureList: [
          {
            imagePath: path.join(
              process.env.PUBLIC_URL,
              "/features/features-item-1.png"
            ),
            textThin: "Software covering 250+",
            textBold: "Pathology Biomarkers",
          },
          {
            imagePath: path.join(
              process.env.PUBLIC_URL,
              "/features/features-item-2.png"
            ),
            textThin: "Knowledge Bank based by",
            textBold: "Evidence-backed, Vetted Content",
          },
          {
            imagePath: path.join(
              process.env.PUBLIC_URL,
              "/features/features-item-3.png"
            ),
            textThin: "Add-ons : Multi - language",
            textBold: "Content, Graphs, Analytics",
          },
        ],
      },
      imagePath: path.join(
        process.env.PUBLIC_URL,
        "/features/features-big.png"
      ),
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
            "/services/services-instant.png"
          ),
          heading: "Instant, Automated, Secure",
          content:
            "Buy  your medicines with our mobile application with a simple delivery system",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "/services/services-pdf-whatsapp.png"
          ),
          heading: "PDF, App, E-mail, Whatsapp",
          content:
            "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "/services/services-marketing.png"
          ),
          heading: "Whitelabel + Marketing",
          content:
            "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "/services/services-affordable.png"
          ),
          heading: "Special Corporate Offerings",
          content:
            "You can get 24/7 urgent care for yourself or your children and your lovely family",
        },
        {
          imgPath: path.join(
            process.env.PUBLIC_URL,
            "/services/services-corporate-offerings.png"
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
  };
})();
