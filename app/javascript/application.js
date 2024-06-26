// Entry point for the build script in your package.json

import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"
import {swiper} from "./plugin/swiper"
import {pierreCart} from "./pierre"

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");

// slider.addEventListener("input", (event) => {output.innerText = event.target.value;})
// output.innerText = slider.value;
// console.log(slider.value)


document.addEventListener('turbo:load', () => {
  swiper();
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  var refresh = document.getElementById("refresh");

  if(refresh) {
    console.log("refreshed")
  }

  if(slider) {
    slider.addEventListener("input", (event) => {output.innerText = event.target.value;})
    output.innerText = slider.value;
    console.log(slider.value)
  }

  const myChart = document.querySelector("#myChart");


  if(myChart) {
    const labels_pie = [
      'Transport',
      'Food',
      'House',
      'Leisure',
    ];

    const transportUser = document.querySelector(".transport_user")
    const foodUser = document.querySelector(".food_user")
    const houseUser = document.querySelector(".house_user")
    const leisureUser = document.querySelector(".leisure_user")
    const country = document.querySelector(".country")


    const data = {
      labels: labels_pie,
      datasets: [{
        label: 'My Current Footprint',
        backgroundColor: ['#3fa7d6', '#ee6352', '#9470d7', '#fac05e'] ,


        data: [transportUser.dataset.value,
          foodUser.dataset.value, houseUser.dataset.value,
          leisureUser.dataset.value]
      }]

    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {}
    };

    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    //-----------------------------------------

    const radarLabels = [
      'Transport',
      'Food',
      'House',
      'Leisure'
  ];

    const transportCountry = document.querySelector(".transportcountry")
    const foodCountry = document.querySelector(".foodcountry")
    const houseCountry = document.querySelector(".housecountry")
    const leisureCountry = document.querySelector(".leisurecountry")

    const radarData = {
      labels: radarLabels,
      datasets: [{
      label: country.dataset.value,
      data: [transportCountry.dataset.value, foodCountry.dataset.value,
        houseCountry.dataset.value, leisureCountry.dataset.value],

      fill: false,
      borderColor: 'Grey',
      pointBackgroundColor: 'Grey',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: 'My Impact',
      data: [transportUser.dataset.value,
        foodUser.dataset.value, houseUser.dataset.value,
        leisureUser.dataset.value],

      fill: true,
      backgroundColor: '#1FFF9A',
      borderColor: '#00cc70',
      pointBackgroundColor: '#1FFF9A',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }
    ]

    }
    const radarConfig = {
      type: 'radar',
      data: radarData,
      options: {
        legend: {
          display: true,
          position: 'left',
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
      },
        elements: {
          line: {
            borderWidth: 3
          }
        }

      }

    };


    //--------------------------------------
    // console.log(transportCountry.dataset.value, foodCountry.dataset.value,
    //   houseCountry.dataset.value, leisureCountry.dataset.value)
    const myRadar = new Chart(
      document.getElementById('myRadar'),
      radarConfig
    );
    console.log(myRadar)

  }


  pierreCart()


})
