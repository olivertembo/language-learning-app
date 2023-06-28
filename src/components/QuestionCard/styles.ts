import { SxProps } from "@mui/material";

export const container: SxProps = {
  width: "calc(100% - 20px)",
  height: "360px",
  left: "-10px",
  cursor: "pointer",
  backgroundColor: "transparent",
  position: "relative",
  zIndex: 5,
  margin: '30px 20px 20px 20px',
  borderRadius: '1.3rem',
  '&::after': {
    content: '""',
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: '1.3rem',
    zIndex: 2,
    boxShadow: '4px 9px 10px 0px rgba(0,0,0,0.2)',
  },
  '&::before': {
    content: '""',
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: '1.3rem',
    boxShadow: '4px 9px 10px 0px rgba(0,0,0,0.2)',
    zIndex: 5,
  }
}


export const imageContainer: SxProps = {
  position: "relative",
  height: "250px",
  marginTop: "30px",
  zIndex: 10,
}


export const title: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
  height: "50px",
  "& .MuiTypography-root": {
    width: "100%",
    textAlign: "center",
    color: "common.black",
    marginTop: "10px",
    fontWeight: "500",
    zIndex: 10,
  },
};
