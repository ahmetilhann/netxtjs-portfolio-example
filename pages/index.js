import React from 'react';
import { Button, Container } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';


class Index extends SuperComponent {
    constructor() {
        super();

        this.state = {
            title: 'This is a title',
        };
    }

    render() {
        return (
            <BaseLayout>
                <Container>
                    <Button color="danger">MErhaba</Button>
                </Container>
            </BaseLayout>
        );
    }
}

export default Index;
