import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;  
    align-items: center;
    justify-content: center;
`
const ImgBox = styled.div`
    display:flex;
    justify-content: center;
    position: relative;
    margin-right:15px;   
    border-radius: 15px;
    padding:5px 5px;
    background-color: #ffffff;
    transition:transform 0.2s ;
    :hover{
        cursor: pointer;
        transform:scale(1.1);
        div{
            opacity:1 ;
        }
    }

`
const ImgWrapper = styled.div`
    width: 75%;
    display: flex;

    overflow: hidden;
    overflow-x: auto;
    padding: 15px 15px ;
    background-color: var(--list-components);
    @media(max-width: 770px){
        width: 95%;
    }
    @media(min-width: 2500px){
        width: 70%;  
    }
`
const Img = styled.img`
    position: relative;
    height: 12rem;
    width: 9rem ;
    border-radius: 15px;
    @media(max-width: 780px){
        height: 12rem;
        width: 6rem ;
    } 
    @media(max-width: 450px){
        height: 10rem;
        width: 5rem ;
    } 
    @media(min-width: 2500px){
        height: 28rem;
        width: 18rem ;
    }
  
`

const Overlay = styled.div`
    position:absolute;
    background-color:rgba(255, 255, 255,0.6);
    width: 100%;
    bottom:0;
    transition:0.5s ease; 
    font-family:var( --font-family) ;
    padding: 5px 0; 
    border-radius: 0px 0px 18px 18px;
    opacity: 0;
    font-size: 12px;
    
`
export { Container, Img, ImgWrapper, ImgBox, Overlay }