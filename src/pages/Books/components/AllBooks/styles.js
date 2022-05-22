import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;  
    align-items: center;
    justify-content: center;
`
const ImgWrapper = styled.div`
    width: 80%;
    background-color: blue;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    @media(max-width: 770px){
        width: 95%;
    }
    @media(min-width: 2500px){
        width: 70%;  
    }
`
const Img = styled.img`
    height: 16rem;
    width: 10rem ;
    margin-right:15px;   

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
export { Container, Img, ImgWrapper }