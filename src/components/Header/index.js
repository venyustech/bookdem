import React from 'react';
import SearchBox from '../SearchBox';

import * as S from './styles';

function Header({ header }) {
    const [barOpened, setBarOpened] = React.useState(false);

    return (
        <S.Container>
            <S.HeaderWrapper>
                <S.HeaderTitle barOpened={barOpened} >{header}</S.HeaderTitle>
                <SearchBox barOpened={barOpened} setBarOpened={setBarOpened} />
            </S.HeaderWrapper>
            <S.HorizontalBar />
        </S.Container>
    );
}

export default Header;