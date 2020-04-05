import React from 'react';
import { Card, Row, Container, Col, Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import D3chart from './D3Chart';
import D3DonutChart from './D3DonutChart.jsx';
import D3ProgressChart from './D3ProgressChart';


export default class ExpenseSnapshot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [12, 5, 6, 6, 9, 10],
            width: 300,
            height: 300,
            id: ""
        }
    }


    render() {
        var backgroundPercentageIndicator = 40;
        return (
            <Container>
                <Row>
                    <Col lg={4}>
                        <Form>
                            {/* <InputGroup className="mb-3">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Max Amount Per Month</Form.Label>
                                    <Form.Control type="number" placeholder="Monthly Max Limit" />
                                    <InputGroup.Append>
                                        <Button></Button>
                                    </InputGroup.Append>
                                </Form.Group>
                            </InputGroup> */}

                            <Form.Label>Max Amount Per Month</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Monthly Max Limit"
                                    aria-label="Monthly Max Limit"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button>Click Me</Button>
                                </InputGroup.Append>
                            </InputGroup>

                        </Form>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Amount Reached</Form.Label>
                            <Form.Control type="number" placeholder="Amount Reached" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Amount Left </Form.Label>
                            <Form.Control type="number" placeholder="Amount Lrft" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {/* <div style={{ width: '100%', border: '2px solid black', borderRadius: '4px', height: 'auto', padding: '20px' }}> */}
                        {/* <div>
                            <D3chart data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id} />
                        </div> */}
                        <Col lg={4}>
                            < D3DonutChart data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id} />
                        </Col>
                        <Col lg={2}></Col>
                        <Col lg={4}>
                            <D3ProgressChart data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id} />
                        </Col>
                    {/* </div> */}
                </Row>
            </Container>
        )
    }
}