import { SxProps } from "@mui/material";

export const container: SxProps = {
  display: "flex",
  marginTop: "3rem",
  justifyContent: "space-around",
  width: "100%",
  '& .dislike-button': {
    backgroundColor: "#ee7081",
    '&:hover': {
      backgroundColor: "#ee7081",
    }
  },
  '& .like-button': {
    backgroundColor: "#4caf50",
    '&:hover': {
      backgroundColor: "#4caf50",
    }
  },
  '& .MuiIconButton-root': {
    color: "common.white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    '&:hover': {
      boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.25)",
    }
  }
}

export const cancelButton: SxProps = {
  color: "common.black",
  backgroundColor: "white",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "50%",
  '&:hover': {
    backgroundColor: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
}

