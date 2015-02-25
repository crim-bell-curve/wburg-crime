// Written by Kelvin Abrokwa-Johnson

//Chart.defaults.global.responsive = true;

var ctx = document.getElementById("time_chart").getContext("2d");

var data = {
    labels: [ "August 2009", "September 2009", "October 2009", "November 2009", "December 2009",
              "January 2010", "February 2010", "March 2010", "April 2010", 
              "May 2010", "June 2010", "July 2010", "August", "September", 
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

var myLineChart = new Chart(ctx).Line(data, {scaleBeginAtZero: true});