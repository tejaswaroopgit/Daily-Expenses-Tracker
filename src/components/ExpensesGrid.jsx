import React from 'react';
import { Card, Row, Container, Form, Button, Col } from 'react-bootstrap';
import optionsData from '../components/ExpenseSubcategory.json';
import * as d3 from 'd3';
// import cardsData from './data.json';

export default class ExpenseGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsList: [],
            list: this.props.data,
            showApplyButton: false
        };
    }

    handleExpenseCards = (expeseIndex) => {
        console.log(expeseIndex);
        console.log(this.state.list[expeseIndex]);
        this.state.list.splice(expeseIndex, 1);
        console.log()
        this.setState({ list: this.state.list });
        console.log(this.state.list);
        this.CreateExpeseCards();
    }


    CreateExpeseCards = (abc) => {
        console.log(abc);
        var xyz;
        // console.log(this.state.list);
        // this.setState({list:this.props.data});
        // console.log("entered.CreateExpeseCards");
        var result;
        var divStyle
        var randomcolor;
        if (abc) {
            xyz = abc;
        } else {
            xyz = [];
        };
        console.log(this.state.list);
        result = xyz.map((val, i) => {
            randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            divStyle = { width: 'auto', background: randomcolor, height: '50px', lineHeight: '50px', padding: '0px 5px', borderRadius: '5px', display: 'flex', marginRight: '10px', float: 'left', marginBottom: '2px', border: '1px solid #f2f2f2' }
            return (
                <React.Fragment>
                    <div style={divStyle}>
                        <div style={{ padding: '0px 4px' }}>{val.storeName}</div>
                        <div style={{ padding: '0px 0px 0px 10px' }}><img src={require('../img/close2.png')} style={{ width: '25px', height: '25px' }} alt="" onClick={() => this.handleExpenseCards(i)} /> </div>
                    </div>
                </React.Fragment>
            )
        })
        this.setState({ cardsList: result });
    };
    componentDidMount() {
        console.log("ComponentDidMount.ExpenseGrid");
        this.CreateExpeseCards();
        // this.setState({list:this.props.data});
    }


    render() {
        console.log("ExpenseGrid.render");
        return (
            <Container className="padding-0  display-flex">
                <div style={{ borderRadius: '5px', padding: '10px' }}>
                    {this.state.cardsList}
                </div>
                {this.state.showApplyButton ?
                <Button variant="primary">Apply</Button> : ""
                }
            </Container>
        )
    }
}