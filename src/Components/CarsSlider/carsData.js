const cityLogo = "../../assets/testimonials/cityLogo.png";
const careem = "../../assets/testimonials/careemLogo.png";
const talabat = "../../assets/testimonials/talabatLogo.png";
const ajman = "../../assets/testimonials/ajmanLogo.png";
const etisalat = "../../assets/testimonials/esLogo.png";
const miCapital = "../../assets/testimonials/miCapLogo.png";

const comBg1 = "../../assets/company/bgImage/companyB1.png";
const comBg2 = "../../assets/company/bgImage/companyB2.png";
const comBg3 = "../../assets/company/bgImage/companyB3.png";
const comBg4 = "../../assets/company/bgImage/companyB4.png";
const comBg5 = "../../assets/company/bgImage/companyB5.png";
const comBg6 = "../../assets/company/bgImage/companyB6.png";

const comL1 = "../../assets/company/logos/companyL1.png";
const comL2 = "../../assets/company/logos/companyL2.png";
const comL3 = "../../assets/company/logos/companyL3.png";
const comL4 = "../../assets/company/logos/companyL4.png";
const comL5 = "../../assets/company/logos/companyL5.png";
const comL6 = "../../assets/company/logos/companyL6.png";

const Buisness = "../../assets/icons/rakBankBuisness.svg";
const Simplify = "../../assets/icons/rakBankSimplify.svg";
const Insurance = "../../assets/icons/rakBankInsurance.svg";

const HandIcons1 = "../../assets/icons/topBenefits1.svg";
const HandIcons2 = "../../assets/icons/topBenefits2.svg";
const HandIcons3 = "../../assets/icons/topBenefits3.svg";
const HandIcons4 = "../../assets/icons/topBenefits4.svg";

const rating = "../../assets/icons/star.svg";

/**------Hero section------ */
const home1Img = "../../assets/images/home1.png";
const home2Img = "../../assets/images/home2.png";
const home3Img = "../../assets/images/home3.png";

export const data = [
  {
    bgImg: comBg1,
    compLogo: comL1,
    expiryDate: "2022-01-05T00:00:00",
    dealName: "Red Dunes Tourism",
    discount: "50%",
  },
  {
    bgImg: comBg2,
    compLogo: comL2,
    expiryDate: "2021-12-25T00:00:00",
    dealName: "Office Machine",
    discount: "15%",
  },
  {
    bgImg: comBg3,
    compLogo: comL3,
    expiryDate: "2021-12-25T00:00:00",
    dealName: "Business Cars",
    discount: "20%",
  },

  {
    bgImg: comBg3,
    compLogo: comL3,
    expiryDate: "2021-12-25T00:00:00",
    dealName: "Business Cars",
    discount: "20%",
  },
];

export const howITWorksData = [
  {
    heading: "I want to",
    heading2: "setup my",
    heading3: "business.",
  },
  {
    heading: "I want to",
    heading2: "grow my",
    heading3: "business.",
  },
  {
    heading: "I want to",
    heading2: "expand my",
    heading3: "community.",
  },
];

export const topBenifits = [
  {
    heading: "Access Our Marketplace",
    heading2: "To Grow And",
    heading3: "Save.",
    buttonText: "EXplore top deals",
    icon: HandIcons1,
  },
  {
    heading: "Strategic Partners.",
    heading2: "All Help You",
    heading3: "Need. End To",
    heading4: "End.",
    buttonText: "FIND YOUR PARTNERS",
    icon: HandIcons2,
  },
  {
    heading: "Explore Our Community.",
    heading2: "Everyone You Need. Is On",
    heading3: "SMEsouk.",
    buttonText: "Join the Community",
    icon: HandIcons3,
  },
  {
    heading: "SME Toolkits. Everything You ",
    heading2: "Need In One",
    heading3: "Place.",
    buttonText: "EXplore Toolkits",
    icon: HandIcons4,
  },
];

