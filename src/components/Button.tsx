import { FC } from "react";

type IProps = {
  text: string;
  onClick: () => void;
};

const Button: FC<IProps> = (props) => {
  const { text, onClick } = props;

  return (
    <button onClick={onClick} className="bg-green-500">
      {text}
    </button>
  );
};

export { Button };
