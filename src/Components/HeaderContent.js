import React from 'react';
import styled from 'styled-components';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';
import shadow from '../img/logoflou.svg';
// import { Fade } from 'react-reveal';

function HeaderContent() {
    return (
        <HeaderContentStyled>
            {/* <Fade left cascade> */}
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Esi Maps</h1>
                    <p className="white">
                        Une application desktop qui permet aux etudiant de l’Esi de créer, de modifier et de partager des cartes mentales de manière simple et efficace
                    </p>
                    {/* <Secondarybutton name={'Register Now'} /> */}

                </div>
                <img src={shadow} alt="" className="shadowlogo" />
            </div>

            {/* </Fade> */}
            {/* <Fade right> */}
            <div className="right-content">
                {/* <img src={phone} width="3000" height="220" alt="" className="phone" /> */}
                <img src={ring1} alt="" className="ring1" />
                <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" />
            </div>
            {/* </Fade> */}
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:white;
        }
        h1{
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }

        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }

        .shadowlogo{
            position: absolute;
            left:-23%;
            right: auto;
            width: 50%;
            top: 12%;
        }
    }

    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        .phone{
            width: 90%;
        }
        .ring1{
            position: absolute;
            bottom: 20%;
            right: 30%;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
        }
        .message1{
            position: absolute;
            top: 10;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message2{
            position: absolute;
            bottom: 50%;
            left: 0;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
            transition: all .4s ease-in-out;
        }
    }

    //Header Animations
    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;

export default HeaderContent;
