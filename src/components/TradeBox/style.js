import styled from 'styled-components'

export const TradeBoxWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
`

export const TradeTeamBox = styled.div`
  min-height: 265px;
  height: auto;
  width: 100%;
  background-color: ${props => props.color};
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  /* border-style: solid;
  border-color: transparent;
  border-color: #D9DAE8; */
  /* background:linear-gradient(to right,#D9DAE8, transparent, #D9DAE8, transparent) border-box;
  -webkit-mask:
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude; */
`

export const TradeButtonWrapper = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  padding: 40px 2vw;
`

export const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const TradeButton = styled.button`
  width: 100%;
  background-color: #272955;
  color: "#FFFFFF";
  border-radius: 5;
`
