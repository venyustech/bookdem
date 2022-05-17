import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

// import { Container } from './styles';

function HomePage() {
    const navigate = useNavigate();
    const { initializing, token } = useAuth();

    useEffect(() => {
        if (!token) {
            navigate('/sign-in')
        }
    }, [token, navigate])


    return (
        <div>ola mundo {initializing} </div>
    );
}

export default HomePage;