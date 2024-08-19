"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//QUIZ 3
const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  };
  const imageContainer = document.querySelector(".images");
  
  const createImage = async function (imgPath) {
    return new Promise(function (resolve, reject) {
      const img = document.createElement("img");
      img.src = imgPath;
      img.style.width = "100vw";
  
      img.addEventListener("load", function (e) {
        e.preventDefault();
        imageContainer.append(img);
        resolve(img);
      });
      img.addEventListener("error", function (e) {
        e.preventDefault();
        reject(new Error(`Image not found`));
      });
    });
  };
  
  let currentImage;
 const loadNPause = async function() {
try {
const res = await createImage('img/image1.png');
currentImage = res;
currentImage.

}
catch(err){
console.error(err)
}
 }

 loadNPause()
  
  // createImage(`img/image1.png`)
  //   .then((img) => {
  //     currentImg = img;
  //     console.log("Image 1 loaded");
  //     return wait(2);
  //   })
  //   .then(() => {
  //     currentImg.style.display = "none";
  
  //     return createImage("img/image2.jpg");
  //   })
  //   .then((img) => {
  //     currentImg = img;
  //     console.log(`image 2 loaded`);
  //     return wait(2);
  //   })
  //   .then(() => {
  //     currentImg.style.display = "none";
  //   })
  //   .catch((err) => console.error(err));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const getJSON = function (url, errorMessage = "Something went wrong.") {
//   return fetch(url).then((response) => {
//     // console.log(response);
//     if (!response.ok) {
//       throw new Error(`${errorMessage} ${response.status}`);
//     }

//     return response.json();
//   });
// };

// // const get3countries = async function (c1, c2, c3) {
// //   try {
// // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
// // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
// // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

// // Promise.all short circuit when one promise rejects.
// //    const data = await Promise.all([
// //       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
// //       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
// //       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
// //     ]);
// //     console.log(data.map(d => d[0].capital));
// //   } catch (err) {
// //     console.error(err.message);
// //   }
// // };

// // get3countries("portugal", "canada", "tanzania");

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/senegal`),
//     getJSON(`https://restcountries.com/v3.1/name/russia`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//   ]);
//   console.log(res[0]);
// })();

// // Other PROMISE COMBINATOR

// // 1. Promise.race returns which ever one comes first
// const timeout = function (secs) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long`));
//     }, secs * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v3.1/name/egypt`), timeout(3)])
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.error(err));

//   // Promise.allSettled
//   Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success')
//   ]).then(res => console.log(res))

//   Promise.all([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success')
//   ]).then(res => console.log(res)).catch(err=> console.error(err))

//   Promise.all([
//     Promise.resolve('Success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('Another Success')
//   ]).then(res => console.log(res)).catch(err=> console.error(err))


// // ASYNC_AWAIT
// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // getPosition().then(pos => console.log(pos))

// const WhereAmi = async function () {
//   //GEO location
//   try{
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   // Reverse geocoding
//  const resGeo = await fetch(
//     `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=66b8c191808f7674335948vpfa1908f`
//   );
//   if(!resGeo.ok) {
//     throw new Error(`Problem getting your location`)
//   }
//   const dataGeo = await resGeo.json();

//   //Country data
//   const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.address.country}`);

//   if(!resGeo.ok)
//     throw new Error(`Problem getting country`)
//   const data = await res.json();
//   renderCountry(data[0])

//   return (`you are in ${dataGeo.address.state},${dataGeo.address.country}`)
// } catch (err) {
//   console.error(err);
//   renderError(`${err.message}`)
//   throw err
// }
// };

// // Returning values: Async calling another async function

// (async function() {
//   try{
// const city = await WhereAmi();
// console.log(`${city}`)
//   }
//   catch(err) {
//     console.log(`${err.message}`)
//   }
//   console.log(`Finished getting location`)
// })();

// QUIZ 2
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imageContainer = document.querySelector(".images");

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     img.style.width = "100vw";

