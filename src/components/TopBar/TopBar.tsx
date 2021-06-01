import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const TopBar: React.FC = () => {
  const theme = useContext(ThemeContext)
  return (
    <StyledTopBar>
      <div style={{fontSize: "40px", color: theme.colors.text, textAlign: "center"}}>Dequswap</div>
      <div style={{fontSize: "16px", color: theme.colors.text, textAlign: "center", marginTop: "1em"}}>The first Space based Auto Liquidity Aquisition Yield Farm</div>
    </StyledTopBar>
  )
}

const StyledTopBar = styled.div`
  height: 260px;
  width: 100%;
  background-image: url('/images/header.png');
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 5%;
  z-index: 1;
  @media (max-width: 968px) {
    background-size: auto 100%;
    background-position: center;
    padding-top: 100px;
  }
`

export default TopBar
