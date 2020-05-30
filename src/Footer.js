import React from "react";

let footer = [
  "Meisam Erwin Zarghani",
  "https://zarghani.m@gmail.com",
  "0123 456789"
];
const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        {footer.map((foot, index) => (
          <li key={index}>{foot}</li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;