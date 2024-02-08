import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    width: 45%;
    padding: 0 20px;

    > h2 {
      ${(props) => props.theme.FontTitle.xLarge}
      color: ${(props) => props.theme.color.title};
      margin-bottom: 1rem;
    }

    > p {
      ${(props) => props.theme.FontText.largeRegular}
      color: ${(props) => props.theme.color.subtitle};
    }
  }

  .icons {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .image {
    width: 45%;

    > img {
      width: 100%;
    }
  }
`;
