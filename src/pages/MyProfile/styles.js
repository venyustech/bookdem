import styled from "styled-components";

const UserInfosWrapper = styled.div`
  min-height: 100vh;
  font-family: var(--font-Spotlight);
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 770px) {
    width: 95%;
  }
  @media (min-width: 2500px) {
    width: 70%;
  }
`;
const UserInfosCard = styled.div`
  display: flex;
  width: 80%;
  margin: 8px 0;
  overflow: hidden;
  overflow-x: auto;
  padding: 20px 25px;
  border-radius: 10px;
  background-color: var(--list-components);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const ProfileBox = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProfileBackGround = styled.img`
  filter: brightness(60%);
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
const ProfileImgWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--list-components);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 770px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 2500px) {
    width: 100px;
    height: 100px;
  }
`;
const ProfileImg = styled.img`
  position: relative;
  padding: 10px;
  width: 90%;
  height: 90%;
  border-radius: 50%;
`;
const DescriptionWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
  width: 90%;
  background-color: var(--list-components);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  p {
    font-family: var(--font-family);
  }
`;

export {
  UserInfosWrapper,
  UserInfosCard,
  ProfileBox,
  ProfileBackGround,
  ProfileImgWrapper,
  DescriptionWrapper,
  ProfileImg,
};
