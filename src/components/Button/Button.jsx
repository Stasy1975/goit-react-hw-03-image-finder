import { LoadMore } from './Button.styled';

export default const Button = ({ clickHandle }) => {
  return (
    <LoadMore type="button" onClick={clickHandle}>
      LOAD MORE
    </LoadMore>
  );
};

