import './USPStrip.css';

const items = [
  {
    stat: '7 dní',
    title: 'Web hotový do týdne',
    desc: 'Od zadání po spuštění obvykle jen 5–7 pracovních dní. Žádné měsíce čekání.',
  },
  {
    stat: 'Zlomek ceny',
    title: 'Bez agenturní režie',
    desc: 'Pracuji sám, bez nákladů na tým a kancelář. Kvalita zůstává, cena klesá.',
  },
  {
    stat: '0 Kč předem',
    title: 'Platíte až po dokončení',
    desc: 'Web nejdřív uvidíte hotový a funkční. Platba přichází až potom, co jste spokojení.',
  },
  {
    stat: 'PC · tablet · mobil',
    title: 'Optimalizace pro všechna zařízení',
    desc: 'Web ladím tak, aby stejně dobře vypadal a fungoval na počítači, tabletu i mobilu.',
  },
];

export default function USPStrip() {
  return (
    <section className="usp">
      <div className="container usp__grid">
        {items.map((item) => (
          <div className="usp__card" key={item.title}>
            <p className="usp__stat">{item.stat}</p>
            <h3>{item.title}</h3>
            <p className="usp__desc">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="container usp__hosting">
        Jediný pravidelný náklad po spuštění je hosting webu - cca 199 Kč / měsíc.
      </p>
    </section>
  );
}
