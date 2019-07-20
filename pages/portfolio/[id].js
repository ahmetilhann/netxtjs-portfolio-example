import React, { Component } from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '../../components/layouts/BaseLayout';


class Portfolio extends Component {
    componentWillMount() {

    }

    render() {
        const { router } = this.props; 
        return (
            <BaseLayout>
                <h1>{router.query.id}</h1>
            </BaseLayout>
        );
    }
}

export default withRouter(Portfolio);
