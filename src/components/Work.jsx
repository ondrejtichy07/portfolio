import './Work.css';
import { ArrowUpRight } from 'lucide-react';
import { work } from '../content/work';

export default function Work() {
  return (
    <section id="prace" className="work">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Vybrané realizace</span>
            <h2 className="section-title">Weby, které už fungují</h2>
          </div>
        </div>

        <div className="work__grid">
          {work.map((item) => {
            const Wrapper = item.href ? 'a' : 'div';
            return (
              <Wrapper
                className="work__card"
                key={item.name}
                {...(item.href
                  ? { href: item.href, target: '_blank', rel: 'noopener' }
                  : {})}
              >
                <div className={`work__thumb${item.tallThumb ? ' work__thumb--tall' : ''}`}>
                  <img src={item.image} alt={`Náhled webu ${item.name}`} loading="lazy" />
                </div>
                <div className="work__body">
                  <span className="eyebrow">{item.tag}</span>
                  <h3>
                    {item.name}
                    {item.href && <ArrowUpRight size={18} />}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
