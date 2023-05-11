import * as yup from "yup";

export const formSchema = yup.object().shape({
  password: yup
    .string()
    .required("Preencha com a senha")
    .matches(/[a-zA-Z]/, "Deve conter ao menos uma letra")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no mínimo 8 digitos"),
});
