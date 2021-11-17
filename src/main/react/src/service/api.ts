import { UserToken } from './../model/token';
export const api = {
	async get<T>(url: string, params?: any): Promise<T> {
		const res = await fetch(
			params ? url : `${url}?${new URLSearchParams(params).toString()}`
		)
		if (res.ok) {
			const data = await res.json()
			return data as T
		}
		throw new Error(res.statusText)
	},

	async post<T>(url: string, data?: any): Promise<T> {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: typeof data === 'string' ? data : JSON.stringify(data),
		})
		if (res.ok) {
			const r = await res.json()
			return r as T
		}
		throw new Error(res.statusText)
	},

	async login(username: string, password: string): Promise<UserToken> {
		const url = '/api/v1/token'
		const request = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				username,
				password
			},
		});
		if (request.ok) {
			const res = await request.json()
			return new UserToken(res);
		}
		throw new Error(request.statusText)
	}
}
