import styled from "styled-components";

const ImgLogo = styled.img`
    width:250px;
    padding-bottom: 20px ;
    @media(max-width: 600px){
     width: 80%;
    }
`
const PersonLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        color: var(--placeholder-color);
        font-weight: bolder;
        font-size: 20px;
        @media(max-width: 360px) {
            font-size: 12px;
        }
    }
    svg{
        width: 80px;
        height: 80px;
        color: var(--placeholder-color);
         @media(max-width: 360px) {
            width: 50px;
            height: 50px;
        }

    }
`


export { ImgLogo, PersonLogo }