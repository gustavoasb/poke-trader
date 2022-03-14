import { TradeBoxWrapper, TradeTeamBox, TradeButtonWrapper, TradeButton, IconWrapper } from './style'
import { FiRepeat } from 'react-icons/fi';

function TradeBox() {
  return (
    <TradeBoxWrapper>
      <TradeTeamBox color={"#E3EEFF"} />
      <TradeButtonWrapper>
        <IconWrapper>
          <FiRepeat size={50} color={"#272955"}/>
        </IconWrapper>
        <TradeButton>Check Trade</TradeButton>
      </TradeButtonWrapper>
      <TradeTeamBox color={"#FFE3E3"} />
    </TradeBoxWrapper>
  );
}

export default TradeBox;