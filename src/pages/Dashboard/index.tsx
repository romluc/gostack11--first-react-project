import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Form, Repositories, Error, Header } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState<string>('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storedRepositories) {
      return JSON.parse(storedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError(`Blank field. Enter author/repo's name.`);
      return;
    }

    const repeatedRepo = repositories.find(
      (repo) => repo.full_name === newRepo,
    );

    if (repeatedRepo) {
      setInputError(`Repository already on the list.`);
      setNewRepo('');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);

      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Found an error while searching the repo... =(');
    }
  }

  const handleRemoveRepository = (repository: Repository) => {
    const filteredArray = repositories.filter((arrayItem) => {
      return arrayItem !== repository;
    });
    setRepositories([...filteredArray]);
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  };

  const handleClearLocalStorage = () => {
    localStorage.clear();
    setRepositories([]);
  };

  return (
    <>
      <img src={logo} alt="Github Explorer logo" />
      <Header>
        <h1>Explore Github repos </h1>
        <span
          role="img"
          aria-label="bitmojis of eye looking through a telescope"
        >
          {` { 🔭👀 } `}
        </span>
      </Header>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Enter repo name"
        />
        <button type="submit">Search</button>
        {repositories.length ? (
          <button onClick={handleClearLocalStorage}>Clear List</button>
        ) : null}
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <>
            <Link
              to={`/repositories/${repository.full_name}`}
              key={repository.full_name}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
            <button onClick={() => handleRemoveRepository(repository)}>
              Remove
            </button>
          </>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
