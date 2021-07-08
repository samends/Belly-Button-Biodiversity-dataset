// from data.js

function init() {
     function buildPlot(sample) {
          d3.json("samples.json").then(function (data) {

               var samples = data.samples.fillter(sampleObject => sampleObject.id === sample)
               var sample_values = samples[0].sample_values
               var otu_ids = samples[0].otu_ids
               var otu_labels = samples[0].otu_labels



               var trace1 = {
                    x: sample_values.slice(0, 10).reverse(),
                    y: otu_ids.slice(0, 10).reverse().map(item => item.out_ids),
                    text: otu_labels.slice(0, 10).reverse(),
                    margin: {
                         l: 100,
                         r: 100,
                         t: 100,
                         b: 100},

                    type: "bar",
                    oriantation: "h"

               };

               var layout = {
                    title: "Top 10 OTUs",



               };

               Plotly.newPlot("bar", trace1, layout);
          })

          function demographic(sampleID) {
               var metadataSample = d3.select("#sample-metadata");
               var metadata = sample.metadata;

               var demographicInfo = metadata.filter(row => row.id === sampleID);
               var samplesID = demographicInfo[0];
               Object.entries(samplesID).forEach([key, value]) => {
                    metadataSample.append("h6").text(`${key.toUpperCase()}:${value}`)
               }
          };



     }

     //On change to the Test Subject ID No

     d3.select("#selDataset").on("change", optionChanged);

     function optionChanged() {

          var dropdownMenu = d3.select("#selDataset");
          var data = []
          var dataset = dropdownMenu.property("value");


          var data = [{
               values: sample_values.slice(0, 10).reverse(),
               labels: otu_labels.slice(0, 10).reverse(),
               type: 'pie'
          }];

          var layout = {
               height: 400,
               width: 500
          };

          Plotly.newPlot("pie", data, layout);
     }

     var trace1 = {
          x: sample_values.slice(0, 10).reverse(),
          y: otu_ids.slice(0, 10).reverse().map(item => item.out_ids),
          text: otu_labels.slice(0, 10).reverse(),
          mode: 'markers',
          marker: {
               color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
               size: [40, 60, 80, 100]
          }
     };

     Plotly.newPlot("#gauge", data, layout);

     var data = [trace1];

     var layout = {
          title: 'Bacteria Sample',
          showlegend: false,
          height: 600,
          width: 600
     };

     Plotly.newPlot("#bubble", data, layout);


     var data = [
          {
               domain: { x: [0, 1], y: [0, 1] },
               value: 450,
               title: "Belly Button Washing Frequency Scrubs per Week",
               type: "indicator",
               mode: "gauge+number+delta",
               delta: { reference: 380 },
               gauge: {
                    axis: { range: [null, 500] },

                    steps: [
                         { range: [0, 250], color: "lightgray" },
                         { range: [250, 400], color: "gray" }
                    ],
                    threshold: {
                         line: { color: "red", width: 4 },
                         thickness: 0.75,
                         value: 490
                    }
               }
          }
     ];

     var layout = { width: 600, height: 450, margin: { t: 100, b: 0 } };
     Plotly.newPlot('myDiv', data, layout);









     buildPlot([0])

     init();
}



