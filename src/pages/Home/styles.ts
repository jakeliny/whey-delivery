import styled from "styled-components";

export const Products = styled.section`
  margin-top: 100px;

  > h2 {
    ${(props) => props.theme.FontTitle.large}
    color: ${(props) => props.theme.color.subtitle};
    margin-bottom: 54px;
  }

  .ProductsList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    row-gap: 5rem;
  }
`;
