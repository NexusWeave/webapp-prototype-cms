#   webapp-prototype-cms
Dette er en tekniske dokumentasjonen for webapp-prototype-cms.

Dette prosjektet er utviklet for å bevise konseptet (Proof of Concept - PoC) om at et komplekst system som et **Intranett** - normalt bygget med dynamisk teknologi - effektivt kan implementeres ved hjelp av en moderne **Jamstack-arkitektur**


##  Arkitektur og Mål
For å oppnå målet bruker vi følgende kjerneteknologier:
* **11ty (Eleventy)** 
  * 11ty fungerer som vår Static **Site Generator**(**SSG**), som genererer nettsidens HTML-struktur i byggetiden. Dette sikrer at intranettet er ekstremt raskt og ytelsesstrekt.
* **Decap CMS**
  * Gir innholdsredaktørene et brukervennlig grensesnitt for å oppdatere og publisere innholdet på nettsiden, som deretter kan lagres lokalt eller i Git.
* Intranett som SSG
  * Hovedmålet er å demostrere at en SSG-tilnærming er et levedyktig, sikkert og skalerbart fundament for et intranett, ved å flytte dynamisk funksjonalitet til **APIs** og håndtere **autentisering/autorisasjon** via en ekstern tjeneste (f.eks Netlifly)

### Katalogtreet
For å bli kjent med prosjektets oppbygning, er det viktig å forstå hvordan koden og innholdet er organisert i filsystemet. 

Denne prototypen følger delvis standarden som er typisk for **11ty** og **Decap** 



| Katalog | Formål og rolle |
| ------- | --------------- |
| _includes | Inneholder gjenbrukbare HTML-komponenter og maler. Dette sikrer en konsistens og effektiv gjenbrukbar kode på tvers av prototypen |
| _site | **Publiseringsmappe** - Denne mappen genereres av 11ty under byggetiden og inneholder de ferdige statiske, HTML, CSS og javascript-filene som leveres til nettleseren. |

For å få en visuell presentasjon av hvordan komponentene henger sammen i arkitekturen, vennligst les [./jamstack-architecture.txt](./Jamstack-arkitektur.txt)
