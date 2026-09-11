import './Contact.css';
import { Mail, MessageCircle } from 'lucide-react';
import { contact } from '../content/contact';

export default function Contact() {
  return (
    <section id="kontakt" className="contact">
      <div className="container">
        <span className="eyebrow">Domluvme se</span>
        <h2 className="contact__title">
          Máte nápad na web?
          <br />
          Napište - a platíte, až se vám bude líbit.
        </h2>
        <p className="contact__note">
          Žádná záloha, žádné riziko. Web postavím, ukážu vám ho hotový
          a fakturu pošlu až po Vaší vyslovené spokojenosti.
        </p>

        <div className="contact__links">
          <a className="contact__link" href={contact.emailHref}>
            <Mail size={18} />
            {contact.email}
          </a>
          <a className="contact__link" href={contact.whatsappHref} target="_blank" rel="noopener">
            <MessageCircle size={18} />
            WhatsApp · {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
