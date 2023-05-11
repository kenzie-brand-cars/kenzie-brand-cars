import * as yup from "yup";
export const schema = yup.object({
  year: yup
    .string().required(),
  km: yup
    .string().required(),
  price_fipe: yup
    .number().required().transform((value)=> parseFloat(value)),
  price: yup
    .number().required().transform((value)=> parseFloat(value)),
  description: yup
    .string().required(),
  image: yup
    .string().required(),
  mark: yup
    .string().required(),
  model: yup
    .string().required(),
  fuel: yup
    .string().required(),
  color: yup
    .string().required(),
  gallery: yup.string().required(),
  // galery: yup.object({
  //   images: yup.array().of(yup.string())
  // }).required().default(['https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chevrolet_Celta_2013_in_Uruguay.jpg/800px-Chevrolet_Celta_2013_in_Uruguay.jpg']),
  publishedAt: yup
    .boolean().required().transform((value) =>
      !value ? undefined : value === "yes" ? true : false
    ),
});
export type CreateAnnounceForm = yup.InferType<typeof schema>;