import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import card from '../img/Login.png';
import bgCircles from '../img/circleBg.svg';

function LoginSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            Guide de démarrage
                        </h2>
                        <p>
                            Pour commencer, vous devez vous connectez a votre compte relié a l'Esi
                            pour cela, la partie authentification est importante et vous permettra de recuperer les cours de la platform talent-esi a partir du lien: https://talents.esi.dz/scolar/programme_list/
                            Il vous suffit de cliquer sur "sign up with Google", et de vous connecter avec mail.
                        </p>
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" width="446" height="248" viewBox="0 0 466 268" className="login" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);
        }
        .card-right{
            display: flex;
            justify-content: flex-end;
            img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}

            .login{
                position: relative;
                top:35%;
                left:10%;
                right: auto;
            }
        }

        .card-left{
            p{
                padding: 1rem 0;
            }

            .bgCircle{
                position: absolute;
                top: 30%;
                left: -10%;
                z-index: -1;
            }
        }
    }
`;

export default LoginSection
