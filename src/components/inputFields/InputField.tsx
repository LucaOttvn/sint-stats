import React, {ChangeEvent} from "react";
import "./style.scss";

interface InputFieldProps {
  placeHolder?: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined
}

export default function InputField(props: InputFieldProps) {
  return <input type="text" value={props.value || ''} className="mainInput" placeholder={props.placeHolder || ""} onKeyDown={(e) => props.onKeyDown(e)} onChange={(e) => props.onChange(e)} />;
}
