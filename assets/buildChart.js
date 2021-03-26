const init = () => {
  var labels = ["Vue", "JavaScript", "Python", "C", "PHP"];

  var savedData = JSON.parse(sessionStorage.getItem("languages"));
  var data = [];
  for (let i in savedData) {
    data.push(savedData[i]);
  }

  arrayOfObj = labels.map(function (d, i) {
    return {
      label: d,
      data: data[i] || 0,
    };
  });

  sortedArrayOfObj = arrayOfObj.sort(function (a, b) {
    return b.data - a.data;
  });

  let newLabels = [];
  let newData = [];
  sortedArrayOfObj.forEach((d) => {
    newLabels.push(d.label);
    newData.push(d.data);
  });

  return { x_axis: newLabels, y_axis: newData };
};

const displayChart = (jsonData) => {
  var ctx = document.getElementById("skillsChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: jsonData.x_axis,
      datasets: [
        {
          label: "Languages Used",
          data: jsonData.y_axis,
          backgroundColor: "rgba(36, 36, 35, 1)",
          borderColor: "rgba(36, 36, 35, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      animation: {
        duration: 2000,
        delay: 500,
        easing: "easeInOutQuad",
        loop: false,
      },

      legend: {
        display: false,
      },

      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: false,
            },
            ticks: {
              fontSize: 20,
              fontColor: "rgba(36, 36, 35, 1)",
            },
          },
        ],
      },
      tooltips: { enabled: false },
      hover: { mode: null },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
  myChart.update();
};

setTimeout(() => {
  displayChart(init());
}, 500);
