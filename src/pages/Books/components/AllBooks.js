import React from 'react';
import AddFavorites from '../../../components/AddFavorites';

import * as S from '../../../components/themes/booksAndGroupsWrapper';

function AllBooks({ allBooks, handleFavoritesClick }) {
    return (
        <S.Container>
            <S.ImgWrapper>
                {allBooks.map((book, index) =>
                    <S.ImgBox key={index} >
                        <S.Img src={book.pictureUrl} alt="blabla"  ></S.Img>
                        <S.OverlayBottom onClick={() => handleFavoritesClick(book)}>
                            <AddFavorites />
                        </S.OverlayBottom>
                    </S.ImgBox>
                )}
            </S.ImgWrapper>
        </S.Container>

    );
}

export default AllBooks;