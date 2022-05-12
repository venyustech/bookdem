import React, { useContext } from 'react';
import UserContext from '../../providers/Auth';

// import { Container } from './styles';

function HomePage() {
    const { initializing } = useContext(UserContext);
    return (
        <div>ola mundo {initializing} </div>
    );
}

export default HomePage;