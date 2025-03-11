import { InputProps } from "@/types/Input.props";
import { InputStyled, InputWrapper } from "./Input.styled";

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
