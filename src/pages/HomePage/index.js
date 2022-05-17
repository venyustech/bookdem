import React from 'react';
import { useAuth } from '../../context/Auth';

// import { Container } from './styles';

function HomePage() {
    const { initializing } = useAuth();

    return (
        <div>ola mundo {initializing} </div>
    );
}

export default HomePage;