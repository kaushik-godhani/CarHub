import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyle?: String,
    btnType?: "button" | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}