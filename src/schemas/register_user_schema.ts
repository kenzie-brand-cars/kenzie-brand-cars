import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("O campo é obrigatório"),
  email: yup
    .string()
    .required("O campo é obrigatório")
    .email("O email deve ser um email válido"),
  cpf: yup
    .string()
    .required("O campo é obrigatório"),
    // .matches(
    //   /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/gm,
    //   "O padrão de CPF é inválido."
    // ),
  phone: yup
    .string()
    .required("O campo é obrigatório"),
    // .matches(
    //   /\([[0-9]{2}\)\s9[0-9]{4}\-[0-9]{4}/gm,
    //   "O padrão de celular não aceito."
    // ),
  type: yup.string().required("O campo é obrigatório"),
  address: yup.object({
    zipCode: yup
    .string()
    .required("O campo é obrigatório"),
    // .matches(/[0-9]{5}\-[0-9]{3}/gm, "O CEP é inválido."),
    state: yup.string().required("O campo é obrigatório"),
    street: yup.string().required("O campo é obrigatório"),
    city: yup.string().required("O campo é obrigatório"),
    number: yup.number().required(),
    neighborhood:yup.string().required("O campo é obrigatório"),
    complement: yup.string().required("O campo é obrigatório")
  }),
  birthDate: yup.string().required("O campo é obrigatório"),
  description: yup.string().required("O campo é obrigatório"),
  password: yup.string().required("O campo é obrigatório"),
  confirmPassword: yup.string().required("O campo é obrigatório").oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});

export type FormDataRegisterUser = yup.InferType<typeof schema>