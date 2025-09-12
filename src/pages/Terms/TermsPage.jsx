import React from "react";
import { Link } from "react-router-dom";
import "./TermsPage.css";

export default function TermsPage() {
  return (
    <div className="terms-container">
      <h1>Termeni și Condiții</h1>
      
      <p>Bine ai venit la eShop! Te rugăm să citești cu atenție acești termeni înainte de a utiliza site-ul nostru.</p>
      
      <h2>1. Utilizarea site-ului</h2>
      <p>
        Accesul și utilizarea site-ului nostru implică acceptarea acestor termeni. Nu poți folosi site-ul pentru activități ilegale sau neautorizate.
      </p>

      <h2>2. Produse și comenzi</h2>
      <p>
        Produsele afișate pot să difere de imaginile de pe site. Prețurile și disponibilitatea pot fi modificate fără notificare prealabilă.
      </p>

      <h2>3. Politica de returnare</h2>
      <p>
        Returnarea produselor se face conform legilor în vigoare și politicii noastre interne. Te rugăm să ne contactezi pentru detalii.
      </p>

      <h2>4. Confidențialitate</h2>
      <p>
        Datele tale personale sunt protejate și nu vor fi distribuite terților fără consimțământul tău.
      </p>

      <p>Mulțumim că folosești eShop și că respecți termenii și condițiile noastre!</p>

      <Link to="/" className="back-link">⬅ Înapoi la magazin</Link>
    </div>
  );
}