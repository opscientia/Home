import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const SponcersStyled = styled(Box)(({ theme }) => ({
  "& .sponsor-container": {
    backgroundColor: "#000",
    minHeight: 256,
    height: "100%",
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& .slick-slider": {
      width: "100%",
      "& .slick-slide > div": {
        padding: theme.spacing(0, 2),
        "& img": {
          height: 100,
          objectFit: "contain",
        },
      },
    },
  },
}));
export default SponcersStyled;