//     img.addEventListener("load", function (e) {
//       e.preventDefault();
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function (e) {
//       e.preventDefault();
//       reject(new Error(`Image not found`));
//     });
//   });
// };

// let currentImg;
// createImage(`img/image1.png`)
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";

//     return createImage("img/image2.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log(`image 2 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));

// IF statement
// if ('geolocation' in navigator) {
//   navigator.geolocation.getCurrentPosition(function(position) {
// let lat = position.coords.latitude;
// let lng = position.coords.longitude;
// console.log('Latitude'  + ' ' + lat + '\nLongitude' + lng);
//   });
// }
// else{
//   console.log('Geolocation is not supported by this browse')
// }

// RENDERING MY OWN GEO-LOCATION

//

// const renderCountry = function (data, className = "") {
//   // console.log(data);
//   const html = `
//       <article class="country ${className}">
//         <img src="${
//           Object.values(data.flags ?? {})[0]
//         }" alt="" class="country_img" />
//         <div class="country_data">
//           <h3 class="country_name">${Object.values(data.name ?? {})[0]}</h3>
//           <h4 class="country_region"> ${data.region} </h4>
//           <p class="country_row">
//             <span>👨‍👨‍👧</span>
//             ${(+data.population / 1000000).toFixed(2)} People
//           </p>
//           <p class="country_row">
//             <span>🧏🏻‍♂️</span>
//             ${Object.values(data.languages ?? {})[0]}
//           </p>
//           <p class="country_row">
//             <span>💰</span>
//             ${Object.keys(data.currencies ?? {})[0]}
//           </p>
//         </div>
//       </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };
// const renderError = function (message) {
//   countriesContainer.insertAdjacentText("beforeend", message);
//   //  countriesContainer.style.opacity = 1;
// };

// HERE:
// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=66b8c191808f7674335948vpfa1908f`
//       );
//     })
//     .then((response) => {
//       // console.log(response)
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(
//         `You are in ${data.address.city ?? data.address.state}, ${
//           data.address.country
//         }`
//       );
//       return getCountryData(data.address.country);
//     })
//     .catch((err) => console.error(` Something went wrong ${err}`));
// };

// const getJSON = function (url, errorMessage = "Something went wrong.") {
//   return fetch(url).then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`${errorMessage} ${response.status}`);
//     }

//     return response.json();
//   });
// };

const getCountryData = function (country) {
  // country 1
  console.log(country);
  return getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Can not access country`
  )
    .then((data) => {
      return renderCountry(data[0]);
    })
    .catch((err) => console.error(`${err.message}`));
};

// btn.addEventListener("click", whereAmI);

/////////////////////////////////////////////////////////////////////////////////////////////////
//BUILDING SIMPLE PROMISES
// const lotteryDraw = new Promise(function(resolve, reject) {
//   console.log(`Lottery draw is happening`)
//   setTimeout(()=> {

//     if ( Math.random() >= 0.5 ) {
//       resolve( `You win`)
//     }
//     else{
//       reject(new Error(`You lose`))
//     }
//   }, 2000)

// });

// lotteryDraw.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function(seconds) {
//   return new Promise (function(resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2).then(()=> {
//   console.log('I waited for 1 seconds');
// return wait(1)
// }).then(()=> {
//   console.log('I waited for 2 seconds');
// return wait(1)
// }).then(()=> {
//   console.log('I waited for 3 seconds');
// return wait(1)
// }).then(() => {
//   console.log(`I waited for 4 second`)
// })

// // Another to resolve immediately
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error(`Problem`)).catch(x => console.error(x))

/////////////////////////////////////////////////////////////////////////////////////////////////////
// QUIZ

// const renderCountry = function (data, className = "") {
//   // console.log(data);
//   const html = `
//   <article class="country ${className}">
//     <img src="${Object.values (data.flags ?? {})[0]}" alt="" class="country_img" />
//     <div class="country_data">
//       <h3 class="country_name">${Object.values(data.name ?? {})[0]}</h3>
//       <h4 class="country_region"> ${data.region} </h4>
//       <p class="country_row">
//         <span>👨‍👨‍👧</span>
//         ${(+data.population / 1000000).toFixed(2)} People
//       </p>
//       <p class="country_row">
//         <span>🧏🏻‍♂️</span>
//         ${Object.values(data.languages ?? {})[0]}
//       </p>
//       <p class="country_row">
//         <span>💰</span>
//         ${Object.keys(data.currencies ?? {})[0]}
//       </p>
//     </div>
//   </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   //  countriesContainer.style.opacity = 1;
// };
// const renderError = function (message) {
//   countriesContainer.insertAdjacentText("beforeend", message);
//   //  countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMessage = "Something went wrong.") {
//   return fetch(url).then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`${errorMessage} ${response.status}`);
//     }

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // country 1
//   console.log(country)
//   return getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     `Can not access country`
//   )
//     .then((data) => {
//       console.log(data[0]);
//       renderCountry(data?.[0]);

//       const neighbor = data?.[0].borders[1];

//       if (!neighbor) throw new Error(`No neighbor found`);
//       //country 2
//       console.log(neighbor)
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbor}`,
//         `Can not access country`
//       )
//     }).then((data2) =>{
//       return renderCountry(data2)})
//     .catch((err) => {
//       console.error(`${err} `);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const whereAmI = function (lat, lng) {
//   const reverseGeoCoding = fetch(
//     `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=66b8c191808f7674335948vpfa1908f`
//   )
//     .then((response) => {
//       // console.log(response)
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })

//     .then((data) => {
//       console.log(data);
//       // console.log(`You are in ${data.address.city ?? data.address.state}, ${data.address.country}`)
//       return getCountryData(data.address.country);
//     })
//     // .catch((err) => console.error(` Something went wrong ${err}`));
// };

// btn.addEventListener("click", function () {
//   // whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   // whereAmI(-33.933, 18.474);
//   // whereAmI(6.5244, 3.406448);
//   // whereAmI(39.3999, 8.2245);
// });

///////////////////////////////////////////////////
// const renderCountry = function (data, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img src="${data.flags.png}" alt="" class="country_img" />
//     <div class="country_data">
//       <h3 class="country_name">${data.name.official}</h3>
//       <h4 class="country_region"> ${data.region} </h4>
//       <p class="country_row">
//         <span>👨‍👨‍👧</span>
//         ${(+data.population / 1000000).toFixed(2)} People
//       </p>
//       <p class="country_row">
//         <span>🧏🏻‍♂️</span>
//         ${data.languages.spa}
//       </p>
//       <p class="country_row">
//         <span>💰</span>
//         ${data.currencies?.EUR.name}
//       </p>
//     </div>
//   </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   //  countriesContainer.style.opacity = 1;
// };
// const renderError = function (message) {
//   countriesContainer.insertAdjacentText("beforeend", message);
//   //  countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMessage = "Something went wrong.") {
//   return fetch(url).then((response) => {
//     console.log(response);
//     if (!response.ok ) {
//       throw new Error(`${errorMessage} ${response.status}`);
//     }

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // country 1
//   return getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     `Can not access country`
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor)  throw new Error(`No neighbor found`) ;
//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbor}`,
//         `Can not access country`
//       );
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} `);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("Brazil");
// });

//Initial before refactor
// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);
//       if (response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;
//       //country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} `);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const renderCountry = function (data, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img src="${data.flags.png}" alt="" class="country_img" />
//     <div class="country_data">
//       <h3 class="country_name">${data.name.official}</h3>
//       <h4 class="country_region"> ${data.region} </h4>
//       <p class="country_row">
//         <span>👨‍👨‍👧</span>
//         ${(+data.population / 1000000).toFixed(2)} People
//       </p>
//       <p class="country_row">
//         <span>🧏🏻‍♂️</span>
//         ${data.languages}
//       </p>
//       <p class="country_row">
//         <span>💰</span>
//         ${data.currencies?.EUR.name}
//       </p>
//     </div>
//   </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };
// const getCountryAndNeighbouring = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country
//     renderCountry(data);

//     //Get neighbour country 2
//     const neighbour = data.borders;
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbouring("portugal");

// setTimeout(() => {
//   console.log("1 seconds passed");

//   setTimeout(() => {
//     console.log("2 seconds passed");

//     setTimeout(() => {
//       console.log("3 seconds passed");

// setTimeout(()=> {
//   console.log('4 seconds passed')
// }, 1000)
//     }, 1000);
//   }, 1000);
// }, 1000);
