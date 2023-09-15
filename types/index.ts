import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyle?: String,
    btnType?: "button" | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface manufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}