import React from 'react';
import * as S from './styles';

function HeadersTitles({ header }) {

    return (
        <S.Container>
            <S.HeaderWrapper>
                <S.HeaderTitle >{header}</S.HeaderTitle>
            </S.HeaderWrapper>
            <S.HorizontalBar />
        </S.Container>
    );
}

export default HeadersTitles;