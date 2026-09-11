import './Footer.css';
import { contact } from '../content/contact';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <span>© {new Date().getFullYear()} {contact.name}</span>
        <span>Tvorba webů pro malé podniky</span>
      </div>
    </footer>
  );
}
