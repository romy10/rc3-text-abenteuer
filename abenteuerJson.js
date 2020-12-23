let geschichte = {
  situationen: [
    {
      id: 0, 
	    auswahlText: "",      
      text:
        "<br> *** Dein Text-Abenteuer ***<br>DU schreibst die Geschichte<br> Von {Name eintragen}",
	    ziele: [1],
    },
    {
      id: 1,
      auswahlText: "Hier geht es los",
      text:
      "Du bist in deinem Zimmer und spielst dein Lieblingsspiel. Plötzlich funkelt und raucht es in in der Ecke links von dir. Du erschrickst dich. Mit einem 'Puff' steht eine Machine in deinem Zimmer, auf der in großen Buchstaben 'FLUXI' drauf steht. Auf der Maschine liegt eine Art Fernbedienung.",
      ziele: [2, 3],
    },
    {
      id: 2,
      auswahlText: "Du nimmst sie und drückst auf einen Knopf",
      text:
      "Die Fernbedienung beginnt noch mehr zu qualmen und spielt laute Musik ab.",
      ziele: [4],
    },
    {
      id: 3,
      auswahlText: "Du versteckst dich unter deiner Bettdecke",
      text:
        "Das Licht der Maschine wird so hell, dass du es durch die Decke sehen kannst. Es funkelt und du hörst laute Musik.",
      ziele: [4],
    },
    {
      id: 4,
      auswahlText: "Plötzlich redet Fluxi mit dir",
      text:
        "Hallo, ich bin Fluxi. Ich bin eine Zeitreise-Maschine. Hast Du Lust auf ein Abenteuer? Wo soll es hingehen?",
      ziele: [7, 8],
    },
    {
      id: 7,
      auswahlText: "Dein erstes Ziel",
      text:
        "Hier schreibst Du die Geschichte weiter. Möchtest du verschiedene Zeitreiseziele anbieten? Du kannst die Leser*innen auch nur an einen Ort schicken.",
      ziele: [9],
    },
    {
      id: 8,
      auswahlText: "Dein zweites Ziel",
      text:
        "Hier kannst Du die Geschichte weiter erzählen.",
      ziele: [9],
    },
    {
      id: 9,
      auswahlText: "Dann geht die Geschichte los",
      text:
        "Erzähle die Geschichte bis zu ihrem Ende.",
      ziele: [],
    },
  ],
};
