import React, { Fragment } from 'react';
import { Link } from '../../routes';
import '../../styles/main.scss';

const Header = () => (
    <Fragment>
        <Link route="index">
            <a>Home</a>
        </Link>
        <Link route="about">
            <a>About</a>
        </Link>
        <Link route="cv">
            <a>Cv</a>
        </Link>
        <Link route="portfolios">
            <a>Portfolios</a>
        </Link>
        <Link route="blogs">
            <a>Blogs</a>
        </Link>
    </Fragment>
);

export default Header;
