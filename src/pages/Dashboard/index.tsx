import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer logo" />
      <Title>
        Explore Github repos{' '}
        <span
          role="img"
          aria-label="bitmojis of eye looking through a telescope"
        >
          🔭👀
        </span>
      </Title>

      <Form>
        <input placeholder="Enter repo name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44209758?s=400&u=02034e523c0e39f290c57e2c093b843c2b9dfb0c&v=4"
            alt="github Romulo Lucena Castro profile"
          />
          <div className="text-container">
            <strong>romluc/huntweb</strong>
            <p>React app consuming a Rocketseat&apos;s heroku products api</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44209758?s=400&u=02034e523c0e39f290c57e2c093b843c2b9dfb0c&v=4"
            alt="github Romulo Lucena Castro profile"
          />
          <div className="text-container">
            <strong>romluc/huntweb</strong>
            <p>React app consuming a Rocketseat&apos;s heroku products api</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44209758?s=400&u=02034e523c0e39f290c57e2c093b843c2b9dfb0c&v=4"
            alt="github Romulo Lucena Castro profile"
          />
          <div className="text-container">
            <strong>romluc/huntweb</strong>
            <p>React app consuming a Rocketseat&apos;s heroku products api</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
