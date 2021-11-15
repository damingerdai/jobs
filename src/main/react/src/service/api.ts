export const api = {
    async get<T>(url: string, params?: any): Promise<T> {
        const res = await fetch(params ? url : `${url}?${new URLSearchParams(params).toString()}`);
        if (res.ok) {
            const data = await res.json();
            return data as T;
        } else {
            throw new Error(res.statusText);
        }

    },

    async post<T>(url: string, data?: any): Promise<T> {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: typeof data === 'string' ? data : JSON.stringify(data),
        })
        if (res.ok) {
            const data = await res.json();
            return data as T;
        } else {
            throw new Error(res.statusText);
        }
    },

    // async login(username, password): Promise<>

}
