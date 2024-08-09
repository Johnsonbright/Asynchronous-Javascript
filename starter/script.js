"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
///////////////////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img src="${data.flags.png}" alt="" class="country_img" />
    <div class="country_data">
      <h3 class="country_name">${data.name.official}</h3>
      <h4 class="country_region"> ${data.region} </h4>
      <p class="country_row">
        <span>👨‍👨‍👧</span>
        ${(+data.population / 1000000).toFixed(2)} People
      </p>
      <p class="country_row">
        <span>🧏🏻‍♂️</span>
        ${data.languages}
      </p>
      <p class="country_row">
        <span>💰</span>
        ${data.currencies?.EUR.name}
      </p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbouring = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country
    renderCountry(data);

    //Get neighbour country 2
    const neighbour = data.borders;
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbouring("portugal");

setTimeout(() => {
  console.log("1 seconds passed");

  setTimeout(() => {
    console.log("2 seconds passed");

    setTimeout(() => {
      console.log("3 seconds passed");

      
setTimeout(()=> {
  console.log('4 seconds passed')
}, 1000)
    }, 1000);
  }, 1000);
}, 1000);
