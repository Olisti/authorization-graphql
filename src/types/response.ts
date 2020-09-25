import { User } from './user';

export interface GQLResponse {
    data: {
        auth?: string;
        currentUser?: User;
    };
}
