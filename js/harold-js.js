const cities = document.getElementById("cities");
const contact = document.getElementById("contact");
var button_expand = document.getElementById("button_expand");
var button_contract;
const infoCities = [
    ["Bogotá", "318 219 46 59"],
    ["Bucaramanga", "300 577 83 17"],
    ["San Gil", "315 544 13 22"],
    ["Barrancabermeja", "318 794 53 68"],
    ["Medellín", "311 217 95 98"],
    ["Arauca", "310 284 13 34"],
    ["Yopal", "317 855 17 98"],
    ["Cúcuta", "321 215 54 80"],
    ["Pamplona", "312 767 11 97"],
    ["Barranquilla", "300 775 70 36"],
    ["Bucaramanga", "318 842 92 87"],
]

button_expand.addEventListener("click", expand);

function expand() {
    cities.removeChild(cities.lastElementChild);
    for (let i = 3; i < infoCities.length; i++) {
        cities.innerHTML += '<div class="city_container"><div class="whatsapp"><a href=""></a></div><div class="city">' + infoCities[i][0] + '</div><div class="phone">' + infoCities[i][1] + '</div></div>'
    }
    cities.innerHTML += '<div id="button_container"><div id="button_contract"></div></div>';
    button_contract = document.getElementById("button_contract");
    button_contract.addEventListener("click", contract);
}

function contract() {
    for (let i = 0; i < 9; i++) {
        cities.removeChild(cities.lastElementChild);
    }
    cities.innerHTML += '<div id="button_container"><div id="button_expand"></div></div>';
    button_expand = document.getElementById("button_expand");
    button_expand.addEventListener("click", expand);
}