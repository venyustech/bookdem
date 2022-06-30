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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    padding: 20px 25px ;
    border-radius: 10px;
    background-color: var(--list-components);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
const OverlayTop = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(255, 255, 255,0.6);
    width: 100%;
    height:15% ;
    top:0;
    transition:0.5s ease; 
    font-family:var( --font-family) ;
    padding: 5px 0; 
    border-radius: 18px 18px 5px 5px ;
    opacity: 1;
    font-size: 15px;
    font-weight:bold ;
`
const OverlayBottom = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(255, 255, 255,0.6);
    width: 100%;
    bottom: 0;
    transition:0.5s ease; 
    font-family:var( --font-family) ;
    padding: 10px 0; 
    border-radius: 18px 18px 18px 18px ;
    opacity: 0;
    font-size: 15px;
`
export { Container, Img, ImgWrapper, ImgBox, OverlayTop, OverlayBottom }