import React, { Fragment } from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

const Header = () => (
    <Fragment>
        <p className="customClass">P element test</p>
        <p className="customClassFromFile">P element test from file</p>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/cv">
            <a>Cv</a>
        </Link>
        <Link href="/portfolios">
            <a>Portfolios</a>
        </Link>
        <Link href="/blogs">
            <a>Blogs</a>
        </Link>
    </Fragment>
);

export default Header;
