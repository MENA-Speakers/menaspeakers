import {ProfileType} from "@/types/admin-profiles";

export interface PortfolioType {
    id: string;
    title?: string;
    hash_id?: string;
    body?: string;
    summary?: string;
    profile: ProfileType;
    profile_id?: string;
    fee?: string;
    tags?: string;
    created_at?: string;
    updated_at?: string;
}
