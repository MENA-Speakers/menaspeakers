
//Rate Card interface

import {ProfileType} from "@/types/admin-profiles";

export interface RateCardType {
    id: number;
    hash_id?: string;
    profile?: ProfileType;
    title?: string;
    proposal_id?: string,
    body?: string;
    summary?: string;
    fee?: string;
    price_type?: string;
    created_at?: string;
    updated_at?: string;
}
