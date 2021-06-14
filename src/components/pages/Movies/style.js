import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  height: auto;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const MoviesLimiter = styled.div`
  margin: 10px;
  text-align: right;
`;

export const MoviesList = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MoviesItem = styled.div`
  max-width: 150px;
  margin: 10px;
  line-height: 1.2;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MoviesPagination = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const moviesImageStyles = {
  width: '150px',
  margin: '0 0 5px 0',
  borderRadius: '10px',
  cursor: 'pointer',
};

export const activatedButton = {
  fontSize: '0.75rem',
  height: '30px',
  width: '30px',
  margin: '0 5px',
  borderRadius: '5px',
  color: '#fff',
  background: '#1d1d1d',
  backgroundModifier: '#4a4a4a',
};

export const passivatedButton = {
  fontSize: '0.75rem',
  height: '30px',
  width: '30px',
  margin: '0 5px',
  borderRadius: '5px',
  color: '#fff',
  background: '#919191',
  backgroundModifier: '#4a4a4a',
};
