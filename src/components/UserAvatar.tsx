import React from "react";
import { styled, Badge, Avatar } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const UserAvatar: React.FC<{
  imgSrc?: string;
  dim?: {
    width?: string | number;
    height?: string | number;
  };
}> = ({
  imgSrc = "https://www.mahttmsr.com/img/21/02/01/16121863755745035_M.jpg",
  dim,
}) => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <Avatar alt="Hinidi" src={imgSrc} sx={{ ...(dim || {}) }} />
    </StyledBadge>
  );
};

export default UserAvatar;
