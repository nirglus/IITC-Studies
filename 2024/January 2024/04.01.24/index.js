const display = document.querySelector("#container");
// const baseUrl = "https://restcountries.com/v3.1/all";

// const getCountries = () =>{
//     fetch(baseUrl)
//         .then(res => res.json())
//         .then((countries) =>{
//             console.log(countries);
//             const countryDisp = countries.map((country) =>{
//                 return `<div class="card">
//                 <h1>${country.name.common}</h1>
//                 <img src=${country.flags.png} alt=${country.flags.alt} height="100" width="200">
//                 <h2>Capital: <span>${country.capital}</span></h2>
//                 </div>`
//             }).join(" ");
//             display.innerHTML = countryDisp;
//         })
//         .catch(err => console.log(err));
// };

// getCountries();

const getCountry = (countryName) =>{
    const baseUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(baseUrl)
        .then(res => res.json())
        .then((countryInfo) =>{
            console.log(countryInfo);
                const countryDisp = countryInfo.map((country) =>{
                    return `<div class="card">
                    <h1>${country.name.common}</h1>
                    <img src=${country.flags.png} alt=${country.flags.alt} height="100" width="200">
                    <h2>Capital: <span>${country.capital}</span></h2>
                    <p>${country.borders}</p>
                    <iframe src="https://maps.google.com/maps?q=${country.latlng}&z=8&ie=UTF8&iwloc=&output=embed" target="_parent" ></iframe>
                    </div>`
                }).join(" ");
            display.innerHTML = countryDisp;
        })
}
getCountry("canada");