import { Box, Button, styled } from "@mui/material";
import React from "react";
import ToastComp from "../../../../components/toast/ToastComp";
import { request } from "../../../../services/axios";
const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
}));
const Content = () => {
  const handleToast = () => {
    ToastComp({
      variant: "success",
      message: "This is success message",
    });
  };
  const handleRequest = async () => {
    const resp = await request({
      url: `/sport/coaches/id`,
      method: "post",
    });
  };
  return (
    <StyledRoot>
      <Button variant="contained" onClick={handleToast}>
        Success Toast
      </Button>
      <Button onClick={handleRequest}>Hit API REQ</Button>
    </StyledRoot>
  );
};

export default Content;
