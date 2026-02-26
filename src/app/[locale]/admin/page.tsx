'use client';

import { useAuth } from '@/components/providers/auth';

import { AdminCreateForm } from '@/components/admin/forms/adminCreate';
import { ArticleForm } from '@/components/admin/forms/article/main';
import AuthForm from '@/components/admin/forms/auth/main';
import InquiriesList from '@/components/admin/inquiries/InquiriesList';
import NoPermissionView from '@/components/admin/NoPermission';
import ArticlePreview from '@/components/admin/previews/Article';
import LoadingOverlay from '@/components/common/Loading';
import MainButton from '@/components/common/MainButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from '@/i18n/navigation';
import { LogOutIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Admin() {
    const { user, loading, logOut } = useAuth();
    const router = useRouter();
    const t = useTranslations('Pages.Admin');

    if (!user.uid) {
        return (
            <main className="min-h-screen-nav pt-nav flex items-center justify-center md:p-4">
                {loading && <LoadingOverlay />}
                <div className="flex flex-col items-center justify-center gap-4">
                    <Tabs
                        defaultValue="login"
                        className="w-full max-w-lg rounded-md bg-white p-4"
                    >
                        <TabsList className="grid w-full grid-cols-2 bg-blue-200">
                            <TabsTrigger value="login">
                                {t('tabs.login')}
                            </TabsTrigger>
                            <TabsTrigger value="register">
                                {t('tabs.register')}
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="login" className="">
                            <AuthForm
                                variant="login"
                                t={(key) => t(`forms.auth.${key}`)}
                            />
                        </TabsContent>
                        <TabsContent value="register">
                            <AuthForm
                                variant="register"
                                t={(key) => t(`forms.auth.${key}`)}
                            />
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        );
    }

    if (user.role !== 'admin' && !loading) {
        return <NoPermissionView router={router} logOut={logOut} />;
    }

    return (
        <section className="min-h-screen-nav pt-nav flex flex-col bg-white p-2 gap-2">
            <div className="rounded-xl border p-4 shadow-sm">
                <h3 className="mb-4 text-3xl font-semibold">
                    {t('forms.articles.header')}
                </h3>
                <ArticleForm t={(key) => t(`forms.articles.${key}`)} />
                <ArticlePreview t={(key) => t(`preview.${key}`)} />
            </div>
            <InquiriesList t={(key) => t(`inquiries.${key}`)} />
            <AdminCreateForm t={(key) => t(`forms.adminCreate.${key}`)} />
            <MainButton onClick={logOut} className="mt-2">
                {t('logOut')}
                <LogOutIcon />
            </MainButton>
        </section>
    );
}
