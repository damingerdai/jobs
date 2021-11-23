import { UserToken } from '../model/token';

const inMemeryInitialState: any = localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login') || '') : {};

let token: string = inMemeryInitialState.token as string;

export const api = {

	setToken(_token: string) {
		if (_token) {
			token = _token;
		}
	},

	async get<T>(url: string, params?: any): Promise<T> {
		let realUrl = url;
		if (params) {
			realUrl = `${url}?${new URLSearchParams(params).toString()}`;
		}
		const request = await fetch(realUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token ?? '',
			},
		});
		if (request.ok) {
			const response = await request.json();
			return response as T;
		}
		throw new Error(request.statusText);
	},

	async post<T>(url: string, data?: any): Promise<T> {
		const request = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token ?? '',
			},
			body: typeof data === 'string' ? data : JSON.stringify(data),
		})
		if (request.ok) {
			const response = await request.json();
			return response as T;
		}
		throw new Error(request.statusText);
	},

	async put<T>(url: string, data?: any): Promise<T> {
		const request = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token ?? '',
			},
			body: typeof data === 'string' ? data : JSON.stringify(data),
		})
		if (request.ok) {
			const response = await request.json();
			return response as T;
		}
		throw new Error(request.statusText);
	},

	async delete<T>(url: string, data?: any): Promise<T> {
		const request = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token ?? '',
			},
			body: typeof data === 'string' ? data : JSON.stringify(data),
		})
		if (request.ok) {
			const response = await request.json();
			return response as T;
		}
		throw new Error(request.statusText);
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
