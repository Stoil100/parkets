import MainButton from '@/components/common/MainButton';

export const Footer = ({
    isLoading,
    t,
}: {
    isLoading: boolean;
    t: (key: string, values?: Record<string, any>) => string;
}) => (
    <MainButton
        className="w-fit self-center"
        type="submit"
        variant="secondary"
        disabled={isLoading}
    >
        {t('submit')}
    </MainButton>
);
