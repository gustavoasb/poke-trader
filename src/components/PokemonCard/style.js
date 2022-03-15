import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 145px;
  width: 125px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const PokemonName = styled.span`
  text-transform:capitalize;
  font-weight: 400;
  text-align: center;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconWrapper = styled.button`
  cursor: pointer;
`

export const PokemonImage = styled.img`
  width: 80px;
`