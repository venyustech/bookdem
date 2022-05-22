import React from 'react';
import RemoveFavorites from '../../../../components/RemoveFavorites';

import * as S from './styles';

function FavoritesList({ books, handleFavoritesClick }) {
    return (
        <S.Container>
            <S.ImgWrapper>
                {books.map((book, index) =>
                    <S.ImgBox key={index}>
                        <S.Img src={book.pictureUrl} alt="bookFavorite"  ></S.Img>
                        <S.Overlay onClick={() => handleFavoritesClick(book)}>
                            <RemoveFavorites />
                        </S.Overlay>
                    </S.ImgBox>

                )}
            </S.ImgWrapper>
        </S.Container>

    );
}

export default FavoritesList;