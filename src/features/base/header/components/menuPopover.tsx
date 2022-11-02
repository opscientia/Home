import * as React from "react";
import Popover from "@mui/material/Popover";
import { IconButton, Avatar, List, ListItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { setIsAuthentic } from "src/redux/userSlice";
export default function MenuPopover({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(setIsAuthentic(false));
    window.localStorage.removeItem("login");
    handleClose();
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar
          sx={{ bgcolor: (theme) => theme.palette.primary.main }}
          alt="My Avatar"
          src={
            user ? user.cover : "/static/mock-images/avatars/avatar_default.jpg"
          }
        />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}>
        <List>
          <ListItem onClick={handleClose}>{user.userName}</ListItem>
          <ListItem onClick={handleClose}>{user.email}</ListItem>
          <ListItem onClick={handleLogout} sx={{ cursor: "pointer" }}>
            Logout
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
