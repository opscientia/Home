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
import { CardMedia } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import DonateProgress from "./DonateProgress";
import { Label } from "@features/label";
import ReactCardFlip from "react-card-flip";
import { useTheme, alpha } from "@mui/material/styles";
const img = "/static/images/avatar.png";

function DonateCard2() {
  const theme = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlipped = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <DonateStyled>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={3}>
              <Avatar
                {...(img
                  ? {
                      src: img,
                      alt: "some-name",
                      sx: { bgcolor: "transparent" },
                    }
                  : {})}
              />
              <Typography
                color="common.black"
                fontWeight={500}
                fontFamily="'Exo 2'"
                variant="h4">
                OpSci.eth
              </Typography>
            </Stack>
            <Label variant="filled" className="label">
              0x2345
            </Label>
          </Stack>
          <CardMedia
            sx={{ mt: 2, height: 300, mx: "auto" }}
            image="/static/icons/commons.svg"
          />
          <Typography
            gutterBottom
            color="common.black"
            fontFamily="'Exo 2'"
            variant="h3"
            mt={2}>
            OpSci Society
          </Typography>
          <Typography
            color={(theme) => theme.palette.grey[500]}
            fontFamily="'Exo 2'">
            OpSci Society is an autonomous scientific community that aims to utilize metrics derived from activity within DeSci dApps and off-chain academic web services to mint Impact Certificate Non-Fungible Tokens (IC-NFTs) that track impact. 
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            mt={1}
            borderBottom={1}
            borderColor="divider"
            pb={2}>
            {/* <Label
              variant="filled"
              sx={{
                backgroundColor: alpha(theme.palette.secondary.main, 0.3),
              }}
              className="big-label">
              <Icon path="ic-tag" />
              Community
            </Label> */}
            {/* <Label variant="filled" className="join-label">
              <Typography fontSize="10px" fontWeight={500}>
                Raised
              </Typography>
              <Typography fontSize="10px">10.3 ETH</Typography>
            </Label> */}
            {/* <Label
              variant="filled"
              sx={{ color: (theme) => theme.palette.text.secondary }}>
              NFT
            </Label> */}
            <Label variant="filled">
              <Icon path="ic-link" />
            </Label>
          </Stack>
          <Stack direction="row" spacing={5} alignItems="center" mt={1.5}>
            <Box>
              <Typography
                color="text.secondary"
                fontFamily="'Exo 2'"
                variant="body2">
                IMPACT MOMENTUM
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="flex-start">
                <DonateProgress />
                <Typography
                  fontFamily="'Exo 2'"
                  color="common.black"
                  variant="h3">
                  25%
                </Typography>
              </Stack>
            </Box>
            <Box>
              {/* <Typography
                color="text.secondary"
                fontFamily="'Exo 2'"
                variant="body2">
                IMPACT PRICE
              </Typography> */}
              {/* <Typography
                fontFamily="'Exo 2'"
                color="common.black"
                variant="h3">
                0.10 ETH
              </Typography> */}
            </Box>
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
            variant="contained">
            Fund this Impact
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
                variant="h4">
                opsci society
              </Typography>
              <Typography color="text.secondary" fontWeight={500}>
                @opscisociety
              </Typography>
            </Stack>
          </Stack>
          <Typography
            color={theme.palette.grey[500]}
            fontFamily="'Exo 2'"
            gutterBottom>
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
                }}>
                <Icon path="ic-check-filled" /> Holonym
              </Label>
              <Label
                variant="filled"
                sx={{
                  backgroundColor: alpha(theme.palette.info.main, 0.3),
                  color: theme.palette.info.main,
                }}>
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
            pb={2}>
            {/* <Label
              variant="filled"
              sx={{
                backgroundColor: alpha(theme.palette.secondary.main, 0.3),
              }}
              className="big-label">
              <Icon path="ic-tag" />
              Community
            </Label> */}
            <Label variant="filled" className="join-label">
              <Typography fontSize="10px" fontWeight={500}>
                ICs
              </Typography>
              <Typography fontSize="10px">3</Typography>
            </Label>
            {/* <Label variant="filled" className="join-label">
              <Typography fontSize="10px" fontWeight={500}>
                Raised
              </Typography>
              <Typography fontSize="10px">27 ETH</Typography>
            </Label> */}
          </Stack>
          <Typography
            color="common.black"
            fontFamily="'Exo 2'"
            variant="h3"
            mt={1}>
            Fellowship Project
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" mt={0.6}>
            {/* <Label variant="filled" className="join-label">
              <Typography fontSize="10px" fontWeight={500}>
                Raised
              </Typography>
              <Typography fontSize="10px">10.3 ETH</Typography>
            </Label> */}
            {/* <Label
              variant="filled"
              sx={{ color: (theme) => theme.palette.text.secondary }}>
              NFT
            </Label> */}
            <Label variant="filled">
              <Icon path="ic-link" />
            </Label>
          </Stack>
          <Typography
            color={theme.palette.grey[500]}
            fontFamily="'Exo 2'"
            gutterBottom
            mt={1}>
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
                  variant="body2">
                  IMPACT MOMENTUM
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="flex-start">
                  <DonateProgress />
                  <Typography
                    fontFamily="'Exo 2'"
                    color="common.black"
                    variant="h3">
                    25%
                  </Typography>
                </Stack>
              </Box>
              <Box>
                {/* <Typography
                  color="text.secondary"
                  fontFamily="'Exo 2'"
                  variant="body2">
                  IMPACT PRICE
                </Typography> */}
                {/* <Typography
                  fontFamily="'Exo 2'"
                  color="common.black"
                  variant="h3">
                  0.10 ETH
                </Typography> */}
              </Box>
            </Stack>
            <Stack
              spacing={1}
              mt={1.5}
              width={1}
              borderLeft={1}
              borderColor="divider">
              <Box borderBottom={1} pl={2} pb={1} borderColor="divider">
                <Typography
                  color="text.secondary"
                  fontFamily="'Exo 2'"
                  variant="body2">
                  TARGET
                </Typography>
                <Typography
                  fontFamily="'Exo 2'"
                  color="common.black"
                  variant="h3">
                  10 ETH
                </Typography>
              </Box>

              <Box pl={2}>
                {/* <Typography
                  color="text.secondary"
                  fontFamily="'Exo 2'"
                  variant="body2">
                  IMPACT PRICE
                </Typography> */}
                {/* <Typography
                  fontFamily="'Exo 2'"
                  color="common.black"
                  variant="h3">
                  0.10 ETH
                </Typography> */}
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
            variant="contained">
            Fund this Impact
          </Button>
        </CardActions>
      </DonateStyled>
    </ReactCardFlip>
  );
}

export default DonateCard2;
