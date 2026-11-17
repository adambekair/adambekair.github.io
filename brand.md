# Wygląd strony: „tabelka rysunkowa"

Jedno źródło prawdy o wyglądzie. Zmiany w CSS najpierw tutaj.

## Idea
Strona wygląda jak arkusz projektu: papier techniczny, tabelka rysunkowa z danymi, ponumerowane sekcje, żółty znacznik jak linia na jezdni. Ma być rzeczowa i spokojna, bez ozdobników.

## Kolory (3 plus papier)
- Papier (tło): `#F6F7F9`, z bardzo delikatną siatką 32 px
- Tusz (tekst, kreski): `#0E1116`
- Przygaszony (opisy, daty): `#4B525C`
- Znacznik (jedyny akcent): `#FFC400`, tylko na przycisku, pasku przy zdaniu propozycji wartości i podkreśleniach linków. Tekst na żółtym zawsze w kolorze tuszu.

Zakazane: krem i beże, terakota, gradienty, cienie miękkie, glassmorphism, emoji.

## Typografia
- Archivo 400, 700, 800: tekst i nagłówki (nie Inter)
- IBM Plex Mono 400, 500: etykiety, daty, numery sekcji, wielkie litery z rozstrzeleniem
- Fonty hostowane lokalnie przez pakiety `@fontsource`, bez zewnętrznych zasobów
- H1: ok. 4,6 rem na desktopie, 2,5 rem na telefonie, ciasny odstęp

## Układ
- Szerokość 62 rem. Sekcje: etykieta po lewej (13 rem), treść po prawej. Na telefonie jedna kolumna.
- Kreski 2 px w kolorze tuszu między sekcjami. Numeracja `01 /`, `02 /` z licznika CSS.
- Tabelka rysunkowa pod pierwszym ekranem: cztery komórki z faktami.
- Podstrony zadań: wąska kolumna 44 rem.

## Zasady
- Pierwszy ekran: dla kogo, co dostaje, przycisk. Jedno wezwanie do działania (LinkedIn).
- Ruch: tylko reakcja przycisku na najechanie, wyłączona przy `prefers-reduced-motion`.
- Kontrast tekstu co najmniej WCAG AA. Fokus klawiatury widoczny (kontur 3 px).
- Zdjęcie: własne, z budowy, bez twarzy i dokumentów, bez EXIF. Na razie brak.
- Nie dodawać nowych kolorów ani fontów bez zmiany tego pliku.
