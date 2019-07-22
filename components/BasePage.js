import React from 'react';
import { Container } from 'reactstrap';

const BasePage = ({ children, className = '' }) => (
    <div className={`base-page ${className}`}>
        <Container>
            {children}
        </Container>
    </div>
);

export default BasePage;
