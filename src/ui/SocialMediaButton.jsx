import styled from "styled-components";
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2rem;
`;

export const SocialIconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-grey-50);
    border-color: var(--color-grey-300);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* تظبيط حجم الأيقونة (سواء SVG أو React Icons) جوه الدائرة */
  & svg {
    width: 2.2rem;
    height: 2.2rem;
    /* الألوان دي بتخلي الأيقونة تلون لوحدها حسب الـ Mode */
    fill: var(--color-grey-600);
    color: var(--color-grey-600);
  }
`;
