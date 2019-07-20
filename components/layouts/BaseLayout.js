import React, { Fragment } from 'react';
import Header from '../shared/Header';

const BaseLayout = ({ children }) => (
    <Fragment>
        <Header />
        { children }
    </Fragment>
);

export default BaseLayout;
