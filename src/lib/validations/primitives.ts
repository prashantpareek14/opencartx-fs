import * as z from "zod";

export const emailSchema = z.email({
  error: (issue) =>
    !issue.input ? "Email field is required" : "Invalid email format",
});