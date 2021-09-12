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

export const getAccounts = (): Promise<QueryResult> => {
    const query = `{ 
        accounts { 
            id
            structure
            name 
        }
    }`;
    return post_graphql<QueryResult>(query);
}

export const saveAccount = (data: Account) => {
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

export const deleteAccount = (data: Account) => {
    const mutation = `mutation { 
        delete(id: "${data.id}")
    }`;
    return post_graphql<Account>(mutation);
};
