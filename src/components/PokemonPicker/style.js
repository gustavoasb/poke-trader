import styled from 'styled-components'

export const PickerContainer = styled.div`
  min-height: 265px;
  height: auto;
  width: 100%;
  background-color: ${props => props.color};
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border-style: solid;
  border-color: #D9DAE8;
  background-color: #F4F4F4;
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`

export const PokemonList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

export const SearchBarContainer = styled.div`
  display: flex;
`