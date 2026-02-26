import { ContactFormSchemaType } from "@/components/schemas/contact";
import { Timestamp } from "firebase/firestore";

interface InquiryT extends ContactFormSchemaType {
    id: string;
    createdAt: Timestamp;
}

export type { InquiryT };
