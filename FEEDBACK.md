# Recenzja

W paru miejscach wprowadziłem małe przykładowe zmiany, które mają odzwierdzielić niektóre idee wymienione niżej. Są to bardziej koncepcje, niż zmiany gotowe do wprowadzenia na produkcję.

## Konwencja

Warto przyjąć wspólną konwencję nazewnictwa dla plików, folderów, zmiennych, itp. Pozwoliłoby to uniknąć takich sytuacji jak raz używanie camelCase, raz snake_case, raz PascalCase i jeszcze wielu innych, np.  
`HallOfFame_mark.png` a z drugiej strony `bg-image.jpg` lub `over_view.PNG`  
`modal_window/modalWindow.js` a z drugiej strony `MainMenu/MainMenu.js` lub `hall_of_fame/hall_of_fame.js`


## Repozytorium

Podobnie jak wspomniane wyżej, branche nie mają wspólnej konwencji nazewnictwa. Niektóre branche nie mówią o tym, co zostało na nich zrobione (`VivienneSoldier-patch-1`). Lepiej nie używać skrótów, jeżeli nie jest to konieczne (`bg`).

Podobnie, jednolita konwencja przydałaby się przy nazywaniu commitów. Niektóre zaczynają się z małej litery (`clearing app`), niektóre z dużej (`Add callback function`). Podobnie, możnaby ustalić jedną konwencję co do stylu wypowiedzi, np. pisać czasowniki bez `ing`, w czasie teraźniejszym. W wiadomościach warto opisywać, co zostało zrobione (`maybe`, `fix`, `small fix`, `one more time`, `change`), żeby inny deweloper nie musiał przed code review najpierw odgadywać, na czym polegała zmiana. Nie warto używać emotek i żartów w wiadomościach, które powinny być jak najbardziej informatywne (`correct right typo :)`).

Warto usuwać zmergowane już branche, które nie będą dalej rozwijane, żeby niepotrzebnie nie robiły bałaganu na repo. Może być ciężko znaleźć aktualnie rozwijane przez nas branche.

## Struktura aplikacji

Zauważyłem, że dość dużo plików znajduje się w folderze root. Posiadając folder taki jak `public` na statyczne pliki, lepszym pomysłem byłoby umieszczenie tam wszystkich takich plików (`index.html`, `style.css`, `favicon.svg`). 

Dobrze, że dodaliście plik `.eslintcache` do `.gitignore`, wypadałoby go również usunąć z repo.

## Kod

`console.log()` jest wygodnym narzędziem do debugowania aplikacji, jednak kod produkcyjny nie powinien mówić do użytkownika.

Lepiej, gdy to możliwe, zamiast komentarzy w kodzie wydzielać odpowiednio nazwane funkcje. Komentarz w kodzie nie jest w żaden sposób walidowany i w prosty sposób po przejściu przez paru deweloperów może nagle znaleźć się w miejscu, którego zupełnie on nie dotyczy i jeszcze bardziej zaciemnić kod. (przykład w `src/components/gameOverWindow/gameOverWindow.js`). Czasem zaznaczaliście gdzie komentarz się kończy i zaczyna, a raz nie. W pierwszym przypadku, będziemy zmuszeni w razie potrzeby zmienić komentarz w dwóch miejscach, co możemy zapomnieć. W drugim przypadku możemy nie wiedzieć, gdzie kończy się to, czego komentarz dotyczył (komentarz dotyczy wyłącznie jednej linijki? miejsca aż do entera? miejsca aż do kolejnego komentarza? całego pliku do końca?), co ostatecznie zmusi nas i tak do przeanalizowania kodu linijka po linijce.

Niektóre funkcje są bardzo rozległe, przez co kod staje się nieczytelny i skomplikowany, warto byłoby zastanowić się nad wydzieleniem z nich mniejszych, żeby jedna funkcja wykonywała jedną czynność.

Jeżeli jakiś import czy zmienna nie jest używana, to warto je skasować, żeby nie zaciemniały kodu (po co ktoś to zaimportował? będzie to używane? mogę to bezpiecznie usunąć?).

Rzucanie błędów jest świetne, wypadałoby je jeszcze obsługiwać ;) Co jeżeli użytkownik doprowadzi do zdefiniowanego przez was błędu? Aplikacja przestanie działać a użytkownik w najlepszym przypadku dostanie białą ścianę w przeglądarce.

## Inne

Na pewno trudniejszym zadaniem było stworzenie aplikacji z dynamicznie podmienianymi komponentami. Graty, że wam się udało. Moim zdaniem warto jednak było w pierwszym projekcie zaprojektować aplikację MPA, żeby uświadomić sobie jej wady i zalety, a dynamiczne formy zmian stron wprowadzić zgodnie z harmonogramem przy drugim projekcie.

Fajnym pomysłem było dodanie do projektu linterów i formatterów kodu z integracją z huskym.

Bardzo dobra robota, że udało wam się zaimplementować działający projekt z zaledwie połową ekipy ;)
