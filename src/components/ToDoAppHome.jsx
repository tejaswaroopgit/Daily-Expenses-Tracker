import React from 'react';
import { Card, Row, Container,Tabs,Tab } from 'react-bootstrap';
import AddExpense from './AddExpense.jsx';
import ToDoExpenseCards from './ToDoCards.jsx';
import ExpenseSnapshot from './ExpenseSnapshot.jsx';



export default class Welcome extends React.Component {
    componentDidUpdate(){
        //console.log("test");
        //alert("Test ");
    }
    render() {
        return (
            <Container fluid>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Previous Expenses">
                        <ToDoExpenseCards />
                    </Tab>
                    <Tab eventKey="profile" title="Add Expense">
                        <AddExpense />
                    </Tab>
                    <Tab eventKey="contact" title="Expense Snapshot" >
                        <ExpenseSnapshot />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}