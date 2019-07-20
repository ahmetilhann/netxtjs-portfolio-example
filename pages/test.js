import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'next/router';
import BaseLayout from '../components/layouts/BaseLayout';

class Test extends Component {
    static async getInitialProps({ query: { id } }) {
        return { id };
    }

    render() {
        const { id } = this.props;
        return (
            <BaseLayout>
                <h1>I am test page id</h1>
                <h2>{id}</h2>
            </BaseLayout>
        );
    }
}

export default withRouter(Test);
