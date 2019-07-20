import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';


class Index extends SuperComponent {
    constructor() {
        super();

        this.state = {
            title: 'This is a title',
        };

        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');  
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateTitle() {
        this.setState({ title: 'Title degisti.' });
    }

    render() {
        console.log('render');             
        return (
            <BaseLayout>
                <h1>I am index page</h1>    
                <button type="button" onClick={this.updateTitle.bind(this)}>CHANGE</button>
            </BaseLayout>
        );
    }
}

export default Index;
