import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import card from '../img/years.png';
import bgCircles from '../img/circleBg.svg';

function YearsSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <img src={bgCircles} className="bgCircle" alt="" />
                        <p>
                            Pour creer ou ouvrir une carte mentale, on commence par choisir l'annee correspondante au cours qui figurera sur votre carte mentale en cliquant sur le bouton adapté
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" width="446" height="248" viewBox="0 0 466 268" className="years" />
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

            .years{
                position: relative;
                top:-15%;
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
                top: 20%;
                left: -10%;
                z-index: -1;
            }
        }
    }
`;

export default YearsSection
