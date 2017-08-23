(() =>{
    let ctx1 = document.getElementById("finance-chart").getContext('2d');

    let gradient = ctx1.createLinearGradient(0, 0, 1000, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'purple');

    let financeChart = new Chart(ctx1, {
        type: 'line',
        data: {
            // labels: ['1', '3', '7', '11', '14', '21', '25'],
            datasets: [{
                data: [{
                    x: moment().month(5).date(1).format(),
                    y: 12000
                }, {
                    x: moment().month(5).date(3).format(),
                    y: 5000
                }, {
                    x: moment().month(5).date(7).format(),
                    y: 3500
                }, {
                    x: moment().month(5).date(11).format(),
                    y: 10000
                }, {
                    x: moment().month(5).date(14).format(),
                    y: 16500
                }, {
                    x: moment().month(5).date(21).format(),
                    y: 7200
                }, {
                    x: moment().month(5).date(25).format(),
                    y: 2100
                }],
                backgroundColor: gradient,
                borderWidth: 0,
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            day: 'll'
                        }
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    let ctx2 = document.getElementById("income-chart").getContext('2d');

    let incomeChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            datasets: [{
                data: [10, 20, 30]
            }],

            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        },
        options: {
            cutoutPercentage: 50
        }
    });
})();