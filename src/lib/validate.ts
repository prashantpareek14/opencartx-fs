import * as z from "zod";

export function validate<T>(schema: z.ZodSchema<T>, formData: any) {
  const result = schema.safeParse(formData);

  if (!result.success) {
    return { data: null, errors: z.treeifyError(result.error) };
  }

  return { data: result.data, errors: null };
}