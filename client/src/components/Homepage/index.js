import React from "react";
import "../../assets/Styles/Homepage/homepage.css";
import BackgroundSlider from "react-background-slider";

import employee1 from "../../assets/img/employee1.jpg";
import employee2 from "../../assets/img/employee2.jpg";
import employee3 from "../../assets/img/employee3.jpg";
import employee4 from "../../assets/img/employee4.jpg";
import employee5 from "../../assets/img/employee5.jpg";

const imageArr = [employee1, employee2, employee3, employee4, employee5];

function Homepage() {
  return (
    <div className="homePage">
        <h1>Employee Management Site</h1>
    </div>
  );
}

export default Homepage;
