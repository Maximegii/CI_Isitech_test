import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { FC } from "react";

type IProps = {
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    type: HTMLInputTypeAttribute;
    value: string;
};

const Input: FC<IProps> = (props) => {
    const {onChange, type, placeholder, value} = props; 

   
    return (<input placeholder={placeholder} type={type} value={value}
    onChange={onChange}></input>)
};

export {Input};