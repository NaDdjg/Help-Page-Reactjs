import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import card from '../img/module.png';
import bgCircles from '../img/circleBg.svg';

function ModuleSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <img src={card} alt="" width="446" height="248" viewBox="0 0 466 268" className="module" />
                    </div>
                    <div className="card-right">
                        <img src={bgCircles} className="bgCircle" alt="" />
                        <p>
                            Une liste des modules de chaque semestres de cette année s'affichera comme suit: <br></br>
                            Choisissez le module que vous voulez, dans le semestre correspondant
                            et ensuite cliquez sur le bouton correspondant au cours de votre choix.
                        </p>
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
        .card-left{
            display: flex;
            justify-content: flex-end;
            img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}

            .module {
                position: relative;
                top:10%;
            }
        }

        .card-right{
            p{
                text-align: center;
                padding: 1rem 2rem;
            }
            .bgCircle{
                position: absolute;
                top: 15%;
                right: 0;
                z-index: -1;
            }
        }
    }
`;

export default ModuleSection
