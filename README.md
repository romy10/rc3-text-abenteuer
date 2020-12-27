# rc3-text-abenteuer
Das ist eine Start-Version für dein eigenes Text-Abenteuer beim rc3-Kids-Workshop. 
Hier lernst du Schritt für Schritt wie du ein eigenes Text-Game-Adventure schreibst.

Beispiel Abenteuer hier:
https://abenteuer-im-museum.netlify.app/

## 1. Dateien herunterladen
Klicke hier in Github auf den grünen Button "Code" und dann auf "Download as zip". Das lädt die nötigen Dateien auf deinen Computer herunter. Dort musst du sie noch entpacken.
Wenn die Dateien entpackt sind, dann klicke mal auf index.html. Die Datei sollte sich im Browser öffnen und du siehst, wie das Spiel im Moment aussieht.

## 2. Schreibe deine Geschichte
Öffne mit einem Editor die Datei `abenteuerJson.js`, dort schreibst du deine Geschichte.

Ein Abschnitt besteht immer aus diesen Teilen: 

``` {
      id: 1,
      auswahlText: "Du betrittst das Museum",
      text:
        "Du bist viel zu spät in das alte Museum gekommen. Dir bleibt nur noch wenig Zeit, bis das Museum schließt. Der erste Gong ertönt. Zeit, sich zum Ausgang zu begeben.",
      ziele: [2, 3],
    },
```

**id** - das ist die Nummer des Abschnitts, die kannst du als Ziel angeben
**auswahlText** - das ist der Text, der als Link zum nächsten Schritt angezeigt werden soll
**text** - das ist der eigentliche Text, also ein Stück der Geschichte, das auf dieser Seite angezeigt werden soll
**ziele** - hier gibst du eine Liste von IDs an, deren auswahlText wird dann unter diesem Teil der Geschichte als Auswahlmöglichkeit angezeigt

## 3. CSS - Mache es hübsch
Mit der Datei `monitor.css` kannst du Hintergrund, Schriftart und Farbe passend zu deiner Geschichte auswählen.

## 4. Falls Du möchtest: Veröffentliche deine Geschichte
Frage in jedem Fall eine erwachsene Person, bevor du etwas im Internet veröffentlichst. Außerdem kann es gut sein, dass du bei diesem Schritt Unterstützung gebrauchen kannst.
Macht das also am besten zusammen: 
- Geht zu https://app.netlify.com/ und meldet euch an
- Klickt dann auf Sites und zieht diese Dateien für euer Text-Game per Drag und Drop zu Netlify rüber:

```
abenteuer.js
abenteuerJson.js
index.html
monitor.css
```

- Netlify baut dann euer Text-Game, die Seite bekommt einen zufälligen Namen. Wenn ihr den Namen ändern wollt, dann klickt auf 'Site Settings' und 'Change Site Name'. Ihr könnt dann den Teil eintragen, der vor `.netlify.app` steht, also zum Beispiel `https://emmas-abenteuer.netlify.app` 

Unter dieser Webadresse ist euer Text-Game dann im Internet erreichbar und ihr könnt den Link an eure FreundInnen schicken, damit sie euer Spiel ausprobieren können.

