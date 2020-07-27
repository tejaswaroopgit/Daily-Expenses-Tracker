import React from 'react';
import { Card, Row, Container, Form, Button, Col } from 'react-bootstrap';


export default class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           counter:0
        };
    }

    clickToIncrement = () => {
        this.setState({counter: this.state.counter+1});
    }
    componentDidMount(){
        
    }

    render(){
        return(
           <div>
               <div> {this.state.counter}  </div>
               <Button className="btn btn-primary" onclick={clickToIncrement}> Increment </Button>

           </div>

        )
    }
}