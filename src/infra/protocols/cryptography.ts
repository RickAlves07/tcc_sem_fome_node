export interface ICryptography {
	encrypt: (data: any) => Promise<string>;
	decrypt: (text: string) => Promise<any>;
}
