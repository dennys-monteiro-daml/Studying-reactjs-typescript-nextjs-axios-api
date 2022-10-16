import { HeaderContainer, Logo } from "./header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/images/myteacher.png" />
      </div>
      <p>My first website made with React,NextJs,MUI!</p>
    </HeaderContainer>
  )
}

export default Header;