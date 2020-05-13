import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 48px;
    color: #3a3a3a;
    text-align: left;
    max-width: 350px;
    line-height: 50px;
  }

  span {
    color: #a8a8a8;
    font-size: 36px;
  }
`;

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    background-color: #fff;

    ${(props) =>
      props.hasError &&
      css`
        border: 1px solid tomato;
        border-right: 0;

        @media (max-width: 700px) {
          padding: 16px;
          border-radius: 4px;
          border: 1px solid tomato;
        }
      `}

    &::placeholder {
      color: #a8a8b3;
    }

    @media (max-width: 700px) {
      padding: 16px;
      border-radius: 4px;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #009090;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#009090')};
    }

    @media (max-width: 700px) {
      height: 45px;
      width: 100%;
      padding: 4px;
      border-radius: 4px;
      text-align: center;
      margin-top: 4px;
    }

    & + button {
      width: auto;
      height: 70px;
      padding: 10px;
      margin-left: 5px;
      background: transparent;
      border-radius: 5px;
      border: 2px solid #f44336;
      color: rgba(0, 0, 0, 0.4);
      /* background-color: rgba(0, 0, 0, 0.07); */
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        color: rgba(250, 250, 250, 0.9);
        background-color: #f44336;
      }

      @media (max-width: 700px) {
        height: 45px;
        width: 100%;
        padding: 4px;
        border-radius: 4px;
        text-align: center;
        margin-top: 4px;
        margin-left: 0;
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 12px;
  font-weight: bold;
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 10px;
    font-size: 30px;
    color: #c53030;
  }

  &:hover {
    cursor: pointer;
    font-size: 25px;
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    width: 100%;
    display: block;
    text-decoration: none;

    margin-top: 16px;

    @media (max-width: 400px) {
      padding: 10px;
    }

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(2px);
      transition: 0.1s ease;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 24px;
        color: #3d3d4d;

        @media (max-width: 400px) {
          font-size: 22px;
        }
      }

      p {
        margin-top: 4px;
        color: #a8a8a8;
        font-size: 18px;

        @media (max-width: 400px) {
          font-size: 16px;
        }
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd5;
    }
  }
`;
