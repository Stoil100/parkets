import { Timestamp } from 'firebase/firestore';

export default function serializeTimestamps(obj: any): any {
    if (obj instanceof Timestamp) return obj.toMillis();
    if (Array.isArray(obj)) return obj.map(serializeTimestamps);
    if (obj && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k, serializeTimestamps(v)])
        );
    }
    return obj;
}
