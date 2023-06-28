import { SxProps } from "@mui/material";

export const container: SxProps = {
  width: "100%",
}


export const progressBarContainer: SxProps = {
  width: "100%",
}

/*
  * @param {number} progress - progress of the bar
  * @returns {SxProps} - sx props for the bar
  * @example
  * progress(50) // { width: "50%" }
  * progress(100) // { width: "100%" }
  * progress(0) // { width: "0%" }
  * 
*/
export const progressBar = (progress: number): SxProps => ({
  width: `${progress}%`,
  position: "absolute",
})