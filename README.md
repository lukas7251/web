# Nettisivu

<br/>

1/5: Basic HTML structure is present
- Perus HTML rakenne on luotu joka perustuu HTML5-standardiin
<br/>

2/5: HTML structure with clear content differentiation (headings, paragraphs, lists).
- Sisällössä on selkeä erottelu käyttämällä otsikoita, kappaleita ja listoja
<br/>

3/5: Use of forms, links, and media
- 'Form Example' siältää form elementin

- Sivu sisältää useita linkkejä. Esimerkiksi painamalla kuvaa galleria osiossa, 
  ohjaa linkki kuvan alkuperäiseen lähteeseen

- Galleria osuus sisältää media elemnttejä: <img>
<br/>

4/5: Tables are effectively used

```HTML
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Example 1</td>
            <td>
                <div class="description">
                    ...
                </div>
            </td>
        </tr>
    </tbody>
</table>
```
<br/>



5/5: Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content

- Sivusto käyttää semanttisia elementtejä:

```HTML
<body>  
    <nav>
    </nav>
    <main>
        <header>
        </header>
        <article>
        </article>
        <footer>
        </footer>
    </main>
</body>
```
<br/>

## CSS (25%)

1/5: Basic CSS styling (colors, fonts)
```css
  color: black;
  font: bold 13px/17px Helvetica;
```
<br/>
2/5: Use of classes and IDs to style specific elements

Esimerkiksi:

class:
```HTML
<div class="description">
  Lorem ipsum...
</div>
```
```css
.description {
  padding: 10px;
  transition: background-color 1s ease-in-out;
  border-radius: 6px;
} 
```
id:
```HTML
<button type="button" id="submitbtn" onclick="showAlert()">Submit</button>
```
```css
#submitbtn {
  margin-top: 10px;
  background: transparent;
  border: none;
  text-decoration: underline;
}
```
<br/>
3/5: Implementation of responsive design elements,<br/>
4/5: Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)

- Galleria-osio käyttää grid asettelua:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(500px, 1fr));
  grid-auto-rows: 400px;
  gap: 10px;
}
```
- joka on tehty responsiiviseksi käyttämällä 'Media Queries'
```css
@media screen and (max-width: 760px) {
  .grid-container {
    display: block;
  }
  ...
}
```
- Kun ikkunan leveys (esim. puhelimen näyttö) on liian pieni kuvien näyttämiseksi ruudukossa, ne muutetaan 1 kuvasarakkeeksi
<br/>

5/5: Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience

- Sivusto sisältää responsiivisia elementtejä, kiinnittyvän navigaation sekä siirtymisiä ja animaatioita visuaalista palautetta varten
<br/>

## JavaScript Basics (25%)
<br/>
1/5: Simple interactions (like alerts on button click)

- Sivu sisältää ilmoituksen kun käyttäjä painaa 'Submit', 'Form Example' osiossa
<br/>
2/5: Multiple event listeners and basic DOM manipulations

- Sivu sisältää useita DOM-manipulaatioita. Esimerkiksi kun sivun teema vaihdetaan vaaleasta tummaksi ja takaisin, myös nimi muuttuu
<br/>

3/5: Use of arrays, objects, and functions
- Koodi käyttää funktioita, olioita (ColorFetcher) ja taulukoita (esim. handelData-funktion sisällä ColorFetcher-luokassa)
<br/>

4/5: Advanced logic, looping through data, and dynamic DOM updates
- Advanced logic:
```js
  hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb[i] = (bigint >> (16 - i * 8)) & 255;
    }
    return { r: rgb[0], g: rgb[1], b: rgb[2] };
  }
```
- looping through data:
```js
colors.forEach((color) => {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color.hex.value;

  const colorName = document.createElement("p");
  colorName.classList.add("color-name");
  colorName.innerText = color.name.value;

  // Append the color and its name to colorContainer
  colorBox.appendChild(svg);
  colorBox.appendChild(colorName);
  this.colorContainer.appendChild(colorBox);
});
```
- dynamic DOM updates:
```js
// Handle the retrieved color data and update
handelData(colors) {
  // Clear the existing content of colorContainer
  this.colorContainer.innerHTML = "";
  // Loop through the retrieved colors and create color boxes with names
  colors.forEach((color) => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = color.hex.value;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "80");
    svg.setAttribute("height", "80");
    const colorName = document.createElement("p");
    colorName.classList.add("color-name");
    colorName.innerText = color.name.value;
    // Append the color and it's name to colorContainer
    colorBox.appendChild(svg);
    colorBox.appendChild(colorName);
    this.colorContainer.appendChild(colorBox);
  });
}
```

<br/>
5/5: Consistent use of Object-Oriented JavaScript principles

- ColorFetcher-luokka on esimerkki oliopohjaisesta JavaScriptista, jossa on kapseloitu asynkroninen metodi
- Vaikka koodi sisältää luokan, sen rakennetta voitaisiin parantaa, jotta se vastaisi paremmin olioperustaisen JavaScriptin periaatteita
<br/>

## Asynchronous Operations (25%)
<br/>
1/5: Use of timers  

- Funktio 'setTimeout()' kättää ajastinta suorittaakseen animaation ennalta määrätyn ajan jälkeen missä funktio 'updateCounter()' laskee sekuntteja ajastinta käyttäen 
<br/>

2/5: Successful implementation of an AJAX call or Fetch

- ColorFetcher-luokka toteuttaa Fetch-pyynnön ulkoiseen API:hin fetchColors-metodissa:
```js
const response = await fetch(apiUrl);
const data = await response.json();
```
<br/>

3/5: Data from the asynchronous call is displayed on the webpage

- API-kutsusta haetut tiedot käsitellään ja näytetään verkkosivulla ColorFetcher-luokan handelData-metodissa (Sivustolla 'Color indentifier' osiossa)
<br/>

4/5: Error handling is implemented (for failed API calls, etc.)

- Virheenkäsittely on toteutettu käyttäen try-catch-lauseketta Fetch-kutsun ympärillä fetchColors-metodissa, jotta virheet voidaan napata ja kirjata
```js
try {
  // Send a request to the API and wait for the response
  const response = await fetch(apiUrl);
  const data = await response.json();
  // Handle the retrieved color data
  this.handelData(data.colors);
  } catch (error) {
     console.error("Oops:", error);
  }
```
<br/>

5/5: Effective use of asynchronous data to enhance user experience (like filtering, sorting)

- fetchColors() -metodissa selectedColor tallentaa annetun väriarvon 'color-input' syötteestä ja lähettää sen hexToRgb() kautta apiUrl:iin, joka sitten noutaa valitun värin
