import { z } from 'zod';

export const ContactFormSchema = (t: (arg: string) => string) =>
    z.object({
        firstName: z
            .string({
                error: t('firstName.required'),
            })
            .min(2, { message: t('firstName.min') })
            .max(50, { message: t('firstName.max') }),
        lastName: z
            .string({
                error: t('lastName.required'),
            })
            .min(2, { message: t('lastName.min') })
            .max(50, { message: t('lastName.max') }),
        email: z
            .string({
                error: t('email.required'),
            })
            .email({ message: t('email.invalid') }),
        phone: z
            .string({
                error: t('phone.required'),
            })
            .regex(
                /^\+?[0-9]{1,3}?[-. ]?(\(?\d{1,4}\)?)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/,
                {
                    message: t('phone.invalid'),
                }
            ),
        terms: z.boolean().refine((val) => val === true, {
            message: t('terms.required'),
        }),
        message: z
            .string({
                error: t('message.required'),
            })
            .max(700, { message: t('message.max') }),
    });
export type ContactFormSchemaType = z.infer<
    ReturnType<typeof ContactFormSchema>
>;
