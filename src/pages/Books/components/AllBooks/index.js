import React from 'react';

import * as S from './styles';

function AllBooks({ allBooks }) {
    return (
        <S.Container>
            <S.ImgWrapper>
                {allBooks.map((movie, index) =>
                    <S.Img src={movie.pictureUrl} alt="blabla" key={index} ></S.Img>
                )}
            </S.ImgWrapper>
        </S.Container>

    );
}

export default AllBooks;