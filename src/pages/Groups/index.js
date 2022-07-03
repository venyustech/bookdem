import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Container } from "../../components/themes";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import {
  deleteParticipantOfGroup,
  getAllGroups,
  getJoinedGroupsByUser,
  getUser,
  joinNewGroupByUser,
} from "../../services/api";
import AllGroups from "./components/AllGroups";
import HeadersTitles from "../../components/HeadersTitles";
import { useUtils } from "../../context/Utils";
import MyGroups from "./components/MyGroups";

function Groups() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState(null);
  const [groupsUserJoined, setGroupsUserJoined] = useState(null);

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
    getGroups();
    getGroupsUserJoined();
  }, [token, navigate]);

  function getGroups() {
    const promise = getAllGroups(token);
    promise.then((response) => {
      setGroups(response.data.groups);
    });
    promise.catch((error) => {
      console.log(error.data.message);
    });
  }
  function getGroupsUserJoined() {
    const promise = getJoinedGroupsByUser(token);
    promise.then((response) => {
      setGroupsUserJoined(response.data.groups);
    });
    promise.catch((error) => {
      console.log(error.data.message);
    });
  }

  const joinNewGroup = (group) => {
    if (group.owner.id === user.id)
      alert("Voce já é um participante desse grupo!");

    let isJoinedOrnot = false;
    groupsUserJoined.map(
      (joinedList) =>
        (isJoinedOrnot = handleAlreadyJoinedGroupOrNot(joinedList, group))
    );
    if (!isJoinedOrnot) handleJoinNewGroup(user.id, group.id);
  };

  function handleAlreadyJoinedGroupOrNot(joinedList, groupUserWantJoin) {
    if (joinedList.ParticipantsGroup.length === 0) return false;
    joinedList.ParticipantsGroup.forEach((group) => {
      if (group.id === groupUserWantJoin.id) {
        return true;
      }
    });

    if (joinedList.AdminsGroup.length === 0) return false;
    joinedList.AdminsGroup.forEach((group) => {
      if (group.id === groupUserWantJoin.id) {
        return true;
      }
    });

    return false;
  }
  function handleJoinNewGroup(userId, groupId) {
    const body = {
      user_id: userId,
      group_id: groupId,
    };
    const promise = joinNewGroupByUser(body, token);
    promise.then((response) => {
      if (response.status === 201) getGroupsUserJoined();
    });
    promise.catch((error) => {
      if (error.response.status === 409) alert("voce ja participa desse grupo");
      else {
        console.log(error.response);
      }
    });
  }
  const removeMyGroup = (group) => {
    const body = {
      group_id: group.id,
      user_id: user.id,
    };
    const promise = deleteParticipantOfGroup(body, token);
    promise.then((response) => {
      if (response.status === 200) getGroupsUserJoined();
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  };

  if (groups === null)
    return (
      <Container>
        <NavBar />
        <Header header="carregando..." />
      </Container>
    );
  return (
    <Container>
      <NavBar />
      <Header header="Grupos" />
      <AllGroups groups={groups} handleJoinClick={joinNewGroup} />
      <HeadersTitles header="Meus Grupos" />
      <MyGroups
        handleJoinClick={removeMyGroup}
        groupsUserJoined={groupsUserJoined}
      />
    </Container>
  );
}

export default Groups;
