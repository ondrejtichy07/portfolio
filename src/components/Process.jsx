import './Process.css';

const steps = [
  {
    n: '01',
    title: 'Nezávazná poptávka',
    desc: 'Napíšete mi, co potřebujete a pro jaký obor. Probereme rychle přes whatsapp nebo email.',
  },
  {
    n: '02',
    title: 'Návrh do pár dní',
    desc: 'Připravím vzhled a strukturu webu na míru vaší poptávce.',
  },
  {
    n: '03',
    title: 'Vývoj do týdne',
    desc: 'Web postavím, naplním obsahem a odladím na mobilu, počítači, i tabletu.',
  },
  {
    n: '04',
    title: 'Platba až po spokojenosti',
    desc: 'Hotový web vám představím. Zaplatíte teprve poté, co se vám bude líbit.',
  },
];

export default function Process() {
  return (
    <section id="proces" className="process">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Jak to probíhá</span>
            <h2 className="section-title">Čtyři kroky od nápadu k živému webu</h2>
          </div>
        </div>

        <div className="process__list">
          {steps.map((step) => (
            <div className="process__item" key={step.n}>
              <span className="process__n">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
