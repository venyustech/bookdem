import React from 'react';
import AddTitleOverlay from '../../../components/AddTitleOverlay';
import RemoveFavorites from '../../../components/RemoveFavorites';
import * as S from '../../../components/themes/booksAndGroupsWrapper';

function MyGroups({ handleJoinClick, groupsUserJoined }) {
    if (groupsUserJoined == null) {
        return (
            <div>sem grupoooo</div>

        )
    }

    return (
        <S.Container>
            <S.ImgWrapper>
                {groupsUserJoined[0].ParticipantsGroup.map((group, index) =>
                    <S.ImgBox key={index} >
                        <S.Img src={group.group.profileImg} alt="blabla"  ></S.Img>
                        <S.OverlayTop >
                            <AddTitleOverlay title={group.group.title} />
                        </S.OverlayTop>
                        <S.OverlayBottom onClick={() => handleJoinClick(group.group)}>
                            <RemoveFavorites />
                        </S.OverlayBottom>
                    </S.ImgBox>
                )}
            </S.ImgWrapper>
        </S.Container>

    );
}

export default MyGroups;