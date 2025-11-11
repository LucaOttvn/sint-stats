import React, {Ref} from "react";

interface InputFieldProps {
  placeHolder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  ref?: Ref<HTMLInputElement>;
}

export default function InputField(props: InputFieldProps) {
  return (
    <input
      ref={props.ref}
      type="text"
      value={props.value || ""}
      className="mainInput"
      placeholder={props.placeHolder || ""}
      onKeyDown={(e) => {
        if (props.onKeyDown) props.onKeyDown(e)
      }}
      onChange={(e) => props.onChange(e)}
    />
  );
}
