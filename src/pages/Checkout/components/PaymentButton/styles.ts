import styled from "styled-components";

export const PaymentButtonContainer = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.button};
  padding: 16px;
  cursor: pointer;

  color: ${(props) => props.theme.color.text};
  ${(props) => props.theme.FontButton.Medium};
  text-transform: uppercase;

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    color: ${(props) => props.theme.color.purple};
    font-size: 1rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
  }
  &.selected {
    background-color: ${(props) => props.theme.color["purple-light"]};
    border: 1px solid ${(props) => props.theme.color.purple};
  }
`;
