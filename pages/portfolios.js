import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';


class Portfolios extends Component {
    static async getInitialProps() {
        let posts = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;

            console.log('merahba: ', posts);
        } catch (err) {
            console.error(err);
        }

        return { posts: posts.splice(0, 10) };
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <ul>
                    {posts.map(item => (
                        <li>
                            <Link key={item.id} href={`/portfolio?title=${item.title}`} as={`/portfolio/${item.id}`}>
                                <a style={{ fontSize: 28 }}>{item.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </BaseLayout>
        );
    }
}

export default Portfolios;
