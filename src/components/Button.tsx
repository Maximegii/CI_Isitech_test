import { FC } from "react";

type IProps = {
  text: string;
  onClick: () => void;
  testId: string;
};

const Button: FC<IProps> = (props) => {
  const { text, onClick, testId } = props;

  return (
    <button data-testid={testId} onClick={onClick} className="bg-green-500">
      {text}
    </button>
  );
};

export { Button };
