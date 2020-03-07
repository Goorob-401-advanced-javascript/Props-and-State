/* eslint-disable no-unused-vars */
import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'get',
            header: {},
            body: {},
        };
    }

    changeHandler = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    getData = event => {
        event.preventDefault();
        fetch(this.state.url, {
            method: this.state.method,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                response = response.json()
                    .then(response => {
                        let header = { 'Content-Type': 'application/json' };
                        let body = response;
                        this.setState({ header, body });
                        this.props.info({ header, body });
                    })
                    .catch(err => {
                        let body = { error: err.message };
                        let header = {};
                        this.setState({ header, body });
                        this.props.info({ header, body });
                    });
            });
    }
    render() {
        return (
            <main>
                <section>
                    <form onSubmit={this.getData}>
                        <section>
                            <input type="text" className="url" name="url" value={this.state.url} onChange={this.changeHandler} />
                            <div className="methods">
                                <label>
                                    <input type="radio" name="method" value="get" />
                                    <span>GET</span>
                                </label>
                                <label>
                                    <input type="radio" name="method" value="post" />
                                    <span>POST</span>
                                </label>
                                <label>
                                    <input type="radio" name="method" value="put" />
                                    <span>PUT</span>
                                </label>
                                <label>
                                    <input type="radio" name="method" value="delete" />
                                    <span>DELETE</span>
                                </label>
                                <label> <button type="submit"> GO  ! </button> </label>
                            </div>
                        </section>
                    </form>
                </section>
            </main>
        );
    }

}


export default Form;