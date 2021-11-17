export interface IJob {
	className: string;
	name: string;
	cron: string;
	group: string;
	state: string;
	timezone: string;
}

export type Jobs = IJob[];