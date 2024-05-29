import { z } from "zod";

export const AuthValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message:"password must be at least 8 characters"})
})
export type TAuthValidator = z.infer<typeof AuthValidator>