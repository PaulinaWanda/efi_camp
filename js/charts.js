(() =>{
    let ctx1 = document.getElementById("finance-chart").getContext('2d');

    let gradient = ctx1.createLinearGradient(0, 0, 1000, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'purple');

    let financeChart = new Chart(ctx1, {
        type: 'line',
        // label: {
        //     display: false
        // },
        data: {
            labels: ['1', '3', '7', '11', '14', '21', '25'],
            datasets: [{
                data: [12000, 5000, 3500, 10000, 16500, 7200, 2100],
                backgroundColor: gradient,
                borderWidth: 0,

            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
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