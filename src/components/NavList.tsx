import { List, ListItem } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
interface Props {
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}
const NavList = ({
  isSmallScreen,
  isMediumScreen,
  showMenu,
  setShowMenu,
}: Props) => {
  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);
  return (
    <List
      ref={menuRef}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: "4", md: "7" }}
      sx={{
        position: isSmallScreen ? "absolute" : "",
        top: isSmallScreen && "95px",
        left: isSmallScreen && "0",
        w: isSmallScreen && "100%",
        py: isSmallScreen && "5",
        shadow: isSmallScreen && "md",
        bg: isSmallScreen && "#fff",
        zIndex: 3,
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
      opacity={isMediumScreen || showMenu ? "1" : "0"}
      transform={
        isMediumScreen || showMenu ? "translateY(0)" : "translateY(-10px)"
      }
      transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
    >
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem>Story</ListItem>
      <ListItem>Products</ListItem>
      <ListItem>FAQs</ListItem>
      <ListItem>Contact</ListItem>
    </List>
  );
};

export default NavList;
