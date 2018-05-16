Plotly.d3.csv('https://raw.githubusercontent.com/JaredFishman/TrainMap/master/LocationData.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var scl = [[0,'rgb(200, 10, 10)'],[0.25,'rgb(10, 200, 10)'],[0.5,'rgb(10, 10, 200)'],[0.75,'rgb(200, 10, 200)'],[1,'rgb(10, 200, 200)']];

    var data = [{
        type:'scattergeo',
        locationmode: 'USA-states',
        lon: unpack(rows, 'long'),
        lat: unpack(rows, 'lat'),
        hoverinfo:  unpack(rows, 'terminal'),
        text:  unpack(rows, 'terminal'),
        mode: 'markers',
        marker: {
            size: 8,
            reversescale: true,
            autocolorscale: false,
            symbol: 'circle',
            line: {
                width: 1,
                color: 'rgb(102,102,102)'
            },
            colorscale: scl,
            cmin: 1,
            color: unpack(rows, 'railroad'),
        },
    }];


    var layout = {
        title: 'AAR Railroad Terminals',
        geo: {
            scope: 'north america',
            projection: {
                type: 'equirectangular'
            },
            lonaxis: {
                'range': [-130, -65]
            },
            lataxis: {
                'range': [15, 60]
            },
            showland: true,
            landcolor: 'rgb(250,250,250)',
            subunitcolor: 'rgb(200,200,200)',
            countrycolor: 'rgb(200,200,200)',
            countrywidth: 0.8,
            subunitwidth: 0.5
        }
    };

    Plotly.plot(myDiv, data, layout, {showLink: false});

});