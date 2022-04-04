import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div>
          <p className="footer">copyright Ⓒ {year}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
