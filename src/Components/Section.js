import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,description,leftBtnText,rightBtntext,backgroundImage}) {
    return (
         <Wrap bgImage={backgroundImage}>
         <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
         </Fade>
         <Fade bottom>

            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {
                        rightBtntext && <RightButton>
                        {rightBtntext}
                    </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/TeslaPhotos/down-arrow.svg" />
            </Buttons>
         </Fade>
                
            

        </Wrap>
    )
}

export default Section;

const Wrap=styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props =>`url("/TeslaPhotos/${props.bgImage}")` }

    
`

const ItemText=styled.div`
    padding-top: 15vh;
    text-align: center;


`
const ButtonGroup =styled.div`
    text-align:center;
    display: flex;
    margin-bottom: 45px;
    @media (max-width: 768px){
        flex-direction: column;
    }
    

`
const LeftButton =styled.div`
    background-color: #171313;
    height: 40px;
    width:256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    
    



`
const RightButton =styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;

`

const Buttons =styled.div`



`



const DownArrow= styled.img`


height: 40px;
align-items: center;
margin-left: 45%;
cursor: pointer;
animation: animateDown infinite 1.5s;




`
