const heroImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/hero-image.svg"

const brandAlArab = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-1.jpg"
const brandMax = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-2.jpg"
const brandDang = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-3.jpg"
const brandCrelio = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-4.jpg"
const brandIqvia = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-5.jpg"
const brandItdose = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-6.jpg"
const brandPracto = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-7.jpg"


const brandWhatsappIcon = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/brand-whatsapp-icon.svg"

const featuresItem1 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/features-item-1.png"
const featuresItem2 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/features-item-2.png"
const featuresItem3 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/features-item-3.png"


const servicesPdfWhatsapp = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-pdf-whatsapp.png"
const servicesMarketing = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-marketing.png"
const servicesAffordable = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-affordable.png"
const servicesBackground = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-background.png"
const servicesTemplates = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-templates.png"
const servicesCorporateOfferings = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-corporate-offerings.png"
const servicesInstant = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-instant.png"

const reportVitamin = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-vitamin.png"
const reportKidney = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-kidney.png"
const reportLipid = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-electrolyte.png"
const reportDiabetes = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-diabetes.png"

const reportPdfVitamin = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-pdf-vitamin.png"
const reportPdfKidney = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-pdf-kidney.png"
const reportPdfLiver = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-pdf-diabetes.png"
const reportPdfCovid = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-pdf-lipid.png"

const achievementsBackground = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/achievements-background.svg"

const clientMessage0 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-0.png"
const clientMessage1 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-1.png"
const clientMessage2 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-2.png"
const clientMessage3 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-3.png"
const clientMessage4 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-4.png"
const clientMessage5 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-5.png"
const clientMessageBackground = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-background.png"


const featuresBig = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/features-background.svg"



export default (function () {
  return {
    DocumentHeader: {
      title : "NirogGyan - Smart & Modern Diagnostic Reports for Pathology Labs",
      description : "Simplifying Medical Reports for Pathology Labs & Diagnosis centers. Hospitals can do Rebrand their image with Smart Reports can scale their revenue by 30%.",
      canonical : "https://www.niroggyan.com/",
    },
    HeroSection: {
      contentLeft: {
        heading: { line1: "Simplifying", line2: "Medical Reports" },
        description:
          "For effective healthcare, it is crucial that correct and easily-to-follow medical information reaches patients every time. NirogGyan helps you achieve just that with Smart Reports.",
        buttons: {
          services: {
            text: "All Smart Offerings",
            link: "https://linktr.ee/niroggyan"
          },
          calendly: {
            text: "Interested ?",
            link: "https://calendly.com/niroggyan_reports"
          },
          watchVideo: {
            text: "Watch Video",
            link: "https://linktr.ee/niroggyan"
          }
        }
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
        { imagePath: brandAlArab, altText: "brandAlArab" },
        { imagePath: brandMax, altText: "brandMax" },
        { imagePath: brandDang, altText: "brandDang" },
        { imagePath: brandCrelio, altText: "brandCrelio" },
        { imagePath: brandIqvia, altText: "brandIqvia" },
        { imagePath: brandItdose, altText: "brandItdose" },
        { imagePath: brandPracto, altText: "brandPracto" },
      ],
      whatsapp: { image: { imagePath: brandWhatsappIcon, altText: "brandWhatsapp" }, url: "https://wa.me/917678277891" },


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
          content: "A gamified Health-Check Dashboard for companies to take healthier decisions",
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
        { link: "https://www.youtube.com/embed/7oLpkU2wCRU/", videoId: "7oLpkU2wCRU" },
        { link: "https://www.youtube.com/embed/MlLAXpoxNvQ/", videoId: "MlLAXpoxNvQ" },
        { link: "https://www.youtube.com/embed/H0cHIewcQ2M/", videoId: "H0cHIewcQ2M" },
        { link: "https://www.youtube.com/embed/p7XAjIv7YRI/", videoId: "p7XAjIv7YRI" },
        { link: "https://www.youtube.com/embed/XVKS1rtTkbg/", videoId: "XVKS1rtTkbg" },
        { link: "https://www.youtube.com/embed/L4aPen8hCL8/", videoId: "L4aPen8hCL8" },
      ],
    },
    Report: {
      contentLeft: {
        header: {
          heading: "Believe what you see.",
          description: "Like your favourite musician, we keep taking our offerings to newer heights",
        },
        footer: {
          textThin: "Stop asking medical questions on Whatsapp to those who can't answer everything. Instead, know your biomarkers better after every test.",
          textBold: ""
        },
        cardsList: [
          {
            image: { imagePath: reportVitamin, altText: "vitamin" },
            name: "Vitamin",
            imageIdentity: "vitamin"
          },
          {
            image: { imagePath: reportKidney, altText: "kidney" },
            name: "Kidney",
            imageIdentity: "kidney"
          },
          {
            image: { imagePath: reportLipid, altText: "electrolyte" },
            name: "Lipids",
            imageIdentity: "lipid"
          },
          {
            image: { imagePath: reportDiabetes, altText: "diabetes" },
            name: "Diabetes",
            imageIdentity: "liver"
          }
        ]
      },
      contentRight: {
        vitamin: { imagePath: reportPdfVitamin, altText: "vitamin" },
        lipid: { imagePath: reportPdfCovid, altText: "lipid" },
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
          textSmall: "Rating = Users",
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
          message: "NirogGyan’s smart reports are phenomenal! They provide crystal-clear information to the physician and easy to understand insights to the patients. The team is committed to deliver and their patient centric approach is commendable .",
          image: { imagePath: clientMessage0, altText: "clientMessage0" },
          name: "Dr. Arjun Dang",
          organisation: "Dr Dangs Lab"
        }, {
          message: "I've been a firm supporter of this concept since long. Fortunately, we at FamPhy got to work with the bright NirogGyan team to provide Smart Reports & Analytics to our corporate client.The response was great, and it was an enjoyable experience for us.",
          image: { imagePath: clientMessage2, altText: "clientMessage2" },
          name: "Dr.Soumik Kalita",
          organisation: "Founder, FamPhy"
        }, {
          message: "A wonderful concept to make diagnostic reports legible and easy to understand. NirogGyan has made a great product which is loved by customers. The integration is very easy and the team is super quick to adapt. Loved working with this exceptional team.",
          image: { imagePath: clientMessage4, altText: "clientMessage4" },
          name: "Ashwani Mishra",
          organisation: "Product Manager"
        },
        {
          message: "It seems like yesterday when I met the founders to explore the possibility of providing patient- friendly reports, both to my walk -in and B2B customers.The team kept it sweet & simple.With minimal integration using APIs, we’ve been live since more than a year.",
          image: { imagePath: clientMessage1, altText: "clientMessage1" },
          name: "Sanjeev Malhotra",
          organisation: "Niramaya Pathlab"
        },
        {
          message: "Understanding health data has been always a difficult process, but the way Niroggyan is simplifying health data, helped me understand my health insights better and making life simpler.",
          image: { imagePath: clientMessage5, altText: "clientMessage5" },
          name: "Anita Sharma",
          organisation: "Housewife"
        },
        {
          message: "I am extremely health conscious and an ex - diabetic.Got my wife and myself tested during the lockdown and was just blown away by these reports.For the first time in my life, I didn’t have to google terms to know about my health.",
          image: { imagePath: clientMessage3, altText: "clientMessage3" },
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
      actionurl: "https://www.niroggyan.us1.list-manage.com/subscribe/post?u=a8e8a8e8c9c8c8c8c8c8c8c8c&amp;id=8c8c8c8c8c8c8c8c8c8c8c8c8c",
    },

  };
})();
