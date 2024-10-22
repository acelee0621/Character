import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "100px",
  width: "180px",
  overflow: "hidden",
  display: "block",
  marginLeft:60,
  marginTop: 30,  
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/avatar001.png" alt="logo" height={100} width={100} priority />
    </LinkStyled>
  );
};

export default Logo;
