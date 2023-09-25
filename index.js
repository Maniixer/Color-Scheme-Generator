const schemeColorContainer = document.getElementById("schemeColorContainer");
const seedColor = document.getElementById("seedColor");
const getColorBtn = document.getElementById("getColorBtn");

/* GET HTML FOR EACH COLOR IN THE ARRAY */
let colorArray = [];
function renderColors() {
  let html = "";
  for (let color of colorArray) {
    html += `
    <div class="pallets">
        <div class="scheme-color" style="background-color: ${color.hex.value}"></div>
        <div class="hex-code">
            <p>${color.hex.value}</p>
            </div>
        </div>
    `;
  }
  schemeColorContainer.innerHTML = html;
}

/* GET HEX CODE FROM COLOR PICKER WHEN PRESSING THE BUTTON */
getColorBtn.addEventListener("click", function () {
  /* GET THE VALUE OF THE COLOR PICKER AND THEN REPLACE(REMOVE) THE "#" TO ADD IN THE FETCH LINK */
  const hexCode = seedColor.value;
  const colorCode = hexCode.replace(/[^a-zA-Z0-9 ]/g, "");
  /* FETCH THE NEW COLOR SCHEME BASED ON WHAT IS PICKED FROM THE COLOR PICKER AND THE DROP DOWN MENU */
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${schemes.value}`)
    .then((resp) => resp.json())
    .then((data) => {
      colorArray = data.colors;
      renderColors();
    });
});

/* const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
 */

/* GET THE COLOR SCHEME OF A HEX COLOR */
/* fetch(`https://www.thecolorapi.com`, options)
  .then((resp) => resp.json())
  .then((data) => {
    colorArray = data.colors;
    console.log(colorArray);
    renderColors();
  }); */
