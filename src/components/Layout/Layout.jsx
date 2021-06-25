import React from 'react';
import { withRouter } from 'react-router-dom';

const Layout = withRouter(({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
});

export default Layout;