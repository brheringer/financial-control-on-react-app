import {Account} from "../models/Account";
import { post_graphql } from "./BaseService";

interface QueryResult {
    data: QueryPayload;
    errors: QueryError;
}

interface QueryPayload {
    accounts: Account[]
}

interface QueryError {
    message: string;
}

export const get_accounts = (): Promise<QueryResult> => {
    const query = `{ 
        accounts { 
            id
            structure
            name 
        }
    }`;
    return post_graphql<QueryResult>(query);
}

export const save_account = (data: Account) => {
    const mutation = `mutation { 
        updateAccount(id: "${data.id}", structure: "${data.structure}", name: "${data.name}") { 
            account { 
                id
                structure
                name
            }
        }
    }`;
    return post_graphql<Account>(mutation);
};
