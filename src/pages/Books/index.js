import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import HeadersTitles from '../../components/HeadersTitles';
import NavBar from '../../components/NavBar';
import { Container } from '../../components/themes';
import { useAuth } from '../../context/Auth';
import { useUtils } from '../../context/Utils';
import { getAllBooks } from '../../services/api';
import AllBooks from './components/AllBooks';
import FavoritesList from './components/Favorites';

function Books() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [allBooks, setAllBooks] = useState(null)
    const { favorites, setFavorites } = useUtils();


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

    const saveToLocalStorage = (books) => {
        localStorage.setItem('favorite-books', JSON.stringify(books))
    }
    const addFavoriteBook = (book) => {
        const newFavoriteList = [...favorites, book]
        setFavorites(newFavoriteList)
        saveToLocalStorage(newFavoriteList)

    }
    const removeFavoriteBook = (book) => {
        const newFavoriteList = favorites.filter((item) => item.id !== book.id)
        setFavorites(newFavoriteList)
        saveToLocalStorage(newFavoriteList)

    }

    if (allBooks === null)
        return (
            <Container>
                <NavBar />
                <Header header='Grupos' />
                <div>carregando...</div>
            </Container>
        )
    else {
        return (
            <Container>
                <NavBar />
                <Header header='Livros' />
                <AllBooks allBooks={allBooks} handleFavoritesClick={addFavoriteBook} />
                <HeadersTitles header='Favoritos' />
                <FavoritesList books={favorites} handleFavoritesClick={removeFavoriteBook} />
            </Container>
        )
    };

}

export default Books;