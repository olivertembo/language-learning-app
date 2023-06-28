import { SxProps } from "@mui/material";

export const container: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  color: "common.black",
  marginBottom: "2rem",
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

export const progressRatio: SxProps = {
  color: "common.black",
}
export const progressBarContainer: SxProps = {
  width: '100%',
  height: '5px',
  borderRadius: '2.5px',
  backgroundColor: "#dae0ef",
  position: "relative",
}

export const progressBar = (progress: number): SxProps => ({
  position: 'absolute',
  height: '5px',
  borderRadius: '2.5px',
  zIndex: 2,
  width: `${progress}%`,
  backgroundColor: '#84a0fb',
})