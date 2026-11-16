// Czas trwania roli liczony kodem z pól "od" i "do" (format RRRR-MM).
// "do": null oznacza rolę trwającą do dnia budowy strony.
export function miesiace(od, doo, teraz = new Date()) {
  const [y1, m1] = od.split('-').map(Number);
  const [y2, m2] = doo
    ? doo.split('-').map(Number)
    : [teraz.getFullYear(), teraz.getMonth() + 1];
  return (y2 - y1) * 12 + (m2 - m1) + 1; // oba miesiące liczone włącznie
}

function odmiana(n, jedn, dwa, wiele) {
  if (n === 1) return jedn;
  const d = n % 10;
  const dd = n % 100;
  if (d >= 2 && d <= 4 && !(dd >= 12 && dd <= 14)) return dwa;
  return wiele;
}

export function opisCzasu(m) {
  const lata = Math.floor(m / 12);
  const mies = m % 12;
  const czesci = [];
  if (lata) czesci.push(`${lata} ${odmiana(lata, 'rok', 'lata', 'lat')}`);
  if (mies) czesci.push(`${mies} ${odmiana(mies, 'miesiąc', 'miesiące', 'miesięcy')}`);
  return czesci.join(' ');
}

export function etykieta(od) {
  const [y, m] = od.split('-');
  return `${m}.${y}`;
}
