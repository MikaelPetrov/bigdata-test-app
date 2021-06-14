import styled from 'styled-components';

export const MovieWrapper = styled.div`
  margin: 10px;
  font-size: 1rem;
  color: black;
`;

export const MovieInfo = styled.div`
  width: 350px;
  display: flex;
  align-items: top;
  justify-content: left;
`;

export const MovieGenres = styled.div`
  margin: 5px 0;
  display: flex;
`;

export const MovieGenre = styled.div`
  &::after {
    content: '|';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`;

export const MovieTitle = styled.h2`
  margin: 10px 0;
  text-align: left;
  line-height: 1;
`;

export const MovieDescription = styled.div`
  margin: 10px 0;
  text-align: left;
`;

export const MovieCommentary = styled.div`
  width: 300px;
  margin: 10px 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background: #919191;
  border-radius: 5px;
`;

export const MovieFormButtons = styled.div`
  display: flex;
`;

export const submitButton = {
  fontSize: '1.5rem',
  height: '60px',
  width: '100px',
  margin: '0 5px',
  borderRadius: '10px',
  color: '#fff',
  background: '#1d1d1d',
  backgroundModifier: '#4a4a4a',
};

export const resetButton = {
  fontSize: '1.5rem',
  height: '60px',
  width: '100px',
  margin: '0 5px',
  borderRadius: '10px',
  color: '#fff',
  background: '#919191',
  backgroundModifier: '#4a4a4a',
};
