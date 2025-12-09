import { InputProps } from "@/types";
import { InputStyled, InputWrapper } from "./Input.styles";

export const Input = ({
  type,
  name,
  label,
  placeholder,
  value = "",
  onChange,
}: InputProps): JSX.Element => {
  return (
    <InputWrapper>
      <label>
        {label}
        <InputStyled
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
        />
      </label>
    </InputWrapper>
  );
};
