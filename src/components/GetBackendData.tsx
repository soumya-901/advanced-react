import { FC, memo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useFetchData from "../hooks/useFetchData";

interface GetBackendDataType {
  handleClose: () => void;
  open: boolean;
}

const GetBackendData: FC<GetBackendDataType> = memo((props) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { data, error, loading } = useFetchData("/api");

  console.log("Inside get backend data");

  if (error) {
    console.log("error from api ", error);
    return <p>something went wrong</p>;
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          {loading ? <Box>Loading ...</Box> : <Typography>{data}</Typography>}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
});

export default GetBackendData;
