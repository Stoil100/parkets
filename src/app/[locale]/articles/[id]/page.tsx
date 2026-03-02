import ArticleView from '@/components/articles/View';
import { db } from '@/firebase/config';
import serializeTimestamps from '@/firebase/utils/serializer';
import { ArticleT } from '@/models/article';
import { doc, getDoc } from 'firebase/firestore';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
    params: { id: string };
};

async function getArticle(id: string) {
    const ref = doc(db, 'articles', id);
    const snap = await getDoc(ref);

    if (!snap.exists()) return null;

    return serializeTimestamps({
        id: snap.id,
        ...snap.data(),
    } as ArticleT);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = await getArticle(params.id);

    if (!article) {
        return {
            title: 'Article not found',
            description: 'The requested article does not exist.',
        };
    }

    const description =
        article.titleDescriptions?.[0]?.value ??
        article.descriptions?.[0]?.value ??
        'Read this article on our website.';

    return {
        title: article.title,
        description,
    };
}

export default async function ArticlePage({ params }: Props) {
    const article = await getArticle(params.id);

    if (!article) {
        notFound();
    }

    return <ArticleView article={article} />;
}
