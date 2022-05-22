import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { Container } from '../../components/themes';
import { useAuth } from '../../context/Auth';
import { getAllBooks } from '../../services/api';
import AllBooks from './components/AllBooks';

function Books() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [allBooks, setAllBooks] = useState(null)

    useEffect(() => {
        if (!token) {
            navigate('/sign-in')
        }
        handlePromise();
    }, [token, navigate])

    function handlePromise() {
        const promise = getAllBooks(token);
        promise.then(response => {
            setAllBooks(response.data.books)
        })
        promise.catch(error => { console.log("Erro no sistema! Tente novamente.") })
    }

    if (allBooks === null)
        return (<div>Carregando...</div>)
    else {
        return (
            <Container>
                <NavBar />
                <Header header='Livros' />
                <AllBooks allBooks={allBooks} />
            </Container>
        )
    };

}

export default Books;