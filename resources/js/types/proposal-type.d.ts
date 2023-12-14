//Proposal type interface

export interface ProposalType {
    id: string;
    title?: string;
    body?: string;
    summary?: string;
    user: UserType;

    profile_id?: string;
    footer?: string;
    created_at?: string;
    updated_at?: string;
}
