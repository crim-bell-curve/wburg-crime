// Written by Kelvin Abrokwa-Johnson

//Chart.defaults.global.responsive = true;

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
        highlight: "#FF5A5E",
        label: "Aggravated Assault"
    },
    {
        value: 60,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Burglary"
    },
    {
        value: 3,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Murder"
    },
    {
        value: 2,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Rape"
    },
    {
        value: 23,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Robbery"
    },
    {
        value: 233,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Simple Assault"
    }
]
var doughnut = new Chart(donut).Doughnut(donut_data, {});


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

