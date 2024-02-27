import MainCardItem from "./MainCardItem";

export const items = [
  {
    id: 1,
    thumbnail: "computer.jpg",
    header: "Builder 1",
    title: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlights:
      " Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.8,
    features: ["Documentation", "Esay Use", "Out Of Box"],
    price: "$49.96",
  },
  {
    id: 2,
    thumbnail: "computer.jpg",
    header: "Builder 2",
    title: "SiteCraft 68-Inch Ultimate Web Design Studio",
    description:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    highlights:
      "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations",
    rating: 5.8,
    features: ["Documentation", "Esay Use", "Out Of Box"],
    price: "$49.96",
  },
  {
    id: 3,
    thumbnail: "computer.jpg",
    header: "Builder",
    title: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlights:
      " Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.8,
    features: ["Documentation", "Esay Use", "Out Of Box"],
    price: "$49.96",
  },
  {
    id: 4,
    thumbnail: "computer.jpg",
    header: "CDK",
    title: "CDK Resposive Builder",
    description:
      "An extensive library of widgets and apps, and detailed step-by-step guides",
    highlights:
      "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations",
    rating: 4.8,
    features: ["Documentation", "Easy Use", "Out Of Box"],
    price: "$49.96",
  },
];

function MainCards() {
  return (
    <div className="d-flex flex-column width-1024 mx-auto container gap-10 mt-5">
      {items.map((item) => (
        <MainCardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MainCards;
