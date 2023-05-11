import * as yup from "yup";

export const schema = yup.object({
  year: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  km: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  price_fipe: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  price: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  description: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  image: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  mark: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  model: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  fuel: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  color: yup
    .string()
    .optional()
    .notRequired()
    .transform((value) => (!value ? undefined : value)),
  publishedAt: yup
    .boolean()
    .optional()
    .notRequired()
    .transform((value) =>
      !value ? undefined : value === "yes" ? true : false
    ),
});
export type EditAnnounceForm = yup.InferType<typeof schema>;
