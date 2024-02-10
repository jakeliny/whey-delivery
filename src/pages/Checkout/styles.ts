import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  justify-content: space-around;

  .CheckoutInformations {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 2rem;

    > h2 {
      ${(props) => props.theme.FontTitle.xSmall};
      color: ${(props) => props.theme.color.subtitle};
    }
  }

  .CartResumeContainer {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 2rem;

    > h2 {
      ${(props) => props.theme.FontTitle.xSmall};
      color: ${(props) => props.theme.color.subtitle};
    }

    .cartResume {
      border-radius: 6px;
      border-top-right-radius: 44px;
      border-bottom-left-radius: 44px;
      background-color: ${(props) => props.theme.color.card};
      padding: 40px;

      display: flex;
      flex-direction: column;
      gap: 32px;

      > button {
        background-color: ${(props) => props.theme.color.yellow};
        padding: 12px;
        border: none;

        ${(props) => props.theme.FontButton.Big}
        color: white;
        text-transform: uppercase;
      }
    }
  }
`;

export const ShippingInformation = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.card};
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.color.button};
    background-color: ${(props) => props.theme.color.input};
    color: ${(props) => props.theme.color.text};

    &:placeholder {
      color: ${(props) => props.theme.color.label};
    }

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.color["yellow-dark"]};
    }

    &:not(:placeholder-shown) {
      outline: none;
      border-color: ${(props) => props.theme.color["yellow-dark"]};
    }
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
