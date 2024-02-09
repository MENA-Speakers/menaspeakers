//Proposal type interface

import {RateCardType} from "@/types/rate-card";
import {ProfileType} from "@/types/admin-profiles";

export interface ProposalType {
    id: string;
    hash_id: string;
    title?: string;
    body?: string;
    summary?: string;
    status?: string;
    rateCards?: RateCardType[];
    responsible: UserType;
    profile_id?: string;
    profile?: ProfileType;
    footer?: string;
    created_at?: string;
    updated_at?: string;
}
