import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.6rem 0 1.6rem 0; /* مسافات مظبوطة بين زرار اللوجن والأيقونات */
  color: var(--color-grey-400); /* لون الكلمة ماشي مع ديزاين السيستم بتاعك */
  font-size: 1.4rem;
  font-weight: 500;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid var(--color-grey-200); /* خط خفيف وناعم */
  }

  &::before {
    margin-right: 1.5rem; /* مسافة بين الخط الشمال والكلمة */
  }

  &::after {
    margin-left: 1.5rem; /* مسافة بين الخط اليمين والكلمة */
  }
`;
