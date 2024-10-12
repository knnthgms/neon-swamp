import { useTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange }: InputProps) => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <Label htmlFor={name}>{t(name)}</Label>
      <StyledTextArea
        placeholder={t(placeholder)}
        id={name}
        name={name}
        onChange={onChange}
      />
    </StyledContainer>
  );
};

export default TextArea;
