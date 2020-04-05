import React from 'react';
import { Card, Row, Container, Col, Form } from 'react-bootstrap';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import * as d3 from 'd3';


export default class D3ProgressChart extends React.Component {

    drawChart() {
        var value = 0.3
        var text = Math.round(value * 100) + '%'
        var data = [value, 1 - value]

        // Settings
        var width = 300
        var height = 300
        var anglesRange = 0.8 * Math.PI     // if 0.5 it will be half circle
        var radis = Math.min(width, 2 * height) / 2
        var thickness = 30
        // Utility 
        //     var colors = d3.scale.category10();
        var colors = ["#5EBBF8", "#F5F5F5"]

        var pies = d3.pie()
            .value(d => d)
            .sort(null)
            .startAngle(anglesRange * -1)
            .endAngle(anglesRange)

        var arc = d3.arc()
            .outerRadius(radis)
            .innerRadius(radis - thickness)

        var translation = (x, y) => `translate(${x}, ${y})`

        // Feel free to change or delete any of the code you see in this editor!
        var svg = d3.select("#progress").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "half-donut")
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


        svg.selectAll("path")
            .data(pies(data))
            .enter()
            .append("path")
            .attr("fill", (d, i) => colors[i])
            .attr("d", arc)

        svg.append("text")
            .text(d => text)
            .attr("dy", "-3rem")
            .attr("class", "label")
            .attr("text-anchor", "middle")
    }

    componentDidMount() {
        window.addEventListener('load', this.drawChart());
    }


    render() {
        return (
            <Container>
                <Row>
                    <div id="progress"></div>
                </Row>
            </Container>
        )
    }
}