import './Navbar.css';
import { contact } from '../content/contact';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__grid">
        <span className="navbar__name">{contact.name}</span>
        <span className="navbar__meta">
          Tvorba webů
          <br />
          pro malé podniky
        </span>
        <span className="navbar__meta navbar__meta--location">
          {contact.location.split(' · ')[0]}
          <br />
          {contact.location.split(' · ')[1]}
        </span>
        <nav className="navbar__links">
          <a href="#prace">Práce</a>
          <a href="#proces">Proces</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
