import React from "react";
import FormUser from "../../../../components/form/FormUser";
import MainContainer from "../../../../components/containers/MainContainer";
import useProtected from "../../../../services/useProtected";

const Edit = () => {
  useProtected()
  return (
    <>
      <MainContainer>
        <FormUser type="E"></FormUser>
      </MainContainer>
    </>
  );
};

export default Edit;
