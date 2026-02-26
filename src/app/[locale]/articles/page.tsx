'use client';
import { db } from '@/firebase/config';
import { Link } from '@/i18n/navigation';

import { ArticleT } from '@/models/article';
import { collection, getDocs } from 'firebase/firestore';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

const ArticleLink: React.FC<ArticleT> = ({ ...article }) => (
    <Link
        href={`articles/${article.id}`}
        className={
            'group relative col-span-1 row-span-1 flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl text-white'
        }
    >
        <img
            src={article.heroImage}
            alt={article.title}
            className="h-full w-full transform object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute top-2 flex w-full justify-between px-2">
            <h4 className="text-md font-extralight sm:text-xl">
                {article.createdAt.toDate().toLocaleDateString('en-GB')}
            </h4>
        </div>
        <div className="absolute bottom-2 left-2 space-y-4">
            <h2 className={'text-xl'}>{article.title}</h2>
        </div>
    </Link>
);

export default function Articles() {
    const t = useTranslations('Pages.Articles');
    const [articles, setArticles] = useState<ArticleT[]>([]);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articlesCollection = collection(db, 'articles');
                const articleSnapshot = await getDocs(articlesCollection);
                const articlesList: ArticleT[] = articleSnapshot.docs.map(
                    (doc) =>
                        ({
                            id: doc.id,
                            ...doc.data(),
                        }) as ArticleT
                );
                setArticles(articlesList);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <main className="h-fit bg-background py-nav">
            <div className="container mx-auto px-4 py-12">
                <h1 className="mb-8 text-center text-6xl font-bold tracking-tight text-balance underline decoration-4">
                    {t('title')}
                </h1>
                <section className="grid-auto-flow-dense grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
                    {articles.length > 0 ? (
                        articles.map((article) => (
                            <ArticleLink key={article.id} {...article} />
                        ))
                    ) : (
                        <p className="col-span-1 py-16 text-center text-xl text-muted-foreground sm:col-span-2 md:col-span-4">
                            {t('noArticlesFound')}
                        </p>
                    )}
                </section>
            </div>
        </main>
    );
}
