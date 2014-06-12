Openlayers bootcamp
===================

#Introduktion
Den här bootcampen går ut på att använda [OpenLayers](http://openlayers.org/), lära sej detta bibliotek för att hämta ut kartor och modifiera vyn med olika typer av föremål av SVG typ. Applikationen kommer att använda sej av [AngularJS](http://www.angularjs.org) för att bygga upp en bra struktur för en modern Single Page App. Applikationen ska koppla ihop sej med en [NodeJS](http://nodejs.org) server med en [SocketIO](http://socket.io/) implementation för att simulera en framtida Windows lösning. 


Projekt beskrivning
--------------------
Projektet kommer att innehålla en del tekniska svårigheter. (Denna bootcamp kommer dock inte adressera samtliga)
* Placera object (SVG) på en karta med precision.
* Hantera 3D-vyer med OpenLayers.
* Geografisk konvertering av punkter i 2D och 3D planet.
* Tweaka in SVG filer på en karta. 
* Modifiera SVG-filer med avseende på färg.
* Hitta hörnen i SVG-filerna.
* Sätta upp en tillförlitlig och robust MVVM struktur för att alltid behålla korrekt model i vyn.
* Wrappa denna lösning i [Microsoft Foundation Class Library](http://en.wikipedia.org/wiki/Microsoft_Foundation_Class_Library) **(LOL)**


Dagsagendan
--------------------

* Sätta upp en NodeJS server med en socket.io implementation som ska kunna signalera när ett alarm har gått på vårat kontor, samt att kunna behålla modellen. 
* Rita upp en planlösning av vårat kontor på en karta, denna planlösning ska kunna zoomas in, behålla rätt proportioner på denna karta vid inzoomning samt stödja rotation av kartvyn utan att några föremål tappar sin proportion eller geografiska position (EXTRA HANTERA 3D!!!).
* Sätta olika typer av objekt, t.ex. kortläsare, dörrar, övervakningskameror och hisschakt på denna planlösning. Dvs. modifera hur kontoret är uppsatt i realtid.
* Få tillgång till information om att en ful inbrottstjuv håller på att bryta sej in på kontoret och stjäl företagsinformation och våra kära burkar.

How-to
-----------------------
* Clona git-repot
* Installera node och npm
* Navigera in i webapp/ mappen och skriv 'npm install', du kommer nu få [grunt](http://gruntjs.com/) som hanterar bygget av less filerna och gör om html till js-template filer.
* Kör 'grunt watch' i den mappen
* Meddela vad ni har för github konto så ni blir contributors och får pusha till master.
