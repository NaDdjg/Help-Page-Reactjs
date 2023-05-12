import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import card from '../img/outilDesign.png';
import active from '../img/active.svg';
import inactive from '../img/inactive.svg';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';
import icon7 from '../img/icon7.png';
import icon8 from '../img/icon8.png';
import icon9 from '../img/icon9.png';
import icon10 from '../img/icon10.png';
import icon11 from '../img/icon11.png';
import icon12 from '../img/icon12.png';
import icon13 from '../img/icon13.png';
import icon14 from '../img/icon14.png';
import icon15 from '../img/icon15.png';
import icon16 from '../img/icon16.png';

function RaccourciSection() {
    return (
        <RaccourciStyled>
            <InnerLayout>
                <h3 className="small-heading">Modifier votre carte mentale ?  <span>Utilisez nos Options et fonctionnlités!!</span></h3>
                <p className="c-para">
                    Voici un guide simple qui vous permet de comprendre toute les fonctionnalités accessible dans notre outil, le tout est organisé en 4 groupes selon leur ordre d'apparition dans l'outil</p>
                <div className="card-con">
                    <Card1
                        account={'Presse-papier'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        icon1={icon1}
                        icon2={icon2}
                        icon3={icon3}
                        text1={'Copier le contenu d un noeud'}
                        text2={'Coller le contenu copié precedement '}
                        text3={'Supprimer le noeud selectionné'}
                    />
                    <Card2
                        account={'Maps'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        icon4={icon4}
                        icon5={icon5}
                        icon6={icon6}
                        icon7={icon7}
                        icon8={icon8}
                        icon9={icon9}
                        text4={'Faire apparaitre le bouton de legende du noeud'}
                        text5={'Genérer les notions du cours selon le theme choisi'}
                        text6={'Ajouter un noeud fils a une notion du cours'}
                        text7={'Importer une image'}
                        text8={'Ajouter une notion au cours'}
                        text9={'Modifier et personnaliser la racine de la carte mentale'}
                    />
                    <Card3
                        account={'Maps edits'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        icon10={icon10}
                        icon11={icon11}
                        icon12={icon12}
                        text10={'Changer la couleur du fond de l outil'}
                        text11={'Changer la couleur de la bordure du noeud selectionné'}
                        text12={'Changer la couleur du noeud selectionné'}
                    />
                    <Card4
                        account={'Texte'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        icon13={icon13}
                        icon14={icon14}
                        icon15={icon15}
                        icon16={icon16}
                        text13={'Changer la taille du texte du noeud selectionné'}
                        text14={'Changer le style du texte du noeud selectionné'}
                        text15={'Modifier le texte du noeud selectionné'}
                        text16={'Changer la couleur du texte du noeud selectionné'}
                    />
                </div>
            </InnerLayout>
        </RaccourciStyled>
    )
}

const RaccourciStyled = styled.section`
    .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        padding-top: 7.4rem;
        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .c-para{
        text-align: center;
    }
`;
export default RaccourciSection;
