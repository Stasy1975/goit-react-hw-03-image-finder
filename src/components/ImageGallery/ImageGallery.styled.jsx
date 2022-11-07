import styled from '@emotion/styled';
export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const Text = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  margin-bottom: auto;
`;