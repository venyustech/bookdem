import React from 'react';
import AddFavorites from '../../../../components/AddFavorites';

import * as S from './styles';

function AllBooks({ allBooks, handleFavoritesClick }) {
    return (
        <S.Container>
            <S.ImgWrapper>
                {allBooks.map((movie, index) =>
                    <S.ImgBox key={index} >
                        <S.Img src={movie.pictureUrl} alt="blabla"  ></S.Img>
                        <S.Overlay onClick={() => handleFavoritesClick(movie)}>
                            <AddFavorites />
                        </S.Overlay>
                    </S.ImgBox>
                )}
            </S.ImgWrapper>
        </S.Container>

    );
}

export default AllBooks;