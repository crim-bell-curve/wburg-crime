function generateCharts() {

    var line = document.getElementById("time_chart").getContext("2d");
    var data = {
        labels: [ "August 2009", "September 2009", "October 2009", "November 2009", "December 2009",
                  "January 2010", "February 2010", "March 2010", "April 2010", 
                  "May 2010", "June 2010", "July 2010", "August 2010", "September 2010", 
                  "October 2010", "November 2010", "December 2010"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [14,25,22,21,17,18,10,10,12,29,22,23,29,28,29,32,14]
            }
        ]
    };
    var lineChart = new Chart(line).Line(data, {scaleBeginAtZero: true});

    var donut = document.getElementById("donut_chart").getContext("2d");
    var donut_data = [
        {
            value: 35,
            color:"#F7464A",
            highlight: "#000",
            label: "Aggravated Assault"
        },
        {
            value: 60,
            color: "#4E5237",
            highlight: "#000",
            label: "Burglary"
        },
        {
            value: 3,
            color: "#F3E0A8",
            highlight: "#000",
            label: "Murder"
        },
        {
            value: 2,
            color:"#EF616D",
            highlight: "#000",
            label: "Rape"
        },
        {
            value: 23,
            color: "#F6A4EC",
            highlight: "#000",
            label: "Robbery"
        },
        {
            value: 233,
            color: "#3BB6C5",
            highlight: "#000",
            label: "Simple Assault"
        }
    ]
    var doughnut = new Chart(donut).Doughnut(donut_data, {});

    var gender_chart = c3.generate({
        data: {
            columns: [
                ['Women', 21, 39, 0, 2, 8, 113],
                ['Men', 18, 21, 3, 0, 11, 79]
            ],
            type: 'bar',
            colors: {
                Women: '#3BB6C5',
                Men: '#EF616D'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }

        },
        axis: {
            x : {
                type: 'category',
                categories: ["Aggravated Assault", "Burglary", "Murder", "Rape", "Robbery", "Simple Assault"]
            }
        },
        bindto: '#gender_bar'
    });

    var race_colors = ['#3BB6C5', '#F3E0A8', '#EF616D']
    var race_chart = c3.generate({
        data: {
            columns: [
                ['Asian', 0, 2, 0, 0, 3, 1],
                ['Black', 77, 9, 1, 0, 4, 99],
                ['White', 21, 39, 1, 2, 12, 113]
            ],
            type: 'bar',
            colors: {
                Asian: '#3BB6C5', 
                Black: '#F3E0A8', 
                White: '#EF616D'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }

        },
        axis: {
            x : {
                type: 'category',
                categories: ["Aggravated Assault", "Burglary", "Murder", "Rape", "Robbery", "Simple Assault"]
            }
        },
        bindto: '#race_bar'
    });
}
window.addEventListener('load', function(){
    generateCharts();
})

var age_line = document.getElementById("age_line").getContext("2d");
var age_data = {
    labels: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 67, 71, 74, 75, 82, 84, 88],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [1, 1, 1, 1, 1, 1, 2, 3, 1, 5, 5, 8, 7, 5, 3, 11, 7, 20, 8, 14, 8, 8, 17, 14, 12, 6, 5, 7, 4, 8, 5, 6, 3, 3, 6, 4, 5, 8, 2, 5, 5, 3, 7, 3, 3, 5, 3, 5, 5, 4, 1, 1, 5, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1]
        }
    ]
};
var age_lineChart = new Chart(age_line).Line(age_data, {scaleBeginAtZero: true});

/*
var bar = document.getElementById("bar_chart").getContext("2d");
var bar_data = {
    labels: ["Aggravated Assault", "Burglary", "Murder", "Rape", 
             "Robbery", "Simple Assault"],
    datasets: [
        {
            label: "Men",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [18, 21, 3, 0, 11, 79]
        },
        {
            label: "Women",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [21, 39, 0, 2, 8, 113]
        }
    ]
};
var barChart = new Chart(bar).Bar(bar_data, {});
*/
