export interface IProfile {
    id?: number;
    email: string;
    name: string;
    avatar: {
        id: number;
        high: string;
        medium: string;
        low: string;
    } | null;
    is_active?: boolean;
    type?: string;
    created?: string;
    modified?: string;
    role?: string;
}
