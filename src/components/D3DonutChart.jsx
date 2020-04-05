import React from 'react';
import { Card, Row, Container, Col, Form } from 'react-bootstrap';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import * as d3 from 'd3';


export default class D3DonutChart extends React.Component {

    drawChart() {
        const height = this.props.height;

        const width = this.props.width;

        //     var width = 450;
        // var height = 450;
        var margin = 50;

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(200, 200) - margin

        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#my_dataviz")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // Create dummy data
        var data = { a: 9, b: 20, c: 30, d: 8, e: 12, f: 15, g: 20 };

        // set the color scale
        var color = d3.scaleOrdinal()
            .domain(data)
            .range(["#f07a2b", "#ebc554", "#b9d642", "#33f719", "#0ef0ac", "#25eaf5", "#3d3d3e"])

        // Compute the position of each group on the pie:
        var pie = d3.pie()
            .value(function (d) { return d.value; })
        var data_ready = pie(d3.entries(data));
        console.log(data_ready);


        var label = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - 80);

        var arcGenerator = d3.arc()
            .innerRadius(radius)
            .outerRadius(radius - 70)


        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg.selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(80)
                .outerRadius(radius)
            )
            .attr('fill', function (d) { return (color(d.data.key)) })
            .attr("stroke", "white")
            .style("stroke-width", "4px")
            .style("opacity", 1)
        // .text(function(d){return (label(d))});

        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('text')
            .text(function (d) { return "Exp " + d.data.key })
            .attr("transform", function (d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
            .style("text-anchor", "middle")
            .style("font-size", 17)

    }

    componentDidMount() {
        window.addEventListener('load', this.drawChart());
    }


    render() {
        return (
            <Container>
                <Row>
                    <div id="my_dataviz"></div>
                </Row>
            </Container>
        )
    }
}