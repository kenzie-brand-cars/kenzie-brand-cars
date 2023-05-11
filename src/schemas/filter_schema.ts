import * as yup from 'yup'



export const schema = yup.object({
    model: yup.string().optional().notRequired(),
    color: yup.string().optional().notRequired(),
    mark: yup.string().optional().notRequired(),
    year: yup.string().optional().notRequired(),
    fuel: yup.string().optional().notRequired()
})
export type FormFilter = yup.InferType<typeof schema>