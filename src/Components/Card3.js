import React from 'react';
import styled from 'styled-components';

function Card3({
    account, text, card, active, inactive, icon10, icon11, icon12, text10, text11, text12
}) {
    return (
        <CardStyled >
            <h4 className="card-title">
                {account}
            </h4>
            <p className="c-para">{text}</p>
            <div className="card-image-con">
                <img src={card} alt="" />
            </div>
            <div className="plan-con">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <div className="list-con">
                <p className="text-check">
                    <img src={icon10} alt="" />
                    {text10}
                </p>
                <p className="text-check">
                    <img src={icon11} alt="" />
                    {text11}
                </p>
                <p className="text-check">
                    <img src={icon12} alt="" />
                    {text12}
                </p>
            </div>
        </CardStyled >
    )
}

const CardStyled = styled.div`
    background-color: white;
    padding: 3rem 2rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .card-title{
        font-size: 2.5rem;
        color: #000;
        text-align: center;
        padding: 1.5rem 0;
        span{
            font-size: 1.5rem;
        }
    }

    .button-con{
        text-align: center;
        padding: 1.5rem 0;
        button{
            border: 2px solid #16194F;
            padding: .8rem 1.8rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 20px;
            font-size: inherit;
            color: #16194F;
        }
    }

    .card-image-con{
        display: flex;
        justify-content: center;
        padding: .8rem 1.8rem;
        img{
            width: 70%;
        }
    }

    .plan-con{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 0;
        img{
            padding: 0 .3rem;
        }
    }

    .text-check{
        display: flex;
        align-items: center;
        padding: .5rem 0;
        img{
            padding-right: .1rem;
            width: 40px;
        }
    }
    
`;
export default Card3;
