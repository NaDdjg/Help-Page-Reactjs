import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
// import { Fade } from 'react-reveal';

function Navigation() {
    return (
        // <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" width="53" height="51" viewBox="0 0 48 53" />
            </div>
        </NavigationStyled>
        // </Fade>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    min-height: 10vh;
    align-items: center;
`;
export default Navigation
