var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    	labels: [0,2,4,6,8,10,12,14,16,18,20,22],
    	datasets: [{
    		label: "Carga",
    		borderColor: 'rgba(255,99,132,1)',
    		backgroundColor: 'rgba(255,99,132,0.5)',
    		data: [262,526,844,788,411,626,267,145,581,262]
    	}]
    },
    options: {
    	responsive: true,
    	title: {
    		display: true,
    	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("distribuicao");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Eólica", "Hidráulica", "Térmica", "Nuclear", "Solar", "Importação"],
        datasets: [{
            data: [27, 21, 15, 10, 5, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(204, 0, 255, 0.2)',
                'rgba(190, 65, 102, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(204, 0, 255, 1)',
                'rgba(190, 65, 102, 1)',
            ],
            borderWidth: 1
        }]
    }
});

var ctx = document.getElementById("carga");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Carga", "Outro"],
        datasets: [{
            data: [27, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});

var ctx = document.getElementById("geracao").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0,2,4,6,8,10,12,14,16,18,20,22],
        datasets: [{
            label: "Carga",
            borderColor: 'rgba(255,99,132,1)',
            backgroundColor: 'rgba(255,99,132,0.5)',
            data: [262,526,844,788,411,626,267,145,581,262]
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
