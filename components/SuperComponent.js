import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class Blogs extends Component {
    constructor() {
        super();

        this.someVariable = 'This some variable';
    }

    alertName(title) {
        alert(title);
    }

    render() {
        return (
            <BaseLayout>
                <h1>Hello blogs page!!</h1>
            </BaseLayout>
        );
    }
}

export default Blogs;
