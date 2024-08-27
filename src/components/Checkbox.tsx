import React from "react";
import { ChangeEventHandler, FC } from "react";

type IProps = {
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;

};

const Checkbox: FC<IProps> = (props) => {
    const {checked, onChange} = props;

    return <input type='checkbox' checked={checked} onChange={onChange}></input>;
};

export {Checkbox}