export const testimonials = [
  {
    id: 1,
    companyLogo: careem,
    altText: "Careem Logo",
    roi: "200% ROI",
    npv: null,
    avatar: `https://joeschmoe.io/api/v1/random`,
    name: "Yen Lee",
    role: "CEO, Careem",
    testimonial:
      "SMEsouk helped Careem scale operations, achieving 200% ROI with a payback period of < 6 months.",
  },
  {
    id: 2,
    companyLogo: etisalat,
    altText: "etisalat",
    roi: null,
    npv: "$5.6M NPV",
    avatar: `https://joeschmoe.io/api/v1/male`,
    name: "Zodd",
    role: "CEO, Etisalat",
    testimonial:
      "SMEsouk helped Etisalat reach $5.6M NPV in the first 9 months after partnering SMEsouk.",
  },
  {
    id: 3,
    companyLogo: talabat,
    altText: "talabat",
    roi: null,
    npv: "$8.6M NPV",
    avatar: `https://joeschmoe.io/api/v1/female`,
    name: "Shujoy Bist",
    role: "VP Operations, Talabat",
    testimonial:
      "SMEsouk helped Talabat reach $8.6M NPV in the first 12 months after partnering SMEsouk.",
  },
  {
    id: 4,
    companyLogo: cityLogo,
    altText: "cityLogo",
    roi: "210% ROI",
    npv: null,
    avatar: `https://joeschmoe.io/api/v1/male`,
    name: "Raman",
    role: "COO, City Properties",
    testimonial:
      "SMEsouk helped City Properties reach 210% ROI in the first 8 months after partnering SMEsouk.",
  },
  {
    id: 5,
    companyLogo: ajman,
    altText: "ajman",
    roi: null,
    npv: "$5.23M NPV",
    avatar: `https://joeschmoe.io/api/v1/random`,
    name: "Shujoy Bist",
    role: "VP Operations, Ajman Free Zone",
    testimonial:
      "SMEsouk helped Ajman Free Zone reach $5.23M NPV in the first 12 months after partnering SMEsouk.",
  },
  {
    id: 6,
    companyLogo: miCapital,
    altText: "miCapital",
    roi: "150% ROI",
    npv: null,
    avatar: `https://joeschmoe.io/api/v1/female`,
    name: "Ravi",
    role: "CTO, MI Capital",
    testimonial:
      "SMEsouk helped MI Capital reach 150% ROI in the first 12 months after partnering SMEsouk.",
  },
];

export const greatProducts = [
  {
    heading: "Open your bank account within minutes!",
    logo: Buisness,
    bg: "rgba(218, 0, 33, 0.05);",
    rating: rating,
    buttonText: "explore more",
    totalUserText: "50K users already using this.",
  },
  {
    heading: "Marketplace - From invoicing to payments.",
    logo: Simplify,
    bg: "rgba(175, 234, 242, 0.4)",
    rating: rating,
    buttonText: "explore more",
    totalUserText: "70K users already using this.",
  },
  {
    heading: "Open your Finance account at SMESouk",
    logo: Buisness,
    bg: "rgba(218, 0, 33, 0.05)",
    rating: rating,
    buttonText: "explore more",
    totalUserText: "60K users already using this.",
  },
  {
    heading: "Reliable & quick insurance no hidden fees.",
    logo: Insurance,
    bg: "rgba(255, 245, 213, 0.4);",
    rating: rating,
    buttonText: "explore more",
    totalUserText: "90K users already using this.",
  },
  {
    heading: "Your end-to-end Business Mgnt solution.",
    logo: Simplify,
    bg: "rgba(175, 234, 242, 0.4)",
    rating: rating,
    buttonText: "explore more",
    totalUserText: "30K users already using this.",
  },
];

export const items = [
  {
    id: 1,
    buttonText: "GET STARTED RIGHT NOW",
    heading1: ["Launch", "faster. "],
    heading2: ["Grow", "faster. "],
    heading3: ["Save", "big time. "],
    bgImg: home1Img,
  },
  {
    id: 2,
    buttonText: "RELAVANT CTA TEXT",
    heading1: ["Some", "Other "],
    heading2: ["Tag", "Line "],
    heading3: ["Comes", "Here. "],
    bgImg: home2Img,
  },
  {
    id: 3,
    buttonText: "APPROPRIATE CTA HERE",
    heading1: ["", "A Great "],
    heading2: [" Line of Tag "],
    heading3: ["Goes Here"],
    bgImg: home3Img,
  },
];
