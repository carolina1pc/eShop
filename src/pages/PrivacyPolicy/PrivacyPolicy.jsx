import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <h1>Politica de Confidențialitate</h1>
      <p>
        La <strong>eShop</strong> respectăm confidențialitatea vizitatorilor și clienților noștri. 
        Această pagină explică modul în care colectăm, folosim și protejăm datele tale.
      </p>

      <h2>1. Informații colectate</h2>
      <p>
        Putem colecta informații personale precum: nume, adresă de email, 
        număr de telefon, adresă de livrare și detalii de plată atunci când 
        plasezi o comandă sau te înregistrezi pe site.
      </p>

      <h2>2. Cum folosim datele</h2>
      <ul>
        <li>Pentru procesarea și livrarea comenzilor</li>
        <li>Pentru îmbunătățirea experienței de cumpărare</li>
        <li>Pentru a trimite notificări și oferte speciale</li>
        <li>Pentru a respecta obligațiile legale</li>
      </ul>

      <h2>3. Securitatea datelor</h2>
      <p>
        Toate datele sunt stocate în condiții de siguranță. 
        Utilizăm tehnologii moderne de criptare și acces restricționat.
      </p>

      <h2>4. Partajarea informațiilor</h2>
      <p>
        Nu vindem și nu închiriem datele tale către terți. 
        Informațiile pot fi partajate doar cu parteneri de încredere 
        (ex. firme de curierat) strict pentru procesarea comenzilor.
      </p>

      <h2>5. Drepturile utilizatorilor</h2>
      <p>
        Ai dreptul să soliciți accesul, corectarea sau ștergerea datelor tale 
        personale oricând. Pentru a face acest lucru, te rugăm să ne contactezi 
        la <strong>contact@eshop.ro</strong>.
      </p>

      <h2>6. Actualizări</h2>
      <p>
        Politica de confidențialitate poate fi actualizată periodic. 
        Te încurajăm să consulți această pagină regulat.
      </p>

      <p className="last-updated">Ultima actualizare: Septembrie 2025</p>
    </div>
  );
}

export default PrivacyPolicy;