import {Account} from "../models/Account";

const ENDPOINT = 'http://localhost:3000/graphql'; //TODO parameterize

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
        addAccount(structure: "${data.structure}", name: "${data.name}") { 
            account { 
                id
                structure
                name
            }
        }
    }`;
    return post_graphql<Account>(mutation);
};


async function post_graphql<T>(query: string): Promise<T> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query })
    }
    const response = await fetch(ENDPOINT, requestOptions);
    const body = await response.json();
    //TODO catch
    return body;
}