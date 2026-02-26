import { ArticleSchemaType } from '@/components/schemas/admin/article';
import { Timestamp } from 'firebase/firestore';

interface ArticleT extends ArticleSchemaType {
    id: string;
    createdAt: Timestamp;
}

export type { ArticleT };
