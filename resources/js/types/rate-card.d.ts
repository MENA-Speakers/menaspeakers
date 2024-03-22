
//Rate Card interface

import {ProfileType} from "@/types/admin-profiles";

export interface RateCardType {
    id: number;
    hash_id?: string;
    profile: ProfileType;
    currency: string,
    title: string;
    location: string;
    proposal_id?: string,
    gallery: Array<string>;
    summary?: string;
    fee: string;
    videos: Array<string>;
    price_type?: string;
    created_at?: string;
    updated_at?: string;
}
