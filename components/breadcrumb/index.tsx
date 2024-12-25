import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();

  // Split the pathname into segments and filter out any empty strings, initialize each word and replace hyphens with spaces
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment)
    .map((segment) =>
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );

  // Capitalize the first letter of a string
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Create an array of links for the breadcrumbs
  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`.toLowerCase().replace(/\s/g, "-");

    // If it's the last segment, just return the capitalized text
    if (index === pathSegments.length - 1) {
      return (
        <span key={path} className="text-primary">
          {capitalizeFirstLetter(segment)}
        </span>
      );
    }

    // Otherwise, return a link
    return (
      <span key={path} className="text-secondary">
        <Link href={path}>{capitalizeFirstLetter(segment)}</Link>
        {" / "}
      </span>
    );
  });

  return (
    <div className="breadcrumb">
      {/* If the pathname is root, show "Dashboard" */}
      {pathSegments.length === 0 ? (
        <span className="text-primary">Dashboard</span>
      ) : (
        breadcrumbLinks
      )}
    </div>
  );
};

export default Breadcrumb;
