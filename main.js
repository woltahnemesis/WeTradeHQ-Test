// API KEY
// 3YU4QSGHBSKOBEU7

let symbol = "TSLA"
let metaData;
let monthlyTimeSeries;
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let openCloseData = [];
let divInfoP = document.querySelectorAll('.div-info p');
let inputList = document.querySelectorAll('body input');
let form = document.querySelector('form');
let myChart;

function displayChart() {

  fetch(
    'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='+symbol+'&apikey=3YU4QSGHBSKOBEU7'
  )
  .then(response => response.json())
  .then(dataResponse => {

    console.log(dataResponse);

    metaData = dataResponse["Meta Data"];
    monthlyTimeSeries = dataResponse["Monthly Time Series"];

    divInfoP[0].innerHTML = "<strong>Information: </strong>" + dataResponse["Meta Data"]["1. Information"];
    divInfoP[1].innerHTML = "<strong>Symbol: </strong>" + dataResponse["Meta Data"]["2. Symbol"];
    divInfoP[2].innerHTML = "<strong>Last Refreshed: </strong>" + dataResponse["Meta Data"]["3. Last Refreshed"];
    divInfoP[3].innerHTML = "<strong>Time Zone: </strong>" + dataResponse["Meta Data"]["4. Time Zone"];

    const labels = [];

    for(let seriesOfMonth in monthlyTimeSeries) {
      let month = seriesOfMonth.split('-')
      let textMonthNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

      // Insert labels
      for(let i = 0; i < textMonthNum.length; i++) {
        if(month[1] === textMonthNum[i]) {
          labels.push(month[0] + " " + months[i] + " " + month[2]);
        }
      }

      // Insert prices
      let open = parseFloat(monthlyTimeSeries[seriesOfMonth]["1. open"]);
      let close = parseFloat(monthlyTimeSeries[seriesOfMonth]["4. close"]);

      if(open < close) {
        openCloseData.push(close.toString());
      } else {
        openCloseData.push(open.toString());
      }

    }

    const data = {
      labels: labels,
      datasets: [{
        label: metaData["2. Symbol"] + ' Stock Chart',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: openCloseData,
      }]
    };

    const config = {
      type: 'line',
      data,
      options: {}
    };

    myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

displayChart();

form.addEventListener('submit', function(e){
  e.preventDefault();
  myChart.destroy();
  symbol = inputList[0].value;
  inputList[0].value = '';
  displayChart();
});
