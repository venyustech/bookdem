import React from 'react';
import JoinGroupOverlay from '../../../../components/JoinGroupOverlay';
import AddTitleOverlay from '../../../../components/AddTitleOverlay';
import * as S from './styles';

function MyGroups({ groups }) {
    return (
        <S.Container>
            <S.ImgWrapper>
                {groups.map((group, index) =>
                    <S.ImgBox key={index} >
                        <S.Img src={group.profileImg} alt="blabla"  ></S.Img>
                        <S.OverlayTop >
                            <AddTitleOverlay title={group.title} />
                        </S.OverlayTop>
                    </S.ImgBox>
                )}
            </S.ImgWrapper>
        </S.Container>

    );
}

export default MyGroups;