import React from 'react';
import { Card, Row, Container, Form, Button, Col } from 'react-bootstrap';
import optionsData from '../components/ExpenseSubcategory.json';
import * as d3 from 'd3';
import ExpenseGrid from './ExpensesGrid.jsx';
import cardsData from './data.json';


export default class AddExpense extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showProductDiv: false,
            AddExpenseDetails: {},
            handleProductDesc: false,
            prepareOptionsForCategorType: [],
            showAddNewExpenseTypeInput: false,
            data: [],
            formData: [],
            formList: {}
        };
    }

    expenseAmountHandler = (e) => {
        console.log(e.target.value);
        if (e.target.value <= 2000) {
            this.setState({ showProductDiv: false });
        } else {
            this.setState({ showProductDiv: true });
        }
        this.onchangeFormData(e);
    } 

    showProductDiv = (x) => {
        if (x == "true") {
            // this.state = { showProductDiv: false };
            this.setState({ showProductDiv: true })
        }
    }

    showHideProductDesc = (e) => {
        if (e.target.checked) {
            this.setState({ handleProductDesc: true })
        } else {
            this.setState({ handleProductDesc: false })

        }
    }

    selectedOption = (e) => {
        console.log("Onclick selectedOption");
        if (e.target.value != "select") {
            console.log(e.target.value);
            this.prepareOptionsForCategorType(e.target.value);
        }
    }

    prepareOptionsForCategorType = (e) => {
        if (e != "select") {
            let selectedCategory = e;
            console.log("selectedCategory  "+  selectedCategory);
            let optionsList = Object.keys(optionsData[selectedCategory]);
            let result = [];
            result = optionsList.map((item) => <option value={item}>{item}</option>);
            console.log("Options for the subcategory   "+  result);
            this.setState({ prepareOptionsForCategorType: result });
        }
    }

    listOfAddedNewExpenses() {
        let list = [];
    }

    addNewExpensePills() {
        return (
            <React.Fragment>
                <div style={{ width: 'auto', background: '#f2f2f2', height: '50px', lineHeight: '50px', padding: '0px 5px', borderRadius: '5px', display: 'flex', marginRight: '10px' }}>
                    <div style={{ padding: '0px 4px' }}>Sample  text</div>
                    <div style={{ padding: '0px 0px 0px 10px' }}><img src={require('../img/addIcon.png')} style={{ width: '25px', height: '25px' }} alt="" /> </div>
                </div>
            </React.Fragment>
        )
    }

    handleAddNewExpenseInput = () => {
        this.setState({ showAddNewExpenseTypeInput: !this.state.showAddNewExpenseTypeInput });
    }

    onchangeFormData = (e) => {
        console.log("Onchange  onchangeFormData");
        let x = this.state.formList;
        x[e.target.name] = e.target.value;
    }

    onSubmitFormData = (e) => {
        e.preventDefault();
        if (Object.keys(this.state.formList).length != 0) {
            this.state.formData.push(this.state.formList);
            this.setState({formData : this.state.formData});
            this.setState({ data : this.state.formData },()=>{
                this.state.formList = {};
                this.refs.expenseGridComponent.CreateExpeseCards(this.state.data);
                this.refs.formRefrence.reset();
            });
            // console.log(this.state.data);
            // this.state.formList = {};
            // this.refs.expenseGridComponent.CreateExpeseCards(this.state.data);
            // this.refs.formRefrence.reset();
        }
    }

    removeSelectedExpense = (objLabel) =>{
        let data = this.state.data;
        data.map((value,i)=>{
            console.log(objLabel);
            if(value.storeName == objLabel) {return}
        })
    }

    componentDidMount(){
        console.log("AddExpense.componentdismount")
    }

    render() {
        console.log("AddExpense.render");
        return (
            <Container>
                <Row>
                    <Col lg={8}>
                        <Form ref="formRefrence">
                            <Row>
                                <Col lg={5}>
                                    <Form.Group  >
                                        <Form.Label>Category Of Expense</Form.Label>
                                        <Form.Control name="ExpenseType" as="select" onClick={this.selectedOption} onChange={(e) => this.onchangeFormData(e)}>
                                            <option value="select">---Select---</option>
                                            <option value="Food And Drink">Food And Drink</option>
                                            <option value="Shopping">Shopping</option>
                                            <option value="payments">payments</option>
                                            <option value="Transport">Transport</option>
                                            <option value="Medical">Medical</option>
                                            <option value="Insurance">Insurance</option>
                                            <option value="Others">Others</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={5}>
                                    <Form.Group >
                                        <Form.Label>SubCategory Of Expense</Form.Label>
                                        <Form.Control name="ExpenseSubtype" as="select" onChange={(e) => this.onchangeFormData(e)} >
                                            <option value="select">---Select---</option>
                                            {this.state.prepareOptionsForCategorType}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={2}>
                                    <Form.Group>
                                        <Form.Label> Add New  </Form.Label>
                                        <img src={require('../img/addIcon.png')} style={{ width: '40px' }} onClick={this.handleAddNewExpenseInput} alt="" />
                                    </Form.Group>
                                </Col>

                            </Row>
                            {this.state.showAddNewExpenseTypeInput ?
                                <Row >
                                    <Col lg={4}>
                                        <Form.Group >
                                            <Form.Label>Add Specific Expense:</Form.Label>
                                            <Form.Control name="unlistedExpenseLabel" onChange={(e) => this.onchangeFormData(e)} type="text" placeholder="Add New Expense not present in the list" style={{ display: 'inline', width: '85%' }} />
                                            <img src={require('../img/addIcon.png')} style={{ height: '40px', display: 'inline' }} alt="" onClick={this.handleAddNewExpenseInput} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>

                                    </Col>
                                </Row>
                                : ""}
                            <Form.Group >
                                <Form.Label>Date of Expense:</Form.Label>
                                <Form.Control name="dateOfExpense" onChange={(e) => this.onchangeFormData(e)} type="date" placeholder="Kind Of Expense" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Please specify the retail store.</Form.Label>
                                <Form.Control name="storeName" onChange={(e) => this.onchangeFormData(e)} type="text" placeholder="Store Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Expense Amount:</Form.Label>
                                <div style={{ display: 'flex' }}>
                                    <Form.Control name="expenseAmount" type="number" onChange={this.expenseAmountHandler} style={{ width: '95%' }} />
                                    <Form.Control type="checkbox" style={{ width: '5%' }} onChange={this.showHideProductDesc} />
                                </div>
                            </Form.Group>
                            {this.state.showProductDiv ?
                                <Form.Group >
                                    <Form.Label>Type Of Product:</Form.Label>
                                    <Form.Control name="specifiProductDesc" onChange={(e) => this.onchangeFormData(e)} type="text" />
                                </Form.Group> : ""}
                            {this.state.handleProductDesc ? <Form.Group >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control name="description" onChange={(e) => this.onchangeFormData(e)} as="textarea" rows="3" />
                            </Form.Group> : ""
                            }
                            <Button variant="primary" type="submit" onClick={this.onSubmitFormData}>
                                Submit
                    </Button>
                        </Form>

                    </Col>
                    <Col lg={4}>
                        <div style={{ marginTop: '10px', border: '2px solid #f2f2f2' }}>
                            <ExpenseGrid data={this.state.data} ref="expenseGridComponent" removeSelectedExpense={this.removeSelectedExpense} />
                        </div>

                    </Col>
                </Row>

            </Container>
        )
    }
}