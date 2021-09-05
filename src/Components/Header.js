import React,{useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header() {
    const [burgerStatus, setBurgerStatus]=useState(false);


    return (
        <Container>
            <a>
                <img src="/TeslaPhotos/logo.svg" alt="Logo" />
            </a>
            <Menu>
                
                    <a href="/">Model S</a>
                    <a href="/">Model Y</a>
                    <a href="/">Model 3</a>
                    <a href="/">Model X</a>
                    <a href="/">Solar Panels</a>
                    <a href="/">Solar Roof</a>
                

            </Menu>
            <Rightmenu>
               
               <a href="/">Shop</a>
               <a href="/">Tesla Account</a>
               <CustomMenu onClick={()=> setBurgerStatus(true)}/>
                    
               
            </Rightmenu>
            <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={()=> setBurgerStatus(false)}/> 
                    </CloseWrapper>               
                    <li><a href="/" >Model S</a></li>
                    <li><a href="/" >Model 3</a></li>
                    <li><a href="/" >Model X</a></li>
                    <li><a href="/" >Model Y</a></li>
                    <li><a href="/" >Solar Roof</a></li>
                    <li><a href="/" >Solar Panels</a></li>
                    <li><a href="/" >Existing inventory</a></li>
                    <li><a href="/" >Used Inventory</a></li>
                    <li><a href="/" >Trade-In</a></li>
                    <li><a href="/" >Test Drive</a></li>
                    <li><a href="/" >Powerwall</a></li>
                    <li><a href="/" >Commercial Energy</a></li>
                    <li><a href="/" >Utilities</a></li>
                    <li><a href="/" >Charging</a></li>
                    <li><a href="/" >Find Us</a></li>
                    <li><a href="/" >Support</a></li>
                    <li><a href="/" >More</a></li>

            </BurgerNav>
            
        </Container>
    )
}

export default Header;

const Container=styled.div`

    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu=styled.div`

    display: flex;
    align-item: center;
    flex: 1;
    justify-content: center;
    
    a{
       
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        display:none;
    }


`

const Rightmenu=styled.div`

    display: flex;
    align-items: center;
    curser:pointer;

   a{ 
   
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    
   }
    

`

const CustomMenu=styled(MenuIcon)`   

`
const CloseWrapper=styled.div`   
    display: flex;
    justify-content: flex-end;
`

const CustomClose=styled(CloseIcon)`   
    cursor: pointer;
`


const BurgerNav=styled.div`

   position: fixed;
   top: 0;
   bottem: 0;
   right: 0;
   background: white;
   width: 250px;
   z-index:999;
   transform: ${props=> props.show ? `translateX(0)`:`translateX(100%)`};
   transition: transform 0.4s ease-in;

   li{
    text-align: start;
    list-style: none;
    padding:15px 0;
    border-bottom: 1px solid black;

    a{
        font-weight: 
    } 
   }
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;

   
  
    

`
