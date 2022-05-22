import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { Container } from '../../components/themes';
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { getAllGroups } from '../../services/api';
import AllGroups from './components/AllGroups';
import HeadersTitles from '../../components/HeadersTitles';

function Groups() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [groups, setGroups] = useState(null)

    useEffect(() => {
        if (!token) {
            navigate('/sign-in')
        }
        handlePromise();
    }, [token, navigate])

    function handlePromise() {
        const promise = getAllGroups(token);
        promise.then(response => {
            setGroups(response.data.groups)
            console.log(response.data.groups)
        })
        promise.catch(error => { console.log("Erro no sistema! Tente novamente.") })
    }

    const joinNewGroup = (group) => {
        console.log("group", group)
    }
    if (groups === null)
        return (
            <Container>
                <NavBar />
                <Header header='Grupos' />
                <div>carregando...</div>
            </Container>
        )
    return (
        <Container>
            <NavBar />
            <Header header='Grupos' />
            <AllGroups groups={groups} handleJoinClick={joinNewGroup} />
            <HeadersTitles header='Meus Grupos' />
        </Container>
    );
}

export default Groups;