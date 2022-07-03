import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Container } from "../../components/themes";
import { useAuth } from "../../context/Auth";
import { getUser } from "../../services/api";
import * as S from "./styles";

function MyProfile() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
    const promise = getUser(token);
    promise.then((response) => {
      setUser(response.data);
    });
    promise.catch((error) => {
      console.log(error.data.message);
    });
  }, [token, navigate]);

  if (user === null)
    return (
      <Container>
        <NavBar />
        <Header header="Carregando..." />
      </Container>
    );
  return (
    <Container>
      <NavBar />
      <Header />
      <S.UserInfosWrapper>
        <S.UserInfosCard>
          <S.ProfileBox>
            <S.ProfileBackGround src={user.backgroungImg}></S.ProfileBackGround>
            <S.ProfileImgWrapper>
              <S.ProfileImg
                src={user.profileImg}
                alt="user profile image"
              ></S.ProfileImg>
            </S.ProfileImgWrapper>
            <S.DescriptionWrapper>
              <div>{user.username}</div>
              <p>{user.description}</p>
            </S.DescriptionWrapper>
          </S.ProfileBox>
        </S.UserInfosCard>
      </S.UserInfosWrapper>
    </Container>
  );
}

export default MyProfile;
