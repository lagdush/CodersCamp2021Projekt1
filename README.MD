
# Game Of Throne - QUIZ

### Team:
Mentor - Łukasz Żurawski
* [Donata Bruderek](https://github.com/DonataB)
* [Ewelina Mężyk](https://github.com/EMEZYK)
* [Wioleta Porosa](https://github.com/VivienneSoldier)

## Opis

[DEMO](https://coderscamp-got-quiz.netlify.app/)

Aplikacja webowa działająca w przeglądarce sprawdza wiedzę użytkownika na temat postaci z popularnego serialu HBO "Gra o tron".

Projekt został zrealizowany w ramach pierwszego działu kursu CodersCamp2021. Potwierdzająca praktyczne umiejętności wykorzystania HTML/CSS oraz JavaScript.

Aplikacja zawiera widok desktopowy i jeden tryb gracza.

## Działanie
Na ekranie głównym użytkownik ma do dyspozycji przyciski rozpoczynającę grę oraz informujący o zasadach gry. Powyżej wyświetla się tablica z rankingiem graczy. Rozgrywka rozpoczyna się w momencie wciśnięcia przycisku START. 

![main-view](src/image/main_view.png)

Wraz ze startem gry odpalany jest timer odliczający 60 sekund do zakończenia rundy. Użytkownik ma za zadanie rozpoznać postać na obrazku i wybrać prawidłową odpowiedź. W momencie kliknięcia na wybrany przycisk odpowiedzi, użytkownik dostaje informację o poprawności poprzez podświetlenie przycisku na zielono (odpowiedź prawidłowa) lub czerwono (odpowiedź błędna). Po udzieleniu odpowiedzi automatycznie generowane są kolejne obrazki, aż do końca rundy.

![game-view](src/image/game_view.png)

Po upłynięciu czasu rozgrywka jest przerywana i wyświetla się okno z podsumowaniem. Pojawia się informacja z ilością pytań, na które odpowiedział gracz i procentowy wynik rozgrywki gracza oraz informacje o liczbie poprawnych oraz błędnych odpowiedzi gracza i komputera. Obok użytkownik wpisuje swoje dane  (imię/nick), klikając przycisk CONFIRM informacje o rozgrywce zapisują się w pamięci przeglądarki i są później dostępne do odczytu w tabeli rankingu graczy na ekranie głównym aplikacji. Po tym działaniu użytkownik automatycznie wraca do ekranu startowego.

![over-view](src/image/over_view.png)


## Technologie
* HTML
* CSS
* JavaScript
* Zewnętrzne API
* Figma
* GIT

## Praca zespołowa
Uczestnicy kursu, po zapoznaniu się z wymaganiami  projektowymi, wspólnie wybrali temat quizu oraz samodzielnie wykonali [projekt graficzny](https://www.figma.com/file/Ci9CQShFiF1zXjFTZihJkz/CodersCamp2021.Project.JavaScript.GameOfThrones?node-id=256%3A107) aplikacji w programie Figma. Następnie zespół przystąpił do realizacji tasków dostarczonych przez mentora. Każdy uczestnik sam przypisywał się do zadania i wykonywał poszczególne fragmenty aplikacji, korzystając z wiedzy nabytej na wcześniejszym etapie kursu, rozwiązując bieżące problemy z pomocą informacji wyszukanych w Internecie i/lub mentora. Projekt budowano w systemie kontroli wersji kodu GIT.