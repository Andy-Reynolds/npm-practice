

const chartOne = document.getElementById('myChartOne').getContext('2d');
const chartTwo = document.getElementById('myChartTwo').getContext('2d');
const chartThree = document.getElementById('myChartThree').getContext('2d');

// Chart  One
import { cities } from "./data/citiesData.js"

const cityName = cities.map(data => {
  // console.log(data.name);
  return data.name;
});

const cityPop = cities.map(data => {
  let cityPopAsNumber = parseInt(data.population.replace(/,/g,''));
  // console.log(cityPopAsNumber);
  return cityPopAsNumber;
});


const citiesChart = new Chart(chartOne, {
  type: 'bar',
  data: {
      labels: cityName,
      datasets: [{
          label: 'Population',
          data: cityPop,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});


// Chart Two
import { population } from "./data/ageData.js"

// const minAge = population.map(data => {
//   console.log(data.minAge);
//   return data.minAge;
// });

// const maxAge = population.map(data => {
//   console.log(data.maxAge);
//   return data.maxAge;
// });

const ageRange = population.map(data => {
  // console.log(`${data.minAge} - ${data.maxAge}`);
  return `${data.minAge} - ${data.maxAge} years`;
})

const amountOfPeople = population.map(data => {
  // console.log(data.amountOfPeople);
  return data.amountOfPeople;
});



const ageChart = new Chart(chartTwo, {
  type: 'bar',
  data: {
      labels: ageRange,
      datasets: [{
          label: '# of people in these age ranges in millions',
          data: amountOfPeople,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});


// Chart Three
// Chart  One
import { beer } from "./data/beerData.js"

const weekday = beer.map(data => {
  console.log(data.day);
  return data.day;
});

const excitement = beer.map(data => {
  console.log(data.excitement);
  return data.excitement;
});


const beerChart = new Chart(chartThree, {
  type: 'line',
  data: {
      labels: weekday,
      datasets: [{
          label: 'Excitement for beer throughout the week in percent',
          data: excitement,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});