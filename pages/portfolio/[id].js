import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'next/router';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';

class Portfolio extends Component {
    static async getInitialProps({ query: { id } }) {
        let post = {};
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            post = response.data;
        } catch (err) {
            console.error(err);
        }

        return { post };
    }

    render() {
        const { post } = this.props; 
        return (
            <BaseLayout>
                <BasePage>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default withRouter(Portfolio);
