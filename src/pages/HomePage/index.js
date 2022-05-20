import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { Container } from '../../components/themes';
import { useAuth } from '../../context/Auth';
import * as S from './styles';

function HomePage() {
    const navigate = useNavigate();
    const { token } = useAuth();
    useEffect(() => {
        if (!token) {
            navigate('/sign-in')
        }
    }, [token, navigate])


    return (
        <Container>
            <NavBar />
            <S.JoinGroupWrapper>
                <div>
                    Um grupo de leitura para chamar de seu
                    <S.ButtonJoin onClick={() => navigate('/groups')}>
                        Participar
                    </S.ButtonJoin>
                </div>
            </S.JoinGroupWrapper>
        </Container>
    );
}

export default HomePage;