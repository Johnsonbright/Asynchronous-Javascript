"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
///////////////////////////////////////////////////

const getCountry = function(country) {
const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `
    <article class="country">
      <img src="${data.flags.png}" alt="" class="country_img" />
      <div class="country_data">
        <h3 class="country_name">${data.name.official}</h3>
        <h4 class="country_region"> ${data.region} </h4>
        <p class="country_row">
          <span> ${(+data.population/1000000).toFixed(2)} People 👨‍👨‍👧 </span>
        </p>
        <p class="country_row">
          <span> ${data.languages}🧏🏻‍♂️</span>
        </p>
        <p class="country_row">
          <span> ${data.currencies?.EUR.name} 💰</span>
        </p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
};

getCountry('portugal')
getCountry('us')


