[![Statusübersichtsabzeichen](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)
## Anweisungen für Schüler:

### Erstelle eine ToDoListe

- Der Benutzer sollte die Möglichkeit haben, einen _listItem_ über das Eingabefeld hinzuzufügen.
- Weise dem Eingabefeld den Platzhalter "Add a task" zu.
- Die _ListOfAllItems_ sollte für den Benutzer angezeigt werden.
- Der Nutzer sollte die Möglichkeit haben, einen _listItem_ zu löschen und als erledigt zu markieren.
- Starte das Projekt mit create react app.
- Hier ist ein Bild als Referenz:
    ![Mock-up-image](Mock-up-image.png)

**Bonus**

- Der Benutzer sollte die Möglichkeit haben, einen Eintrag zu bearbeiten.
- Implementiere einen reaktiven Übergang/Animation, wenn du einen Eintrag in die Liste einfügst.
- Der Nutzer sollte einen Eintrag hinzufügen können, indem er sowohl die Eingabetaste als auch die Schaltfläche drückt.

### Regeln

- Dies ist eine individuelle Aufgabe.
- Abgabetermin: 2 Stunden.
- Verwende **Git richtig**
- Dokumentiere deinen Code mit Kommentaren.

[//]: # (autograding info start)
## Ergebnisse


### SPA - Aufgabenliste

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | 'Add a task' Schaltfläche sollte auf der Seite vorhanden sein |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Eingabefeld mit einem 'Platzhalter', der auf 'Add a task' gesetzt ist Sollte auf der Seite vorhanden sein |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Sollte dem Benutzer die Möglichkeit geben, eine Aufgabe hinzuzufügen |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Sollte es dem Benutzer ermöglichen, eine Liste aller Aufgaben auf dem Bildschirm zu sehen |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | Sollte es dem Benutzer ermöglichen, Aufgaben als erledigt zu markieren |
| ![Status](../../blob/badges/.github/badges/autograding/status5.svg) | Sollte es dem Benutzer erlauben, Aufgaben zu löschen |



[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/SPA-ToDoList/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-ToDoList&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FSPA-ToDoList)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/SPA-ToDoList/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
