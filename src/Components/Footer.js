import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import logo from '../img/logo.png';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                        <div className="logo-items">
                            <img src={logo} alt="" width="53" height="51" viewBox="0 0 53 51" />
                            <p>
                                Copyright @2023 EsiMaps. <br />
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Fees</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="divv">
                    <div className="div1">
                        <p>
                            Equipe du projet: <br />
                        </p>
                        <p>
                            -Djedjig Nada&nbsp;-Boukhetala Zaineb&nbsp;-Cherchem Sarah  <br />
                        </p>
                        <p>
                            -Hamadene Kamelia&nbsp;      -Laouzai Lina&nbsp;      -Guitoun Djihene <br />
                        </p>
                    </div>
                    <div className='div2'>
                        <p>
                            Equipe des encardrants du projet: <br />
                        </p>
                        <p>
                            -Khouri Selma&nbsp;<br />
                        </p>
                        <p>
                            -Khouani Amine&nbsp;<br />
                        </p>
                    </div>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding: 0 18rem;
    background-color: #DCE2F0;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .logo-con{
        display: flex;
        align-items: center;
        
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;
        li{
            padding: 2rem 0;
            color: #16194F;
        }

        .images-con{
            position: absolute;
            bottom: 15%;
            left:38%;
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5, .image-6{
                margin-left: -22px;
            }
        }
    }

    .divv{
        display: flex;
        justify-content: space-between;
        padding: .3rem 4;

        .div1 {
            position: absolute;
            top: 68%;
            left: 30%;
            padding: 3rem 4;
            
        }
        .div2 {
            position: absolute;
            top: 83%;
            left: 30%;
            padding: 3rem 4;
        }
    }
`;

export default Footer
