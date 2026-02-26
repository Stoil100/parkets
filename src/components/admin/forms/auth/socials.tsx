import MainButton from '@/components/common/MainButton';
import { Icons } from '@/components/ui/icons';

export const Socials = ({
    googleLogin,
    isLoading,
    t,
}: {
    googleLogin: () => void;
    isLoading: boolean;
    t: (key: string, values?: Record<string, any>) => string;
}) => (
    <>
        <div className="flex gap-3">
            <MainButton
                className="size-[50px]"
                onClick={googleLogin}
                disabled={isLoading}
                type="button"
            >
                <Icons.google />
            </MainButton>
        </div>
        <div className="flex w-full items-center">
            <div className="w-full border-t-2 border-gray-300" />
            <p className="w-full text-center">{t('orWith')}</p>
            <div className="h-1 w-full border-t-2 border-gray-300" />
        </div>
    </>
);
