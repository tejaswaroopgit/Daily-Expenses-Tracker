import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';


export default class ToDoExpenseCards extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row> Expenses Card Goes Here</Row>
                <Row>
                    <Col lg={3}>
                    <Card>
                        Sample  Content for the Cards Goes here..!!
                    </Card>
                    </Col>
                    <Col lg={3}>
                    <Card>
                        Sample  Content for the Cards Goes here..!!
                    </Card>
                    </Col>
                    <Col lg={3}>
                    <Card>
                        Sample  Content for the Cards Goes here..!!
                    </Card>
                    </Col>
                    <Col lg={3}>
                    <Card>
                        Sample  Content for the Cards Goes here..!!
                    </Card>
                    </Col>
                </Row>

            </Container>
        )
    }
}