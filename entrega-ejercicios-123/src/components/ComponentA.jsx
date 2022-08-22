import React, { Component } from 'react';
import ComponentB from './ComponentB'


class ComponentA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            connected: false,

            email: 'emmanueltaborda8@gmail.com',
            name: 'Emmanuel',
            lastname: 'Taborda',

            perro: (currentState) => {
                if (currentState) {
                    this.setState({ connected: false })
                } else {
                    this.setState({ connected: true })
                }
            }
        }
    }

    
    render() {
        return (
            <ComponentB
                email={this.state.email}
                name={this.state.name}
                lastname={this.state.lastname}
                connected={this.state.connected}
                setConnected={this.state.perro}
            />
        );
    }
}




export default ComponentA;
