import styled from "styled-components";

export const CardStyle = styled.div`
  width: 312px;
  height: 420px;
  margin: 0px 12px 0px 12px;

  .div--img {
    width: 312px;
    height: 152px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background-color: #e9ecef;
  }
  .div--img img {
    width: 100%;
    height: 100%;
  }
  .h2--car-name {
    margin: 16px 0px 16px 0px;
    font-size: 16px;
  }
  .div--name-logo {
    display: flex;
    gap: 15px;
    margin-bottom: 16px;
    margin-top: 16px;
  }
  .div--description-tag {
    display: flex;
    align-items: center;
    height: 32px;
    background-color: var(--collor-brand-4);
    border-radius: var(--border-radius-button-1600px);
    padding: 4px 8px 4px 8px;
    color: var(--collor-brand-1);
  }
  .div--descriptions {
    display: flex;
    gap: 12px;
  }
  .div--seller-name {
    color: var(--collor-grey-2);
    font-size: 14px;
    font-weight: 500;
    font-family: Inter;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div--seller-logo {
    width: 32px;
    height: 32px;
    background-color: var(--collor-brand-1);
    border-radius: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .div--price--description {
    display: flex;
    justify-content: space-between;
  }
  .h2--price {
    font-size: 16px;
  }
  @media (max-width: 760px) {
    margin: 0px;
    height: 300px;
  }
`;
