import React, { useState, useEffect } from "react"
import { useSpring, config, animated } from "react-spring"
import styled from "styled-components"

import NavbarLogo from "../ui/navbarLogo"
import DesktopMenu from "./desktopMenu"
import MobileMenu from "./mobileMenu/mobileMenu"

import { Container } from "../../utils/utils"

const StyledHeader = styled(animated.header)`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 33;
  background-color: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  transition: background 0.2s ease-out;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  user-select: none;
  height: ${({ isMobile }) => (isMobile ? "6rem" : "7rem")};

  @media ${props => props.theme.mediaQueries.large} {
    height: 8rem;
  }
`

const Navbar = ({ notOnePageSection }) => {
  const [isMobile, setisMobile] = useState(null)
  const [menuOpened, setMenuOpened] = useState(false)

  //Animation
  const NavbarSpring = useSpring({
    config: config.wobbly,
    opacity: 1,
    height: "7rem",
    from: { opactity: 0, height: "0rem" },
  })

  // Change navbar content accordingly
  const changeMobile = () => {
    window.matchMedia("(max-width: 37.5em)").matches
      ? setisMobile(true)
      : setisMobile(false)
  }

  // Event listener on resize, so when it change we check o remove desktop menu/mobile menu
  // Better than CSS media query because we dont keep both DOM nodes
  useEffect(() => {
    changeMobile()
    window.addEventListener("resize", changeMobile)
    return () => window.removeEventListener("resize", changeMobile)
  }, [])

  return (
    <StyledHeader style={NavbarSpring}>
      <Container>
        <Wrapper>
          <NavbarLogo />
          {isMobile ? (
            <MobileMenu
              notOnePageSection={notOnePageSection}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
            />
          ) : (
            <DesktopMenu />
          )}
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}

export default Navbar
