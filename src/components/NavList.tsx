import { List, ListItem } from "@chakra-ui/react";
const NavList = () => {
  return (
    <List
      display="flex"
      alignItems="center"
      gap="8"
      sx={{
        li: {
          color: "#454545",
          fontWeight: "600",
          fontSize: "lg",
          position: "relative",
          transition: "all 0.4s ease-in-out",
          "::after": {
            content: "''",
            position: "absolute",
            left: 0,
            bottom: "-5px",
            width: "0",
            height: "2px",
            backgroundColor: "#FA4604",
            transition: "all 0.4s ease-in-out",
          },
          ":hover": {
            color: "#FA4604",
            "::after": {
              width: "100%",
            },
          },
        },
      }}
    >
      <ListItem>Home</ListItem>
      <ListItem>Story</ListItem>
      <ListItem>Products</ListItem>
      <ListItem>FAQs</ListItem>
      <ListItem>Contact</ListItem>
    </List>
  );
};

export default NavList;
