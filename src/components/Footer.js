import React from "react";

export const Footer = () => {
  let year = new Date();

  return (
    <footer>
      <div className="ui container">
        Copyright &copy; {year.getFullYear} All Rights Reserved by
         <a href="https://github.com/swilltec/would-you-rather"> Swill</a>
      </div>
    </footer>
  );
};
