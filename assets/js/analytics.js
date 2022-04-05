google.charts.load('current', {'packages':['corechart']});
      


/* Pie chart for example analytics */
google.charts.setOnLoadCallback(drawPine);
      function drawPine() {
        var data = google.visualization.arrayToDataTable([
          ['Name of the Expense', 'Expense Ammount'],
          ['Restuarant', 200],
          ['Travelling', 150],
          ['Groceries', 200],
          ['Milk and Bread', 100],
          ['Phone Bill', 110]
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }



/* A Combo chart from Actual v/s Planned Income, Savings and Expenses */
google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Planned Income', 'Actual Income', 'Planned Savings', 'Actual Savings', 'Planned Expenses', 'Actual Expeneses'],
          ['02/2022', 40000, 45000, 8000, 9000, 37000, 36000],
          ['03/2022', 45000, 47000, 9000, 7000, 34000, 37000],
          ['04/2022', 39000, 43000, 10000, 9000, 37000, 39000],
          ['05/2022', 40000, 45000, 9000, 10000, 36000, 40000]
        ]);

        var options = {
          title : 'Actual v/s Planned Income, Savings and Expeneses',
          vAxis: {title: 'Expense Ammount in rupees'},
          fontSize: 13,
          hAxis: { title: 'Date' },
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };


        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }








/* A Pie chart for Daily analytics */
google.charts.setOnLoadCallback(drawMark);
      
    function drawMark() {
        var data = google.visualization.arrayToDataTable([
          ['Name of Expenses', 'Expense Ammount'],
          ['Restuarant', 200],
          ['Travelling', 90],
          ['Milk and Bread', 100],
          ['Groceries', 200],
          ['Phone Bill', 250]
        ]);

        var options = {
          title: 'Expenses of 22/01/2022',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }



/* A Curve Chart for Monthly Expenses */    
google.charts.setOnLoadCallback(drawRon);

      function drawRon() {
        var data = google.visualization.arrayToDataTable([
          ['Week', 'Actual', 'Planned'],
          ['1st',  5000, 3800],
          ['2nd',  5000, 4600],
          ['3rd',  4200, 4000],
          ['4th',  5300,  4800]
        ]);

        var options = {
          title: "This month's Expenses",
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var options = {
            hAxis: { title: 'Week' },
            vAxis: { title: 'Expenses Ammount in rupees' }
        }

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }   




/* A Curve Chart for Yearly Expenses */      
google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Actual', 'Planned'],
        ['January', 63000, 68000],
        ['Febuary', 63000, 59000],
        ['March', 66000, 60000],
        ['April', 67000, 70000],
        ['May', 71000, 72000],
        ['June', 64000, 69000],
        ['July', 69000, 73000],
        ['August', 64000, 69000],
        ['September', 60000, 62000],
        ['October', 65000, 65000],
        ['November', 64000, 68000],
        ['December', 65000, 70000],
        ]);

    var options = {
        title: "This Year's expenses",
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var options = {
        hAxis: { title: 'Month' },
        vAxis: { title: 'Expenses Ammount' }
    }
    var chart = new google.visualization.LineChart(document.getElementById('bom_chart'));

    chart.draw(data, options);
    }
     