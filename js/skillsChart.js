
var canvas = document.getElementById('skillsChart').getContext('2d');;
Chart.defaults.global.defaultFontColor = '#777';
var skill_Chart = new Chart(canvas, {
    type: 'bar',
    data: {
        labels: ['Dart/Flutter', 'Python', 'HTML/CSS', 'Tailwindcss','Bootstrap', 'JavaScript'],
        datasets: [{
            label: 'Skills Level',
            data: [9, 7.5, 8, 8, 8, 7.5],
            backgroundColor: [
                '#5DADE2',
                '#F1C40F',
                '#EC7063',
                '#f06529',
                '#C39BD3',
                '#5D6D7E',
                
            ],
            borderColor: [
                '#1F618D',
                '#D4AC0D',
                '#E74C3C',
                '#e34c26',
                '#AF7AC5',
                '#34495E'
            ],
            borderWidth: 2,

        }]
    },
    options: {
        responsive: true,
        plugins: {
            datalabels: {
                color: 'black',
                anchor: "end",
                align: "right",
                offset: 20,
                display: function (context) {
                    return context.dataset.data[context.dataIndex];
                },
                font: {
                    weight: 'bold',
                    size: 26
                },
                formatter: Math.round
            }
        },
        legend: {
            "display": false
        },
        title: {
            display: true,
            text: 'Skills Experty Level',
            fontSize: 26
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 10,
                    lineHeight:2,
                    beginAtZero: true
                }
            }]
        }
    }
});