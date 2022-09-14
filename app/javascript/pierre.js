const pierreCart = () => {
  var pi = document.getElementById("pChart");
  var result = document.querySelector(".new_result");
  if(pi) {
  const labels = [
    'My Footprint',
    'My Target',
    'Goal for 2030',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Annual Co2 Footprint (kg)',
      backgroundColor: ['rgba(31, 72, 126, 0.9)', 'rgba(11, 111, 83, 1)', 'rgba(247, 231, 51, 1)'],
      borderColor: 'rgb(255, 99, 132)',
      data: [result.dataset.survey, result.dataset.result, 2000]
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      maintainAspectRatio: false,
    }
  };
    const myChart = new Chart(
    document.getElementById('pChart'),
    config
  );
  }
}

export {pierreCart}
