import { useState } from "react";

const BreadcrumbJoiner = ({ paths }) => {
  return (
    <div>
      {paths.map((path, index) => (
        <span key={index}>
          {path}
          {index !== paths.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

const Breadcrumb = () => {
  const [currentPath, setCurrentPath] = useState([
    "Home",
    "Hosting for all",
    "Hosting",
    "Hosting6",
    "Hosting5",
  ]);

  return (
    <div>
      <BreadcrumbJoiner paths={currentPath} />
    </div>
  );
};

export default Breadcrumb;
