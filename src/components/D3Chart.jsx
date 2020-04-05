import React from 'react';
import { Card, Row, Container, Col, Form } from 'react-bootstrap';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import * as d3  from 'd3';


export default class D3chart extends React.Component {


    drawChart() {
        const data = [12, 5, 6, 6, 9, 10];
        const h = this.props.height;

        const svg = d3.select("#barChart")
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .style("margin-left", 100);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
    }

    componentDidMount () {
        window.addEventListener('load', this.drawChart());
    }


    render() {
        // this.drawChart();
        var backgroundPercentageIndicator = 40;
        return (
            <Container>
                <Row>
                <div id="barChart"></div>
                </Row>
            </Container>
        )
    }
}