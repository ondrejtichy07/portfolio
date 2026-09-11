import './Hero.css';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="hero__dot" />
          Aktuálně přijímám nové zakázky
        </div>

        <h1 className="hero__headline">
          WEBOVKA
          <br />
          ZA TÝDEN.
        </h1>

        <div className="hero__row">
          <div className="hero__note">
            <ArrowDown size={20} />
            <p>
              Weby pro živnostníky a malé podniky -
              <br />
              rychle, osobně a bez agenturní režie.
            </p>
          </div>

          <p className="hero__lockup">
            ONDŘEJ
            <br />
            TICHÝ
          </p>
        </div>
      </div>
    </section>
  );
}
