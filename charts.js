function generateCharts() {

    var chart = c3.generate({
        data: {
            columns: [
                ["Aggravated Assault", 35],
                ["Burglary", 60],
                ["Murder", 3],
                ["Rape", 2],
                ["Robbery", 23],
                ["Simple Assault", 233]
            ],
            type : 'donut'
        },
        donut: {
            title: "Type of Crime"
        },
        bindto: '#donut'
    });

    var chart = c3.generate({
        data: {
            columns: [
                ['Crimes', 14,25,22,21,17,18,10,10,12,29,22,23,29,28,29,32,14]
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: ["August 2009", "September 2009", "October 2009", "November 2009", "December 2009",
                  "January 2010", "February 2010", "March 2010", "April 2010", 
                  "May 2010", "June 2010", "July 2010", "August 2010", "September 2010", 
                  "October 2010", "November 2010", "December 2010"]
            },
            y: {
                label: 'Number of Crimes'
            }
        },
        legend: {
            show: false
        },
        bindto: '#time'
    });

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
    var race_chart_raw = c3.generate({
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
            },
            y: {
                label: 'number'
            }
        },
        bindto: '#raw_race_bar'
    });

    var race_chart_adj = c3.generate({
        data: {
            columns: [
                ['Asian', 0, 24, 0, 0, 55, 2],
                ['Black', 95, 41, 84, 0, 28, 80],
                ['White', 5, 35, 16, 100, 16, 18]
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
            },
            y: {
                max: 90,
                label: 'percentage'
            }
        },
        bindto: '#adj_race_bar'
    });

    var chart = c3.generate({
        data: {
            columns: [
                ['Number of Victims', 1, 1, 1, 1, 1, 1, 2, 3, 1, 5, 5, 8, 7, 5, 3, 11, 7, 20, 8, 14, 8, 8, 17, 14, 12, 6, 5, 7, 4, 8, 5, 6, 3, 3, 6, 4, 5, 8, 2, 5, 5, 3, 7, 3, 3, 5, 3, 5, 5, 4, 1, 1, 5, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1]
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 67, 71, 74, 75, 82, 84, 88],
                label: 'Age'
            },
            y: {
                label: 'Number of Victims'
            }
        },
        legend: {
            show: false
        },
        bindto: '#age_line'
    });

}
window.addEventListener('load', function(){
    generateCharts();
})

