import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import card from '../img/HomePage.png';
import bgCircles from '../img/circleBg.svg';

function HomeSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <img src={card} alt="" width="446" height="248" viewBox="0 0 466 268" className="Homepage" />
                    </div>
                    <div className="card-right">
                        <img src={bgCircles} className="bgCircle" alt="" />
                        <p>
                            Lorsque l'authentification est bien effectuée, la page d'acceuil de notre application est affichée comme suit.
                            Vous pouvez acceder aux cartes mentales recement creée que vous trouverez dans la partie "recent" en bas de la page, ou creer une nouvelle carte mentale en appuyant sur le bouton "modules" qui vous permettera d'acceder a la pages des choix d'une annee/module/cours plus facilement et de maniere efficace.
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

            .Homepage{
                position: relative;
                top:15%;
                right: 5%;
            }
        }

        .card-right{
            
            p{
                text-align: center;
                padding: 0rem 0rem;
            }

            .bgCircle{
                position: absolute;
                top: 5%;
                right: 0;
                z-index: -1;
            }
        }
    }
`;

export default HomeSection
