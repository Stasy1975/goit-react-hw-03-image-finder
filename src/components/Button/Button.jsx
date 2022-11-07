import { LoadMore } from './Button.styled';

const Button = ({ onButton }) => {
  return (
    <LoadMore type="button" onClick={onButton}>
     Ще?
    </LoadMore>
  );
};

export default Button