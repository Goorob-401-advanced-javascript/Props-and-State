import React from 'react';
import Header from './components/header.js';
import Form from './components/form.js';
import Results from './components/results.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    handleResult = result =>{
        this.setState(result);
    }
    render(){
        return (
            <React.Fragment>
                <Header />
                <Form info= {this.handleResult} />
                <Results results = {this.state} />
            </React.Fragment>
        );
    
    }
}
export default App ;