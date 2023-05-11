import * as yup from 'yup'



export const schema = yup.object({
    name: yup.string().notRequired().optional().transform((value)=> !value? undefined: value),
    email: yup
      .string()
      .email("O email deve ser um email válido").notRequired().optional().transform((value)=> !value? undefined: value),
    cpf: yup
      .string().notRequired().optional().transform((value)=> !value? undefined: value),
    phone: yup
      .string().notRequired().optional().transform((value)=> !value? undefined: value),
    description: yup.string().notRequired().optional().transform((value)=> !value? undefined: value),
    birthDate: yup.string().notRequired().optional().transform((value)=> !value? undefined: value)
})
export type EditUserFrom = yup.InferType<typeof schema>
