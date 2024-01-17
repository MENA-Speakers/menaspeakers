
//Rate Card interface

import {ProfileType} from "@/types/admin-profiles";

export interface RateCardType {
    id?: number;
    profile?: ProfileType;
    title?: string;
    description?: string;
    price?: string;
    price_type?: string;
    created_at?: string;
    updated_at?: string;
}
