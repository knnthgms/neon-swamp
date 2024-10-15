import { Button, Input } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";

interface ValidationTypeProps {
  type: string;
}

const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

const ContactForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  const { t } = useTranslation();

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <FormGroup autoComplete="off" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={values.name || ""}
        onChange={handleChange}
      />
      <ValidationType type="name" />
      <Input
        type="text"
        name="email"
        placeholder="Your Email"
        value={values.email || ""}
        onChange={handleChange}
      />
      <ValidationType type="email" />
      <Input.TextArea
        rows={4}
        placeholder="Your Message"
        value={values.message || ""}
        name="message"
        onChange={handleChange}
      />
      <ValidationType type="message" />
      <Button size="large" name="submit">
        {t("Submit")}
      </Button>
    </FormGroup>
  );
};

export default ContactForm;
