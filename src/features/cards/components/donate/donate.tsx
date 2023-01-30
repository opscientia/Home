import React, { useState } from "react";
import DonateStyled from "./overrides/donateStyle";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Icon from "@utils/Icon";
import IconButton from "@mui/material/IconButton";

import Divider from "@mui/material/Divider";

import { CardMedia } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import DonateProgress from "./DonateProgress";
import { Label } from "@features/label";
import ReactCardFlip from "react-card-flip";
import { useTheme, alpha } from "@mui/material/styles";
const img = "/static/images/avatar.png";

type Props = {
  cardData: any;
};

function DonateCard(props: Props) {
  const theme = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlipped = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <DonateStyled>
        {/* Header top */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ background: "#1F2033", height: "44px", p: "8px" }}
        >
          <Box
            sx={{
              // display: "flex",
              background: "#1F2033",
              height: "28px",

              display: "grid",
              gridTemplateColumns: "repeat(2,auto)",
              alignItems: "center",
              // borderRadius: '8px 0px 0px 8px',
              borderRadius: "8px",
            }}
          >
            <Box
              component="img"
              src="/NFT.svg"
              sx={{
                width: "37px",
                height: "100%",
                pl: "6px",
                pr: "4px",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",

                background: "#2B2D47",
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                height: "100%",
                fontWeight: "600",
                width: "71px",

                border: "2px solid #2B2D47",
                borderLeft: "none",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                fontSize: "13px",
                color: "#525AA2",
                display: "grid",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              0x2345..
            </Typography>
          </Box>

          <Box sx={{ display: "flex", columnGap: "12px" }}>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",

                color: "#8C8A8A",
                fontWeight: "500",

                width: "122px",
                height: "28px",
                background: "#2B2D47",
                borderRadius: "8px",

                fontSize: "13px",
                textAlign: "center",
                display: "grid",
                alignItems: "center",
              }}
            >
              miller.id.desci.eth
            </Typography>
            <Box
              sx={{
                width: "28px",
                height: "28px",

                background: "#2B2D47",
                borderRadius: "8px",
                display: "grid",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/Icon.svg"
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Box>
          </Box>
        </Stack>
        {/* Header top */}

        <CardContent
          sx={{
            background: "linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)",
            boxShadow: "none !important",
            border: "none",
          }}
        >
          <Box component="img" src={props.cardData.img} />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.05em",
              mt: "16px",

              color: "#FDF5FF",
            }}
          >
            {props.cardData.title}
          </Typography>

          <Box sx={{ display: "flex", columnGap: "8px", mt: "8px" }}>
            <Button
              sx={{
                fontSize: "11px",
                height: "20px",
                minHeight: "auto",
                color: "#ACDCAE",
                background: "rgba(172, 220, 174, 0.2)",
                border: "1px solid rgba(172, 220, 174, 0.3)",
                borderRadius: "40px",
                pl: "6px",
                pr: "6px",
                textTransform:'capitalize'
              }}
            >
              {props.cardData.tag1}
            </Button>
            <Button
              sx={{
                fontSize: "11px",
                height: "20px",
                minHeight: "auto",
                pl: "6px",
                pr: "6px",
                background: "rgba(253, 160, 255, 0.2)",
                borderRadius: "40px",
                textTransform:'capitalize'

              }}
            >
              {props.cardData.tag2}
            </Button>
          </Box>

          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "17px",
              mt: "8px",
              color: "#C0C0C0",
            }}
          >
            {props.cardData.desc}
          </Typography>

          <Divider sx={{ borderColor: "#393B50", mt: "16px", mb: "16px" }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "16px",
                    /* identical to box height */

                    color: "#737480;",
                    mb: "8px",
                  }}
                >
                  Contributors
                </Typography>{" "}
                <Box sx={{ display: "flex" }}>
                  {props.cardData.contributors.map((src: any, index) => {
                    return (
                      index <= 3 && (
                        <Box component="img" src={src} sx={{ zIndex: "200" }} />
                      )
                    );
                  })}
                  {props.cardData.contributors.length > 4 && (
                    <Box
                      sx={{
                        width: "24px",
                        height: "24px",
                        border: "1px solid #393B50",
                        fontWeight: "400",
                        fontSize: "10px",
                        lineHeight: "12px",
                        borderRadius: "50%",

                        color: "#737480",
                        display: "grid",
                        alignItems: "center",
                        justifyContent: "center",
                        ml: "4px",
                      }}
                    >
                      +{props.cardData.contributors.length - 4}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "16px",
                    /* identical to box height */

                    color: "#737480;",
                    mb: "8px",
                  }}
                >
                  Time Period
                </Typography>{" "}
                <input
                  type="text"
                  value="01/01/23 to 01/02/23"
                  style={{
                    background: "none",
                    border: "1px solid #393B50",
                    borderRadius: "8px",
                    height: "24px",
                    padding: "8px",
                    width: "136px",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "15px",

                    color: "#C0C0C0",
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </CardContent>
        <CardActions sx={{pb:'16px !important'}}>
          <Button
            sx={{
              minHeight: "auto",
              border: "none",
              minWidth: "auto",
              width: "46.54px",
              height: "48px",
              background: "#2A2C45",
              padding: "0",
            }}
          >
            <Box
              component="img"
              src="/Vector.svg"
              sx={{ width: "24.54", height: "24px" }}
            />
          </Button>

          <Button
            sx={{
              minWidth: "none",
              width: "100%",
              ml: "16px",
              background: "#426C4B",
              color: "white",
              textTransform: "capitalize",
              border: "none",
            }}
          >
            Donate to Mint
          </Button>
        </CardActions>
      </DonateStyled>
      <DonateStyled>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              {...(img
                ? { src: img, alt: "some-name", sx: { bgcolor: "transparent" } }
                : {})}
            />
            <Stack>
              <Typography
                color="common.black"
                fontWeight={500}
                fontFamily="'Exo 2'"
                variant="h4"
              >
                hodgkinx
              </Typography>
              <Typography color="text.secondary" fontWeight={500}>
                @hodgkinx
              </Typography>
            </Stack>
          </Stack>
          <Typography
            color={theme.palette.grey[500]}
            fontFamily="'Exo 2'"
            gutterBottom
          >
            Sed sed justo sit amet mauris bibendum egestas sed a elit. Maecenas
            ultrices orci id ipsum finibus, sit amet ornare tortor ornare. Morbi
            egestas risus sed nunc.
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" className="color-big-label">
              <Label
                variant="filled"
                sx={{
                  backgroundColor: theme.palette.info.main,
                }}
              >
                <Icon path="ic-check-filled" /> Holonym
              </Label>
              <Label
                variant="filled"
                sx={{
                  backgroundColor: alpha(theme.palette.info.main, 0.3),
                  color: theme.palette.info.main,
                }}
              >
                0xf023
              </Label>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <IconButton disableRipple size="small">
                <Icon path="ic-d" />
              </IconButton>
              <IconButton disableRipple size="small">
                <Icon path="ic-ac" />
              </IconButton>
              <IconButton disableRipple size="small">
                <Icon path="ic-tw" />
              </IconButton>
              <IconButton disableRipple size="small">
                <Icon path="ic-dr" />
              </IconButton>
              <IconButton disableRipple size="small">
                <Icon path="ic-twi" />
              </IconButton>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            mt={1}
            borderBottom={1}
            borderColor="divider"
            pb={2}
          >
            <Label
              variant="filled"
              sx={{
                backgroundColor: alpha(theme.palette.secondary.main, 0.3),
              }}
              className="big-label"
            >
              <Icon path="ic-tag" />
              Community
            </Label>
            <Label variant="filled" className="join-label">
              <Typography fontSize="10px" fontWeight={500}>
                ICs
              </Typography>
              <Typography fontSize="10px">3</Typography>
            </Label>
            <Label variant="filled" className="join-label">
              <Typography fontSize="10px" fontWeight={500}>
                Raised
              </Typography>
              <Typography fontSize="10px">27 ETH</Typography>
            </Label>
          </Stack>
          <Typography
            color="common.black"
            fontFamily="'Exo 2'"
            variant="h3"
            mt={1}
          >
            Fellowship Project
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" mt={0.6}>
            <Label variant="filled" className="join-label">
              <Typography fontSize="10px" fontWeight={500}>
                Raised
              </Typography>
              <Typography fontSize="10px">10.3 ETH</Typography>
            </Label>
            <Label
              variant="filled"
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              NFT
            </Label>
            <Label variant="filled">
              <Icon path="ic-link" />
            </Label>
          </Stack>
          <Typography
            color={theme.palette.grey[500]}
            fontFamily="'Exo 2'"
            gutterBottom
            mt={1}
          >
            Pellentesque varius metus elementum massa bibendum, in efficitur
            sapien tincidunt. Donec finibus quis erat at eleifend. Nullam
            consequat hendrerit bibendum sit.
          </Typography>
          <Stack direction="row">
            <Stack spacing={1} mt={1.5} width={1} pr={2}>
              <Box>
                <Typography
                  color="text.secondary"
                  fontFamily="'Exo 2'"
                  variant="body2"
                >
                  IMPACT MOMENTUM
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <DonateProgress />
                  <Typography
                    fontFamily="'Exo 2'"
                    color="common.black"
                    variant="h3"
                  >
                    25%
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Typography
                  color="text.secondary"
                  fontFamily="'Exo 2'"
                  variant="body2"
                >
                  IMPACT PRICE
                </Typography>
                <Typography
                  fontFamily="'Exo 2'"
                  color="common.black"
                  variant="h3"
                >
                  0.10 ETH
                </Typography>
              </Box>
            </Stack>
            <Stack
              spacing={1}
              mt={1.5}
              width={1}
              borderLeft={1}
              borderColor="divider"
            >
              <Box borderBottom={1} pl={2} pb={1} borderColor="divider">
                <Typography
                  color="text.secondary"
                  fontFamily="'Exo 2'"
                  variant="body2"
                >
                  TARGET
                </Typography>
                <Typography
                  fontFamily="'Exo 2'"
                  color="common.black"
                  variant="h3"
                >
                  10 ETH
                </Typography>
              </Box>

              <Box pl={2}>
                <Typography
                  color="text.secondary"
                  fontFamily="'Exo 2'"
                  variant="body2"
                >
                  IMPACT PRICE
                </Typography>
                <Typography
                  fontFamily="'Exo 2'"
                  color="common.black"
                  variant="h3"
                >
                  0.10 ETH
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <IconButton disableRipple onClick={handleFlipped}>
            <Icon path="Frame" className="logo" />
          </IconButton>

          <Button
            sx={{
              mx: 2,
              fontFamily: "'Exo 2'",
              fontWeight: 600,
            }}
            fullWidth
            variant="contained"
          >
            Support
          </Button>
        </CardActions>
      </DonateStyled>
    </ReactCardFlip>
  );
}

export default DonateCard;
