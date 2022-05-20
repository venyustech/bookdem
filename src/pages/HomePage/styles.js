import styled from 'styled-components';

const JoinGroupWrapper = styled.div`
    font-family:var(--font-Spotlight);
    font-size: 70px;
    color: #5F4DA7;
    width:40%;
    padding-top: 8rem;
    margin-left:10%;
    @media(min-width:2500px){
        padding-top: 15rem;
        font-size: 150px;
    }

    @media(max-width:1000px){
        width: 80%;
        padding-top: 15rem;
        font-size: 80px;
    }
    @media(max-width:580px){
        width: 95%;
        padding-top: 5rem;
        font-size: 60px;
        margin: 0 3%;
    }
     @media(max-width:290px){
        width: 95%;
        padding-top: 5rem;
        font-size: 50px;
        margin: 0 3%;
    }
`
const ButtonJoin = styled.button`
    width: 150px;
    color: #FFFFFF;
    background-color:#f50057; 
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 45px;
    margin-left: 50px;
    text-align: center;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    :hover{
        background-color:#7c4dff; 
    }
    @media(min-width:2500px){
        font-weight: 700;
        font-size: 50px;
        width: 350px;
        min-height: 90px ;

    }
`
export { JoinGroupWrapper, ButtonJoin }