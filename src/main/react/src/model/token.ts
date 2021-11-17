export interface IUserToken {
    token: string;
    refreshToken: string;
    exp: Date;
}

const defaultUserToken: IUserToken = {
	token: '',
	refreshToken: '',
	exp: new Date(),
}

export class UserToken implements IUserToken {
	public token: string;

	public refreshToken: string;

	public exp: Date;

	constructor(userToken: Partial<UserToken> = defaultUserToken) {
		const input = { ...defaultUserToken, ...userToken };
		this.token = input.token;
		this.refreshToken = input.refreshToken;
		this.exp = input.exp;
	}
}
