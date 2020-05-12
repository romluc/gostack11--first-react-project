import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }

    @media (max-width: 400px) {
      img {
        width: 80px;
        height: 80px;
      }

      div {
        strong {
          font-size: 24px;
          color: #3d3d4d;
        }

        p {
          font-size: 18px;
          color: #737380;
          margin-top: 4px;
        }
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      strong {
        display: block;
        font-size: 24px;
        color: #3d3d4d;
      }

      & + li {
        margin-left: 36px;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  @media (max-width: 700px) {
    margin-top: 54px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    width: 100%;
    display: block;
    text-decoration: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 6px 0 rgba(0, 0, 0, 0.08);

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        color: #a8a8a8;
        font-size: 18px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd5;
    }
  }
`;

export const Loading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 54px;
  color: rgba(0, 0, 0, 0.3);
`;

export const EmptyIssuesSection = styled.p`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  place-content: center;
  margin-top: 60px;
  font-size: 42px;
  color: rgba(0, 0, 0, 0.5);

  span {
    color: #222;
    margin: 5px;
  }

  @media (max-width: 700px) {
    font-size: 36px;
  }
`;
