import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Despre eShop</h1>
        <p>
          La eShop ne dorim să oferim cele mai bune produse și o experiență de cumpărare simplă și rapidă.
        </p>
      </div>

      
        <div className="about-text">
          <h2>Cine suntem?</h2>
          <p>
            eShop este magazinul online unde găsești produse de calitate, la prețuri accesibile. Echipa noastră este pasionată de tehnologie și servicii pentru clienți.
          </p>

          <h2>Misiunea noastră</h2>
          <p>
            Misiunea eShop este să aducem tehnologia mai aproape de tine și să facem cumpărăturile online mai ușoare și mai plăcute.
          </p>

          <h2>De ce să ne alegi?</h2>
          <ul>
            <li>Produse de calitate și verificate</li>
            <li>Livrare rapidă și sigură</li>
            <li>Suport clienți prietenos</li>
            <li>Returnare ușoară și transparentă</li>
          </ul>
      </div>
    </div>
  );
}

export default AboutUs;