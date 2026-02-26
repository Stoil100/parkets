'use client';

import { Checkbox } from '@/components/ui/checkbox';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { db } from '@/firebase/config';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import MainButton from '../common/MainButton';
import { ContactFormSchema, ContactFormSchemaType } from '../schemas/contact';

interface ContactFormProps {
    t: (key: string) => string;
}

export function ContactForm({ t }: ContactFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<ContactFormSchemaType>({
        resolver: zodResolver(ContactFormSchema((key) => t(`errors.${key}`))),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            terms: false,
        },
    });

    async function onSubmit(values: ContactFormSchemaType) {
        setIsLoading(true);
        try {
            await addDoc(collection(db, 'inquiries'), {
                ...values,
                createdAt: serverTimestamp(),
            });
            toast.success(t('toast.success.title'), {
                description: t('toast.success.description'),
            });
            form.reset();
        } catch (error) {
            toast.error(t('toast.error.title'), {
                description: t('toast.error.description'),
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('firstName.label')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('firstName.placeholder')}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('lastName.label')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('lastName.placeholder')}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('email.label')}</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder={t('email.placeholder')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('phone.label')}</FormLabel>
                            <FormControl>
                                <Input
                                    type="tel"
                                    placeholder={t('phone.placeholder')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('message.label')}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t('message.placeholder')}
                                    rows={4}
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-1 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="leading-none">
                                <FormLabel className="font-normal">
                                    {t('terms.label.accept')}{' '}
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {t('terms.label.conditions')}
                                    </a>
                                </FormLabel>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

                <MainButton
                    type="submit"
                    variant="secondary"
                    className="w-full"
                    disabled={isLoading}
                >
                    {t('submit')}
                </MainButton>
            </form>
        </Form>
    );
}
