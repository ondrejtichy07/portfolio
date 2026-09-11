import kadernictviImg from '../assets/work/kadernictvi.jpg';
import lenStudioImg from '../assets/work/len-studio.jpg';
import kurtImg from '../assets/work/kurt.jpg';

export const work = [
  {
    tag: 'Kadeřnický salon',
    name: 'Kadeřnictví Beroun',
    desc: 'Web s otevírací dobou a ceníkem, které si salon upravuje sám přes Google Sheets - bez zásahu do kódu.',
    href: 'https://www.kadernictvi-beroun-havlickova.cz',
    image: kadernictviImg,
  },
  {
    tag: 'Kosmetický salon',
    name: 'LEN. studio',
    desc: 'Prezentace ošetření, ceníku a dvou provozoven s rezervací přímo z webu.',
    href: 'https://len-studio.cz',
    image: lenStudioImg,
  },
  {
    tag: 'Bistro',
    name: 'Kurt',
    desc: 'Web bistra u tenisových kurtů ve Svinařích - menu, otevírací doba a atmosféra místa na první pohled.',
    href: 'https://kurt-bistro.cz',
    image: kurtImg,
    tallThumb: true,
  },
];
