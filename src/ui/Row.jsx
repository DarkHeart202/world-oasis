import styled, { css } from "styled-components";

const Row = styled.div`
  ${(prop) =>
    prop.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(prop) =>
    prop.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
  display: flex;
`;

Row.defaultProps = {
  type: "vertical",
};
export default Row;
