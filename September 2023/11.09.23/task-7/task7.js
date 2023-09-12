const COMPANY_NAME_ARR = ["Mobileye", "Nvidia", "Fiverr", "Israel Aerospace Industries",
"Intel", "PayPal", "Playtika", "Unity" ,"Wix", "Via"];
COMPANY_NAME_ARR.forEach((element) => document.body.innerHTML += `<p>${element}</p>`);

const IMG_ARR = ["https://pic1.calcalist.co.il/picserver3/crop_images/2022/04/12/Bycg3azEq/Bycg3azEq_1_0_3000_1688_0_x-large.jpg",
"https://venturebeat.com/wp-content/uploads/2023/07/NVIDIA.jpg?fit=750%2C422&strip=all",
"https://techcrunch.com/wp-content/uploads/2021/12/fiverr-header.jpeg?w=1390&crop=1",
"https://i.ytimg.com/vi/6e-DWeq60FQ/maxresdefault.jpg",
"https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-12/newsroom-intel-13th-gen-hx-processors-1.jpg",
"https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/07/what-is-paypal1-1920x1080.jpg",
"https://upload.wikimedia.org/wikipedia/he/8/87/Logo_playtika.png",
"https://mms.businesswire.com/media/20210824005277/en/1185035/23/unity-masterbrand-black.jpg",
"https://i.pcmag.com/imagery/reviews/00Z1mnZCcGR9r9D5hNbsFbW-36.fit_scale.size_1028x578.v1612863800.jpg",
"https://upload.wikimedia.org/wikipedia/he/0/04/Via_rideshare_logo.png",
"https://assets-global.website-files.com/609196881a69bf7486cbfd01/60f8563681cadbdc1e0a9fd0_hero-v-opt-poster-00001.jpg",
"https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/homepage/geforce-ada-40-series-nv-sfg-295x166@2x.jpg"];
document.body.innerHTML += `<div id="imgs"></div>`;
IMG_ARR.forEach((element) => imgs.innerHTML += `<img src="${element}">`);

const COMPANY_ARR = [
    {
        name: "Mobileye",
        city: "Jerusalem",
        image: `<img src=${IMG_ARR[0]}>`,
        link: "https://www.mobileye.com/"
    },
    {
        name: "Nvidia",
        city: "Santa-Clara",
        image: `<img src=${IMG_ARR[1]}>`,
        link: "https://www.nvidia.com/en-us/"
    },
    {
        name: "Fiverr",
        city: "Tel-Aviv",
        image: `<img src=${IMG_ARR[2]}>`,
        link: "https://www.fiverr.com/"
    },
    {
        name: "Israel Aerospace Industries",
        city: "Lod",
        image: `<img src=${IMG_ARR[3]}>`,
        link: "https://www.iai.co.il/"
    },
    {
        name: "Intel",
        city: "Santa-Clara",
        image: `<img src=${IMG_ARR[4]}>`,
        link: "https://www.intel.com/"
    },
    {
        name: "PayPal",
        city: "San Jose",
        image: `<img src=${IMG_ARR[5]}>`,
        link: "https://www.paypal.com/"
    },
    {
        name: "Playtika",
        city: "Herzliya",
        image: `<img src=${IMG_ARR[6]}>`,
        link: "https://www.playtika.com/"
    },
    {
        name: "Unity",
        city: "San Francisco",
        image: `<img src=${IMG_ARR[7]}>`,
        link: "https://unity.com/"
    },
    {
        name: "Wix",
        city: "Tel-Aviv",
        image: `<img src=${IMG_ARR[8]}>`,
        link: "https://www.wix.com/"
    },
    {
        name: "Via",
        city: "New York",
        image: `<img src=${IMG_ARR[9]}>`,
        link: "https://ridewithvia.com/"
    }
];

document.body.innerHTML += `<div id="companies"></div>`;
COMPANY_ARR.forEach((element, index) => {
    companies.innerHTML += `<div id="card${index}" class="card"></div>`
    element["id"] = index;
    for(const key in element){
        if(key != "id" && key != "link"){
            document.getElementById(`card${index}`).innerHTML += `<span>${element[key]}<span>`;
        }
    }
});

