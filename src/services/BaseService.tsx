const ENDPOINT_RAW = 'http://localhost:3000'; //TODO parameterize
const ENDPOINT_GQL = `${ENDPOINT_RAW}/graphql`;

export async function post_graphql<T>(query: string): Promise<T> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${get_token()}` },
        body: JSON.stringify({ query: query })
    }
    const response = await fetch(ENDPOINT_GQL, requestOptions);
    const body = await response.json();
    //TODO catch
    return body;
}

//TODO refactor DRY?
export async function post<T>(path: string, object: string): Promise<T> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: object
    }
    const response = await fetch(`${ENDPOINT_RAW}${path}`, requestOptions);
    const body = await response.json();
    //TODO catch
    return body;
}

function get_token(): string | null {
    return localStorage.getItem('token')
}
