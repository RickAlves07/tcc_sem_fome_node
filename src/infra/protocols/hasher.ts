export interface IHasher {
	hash: (text: string) => Promise<string>;
	compare: (text: string, digest: string) => Promise<boolean>;
}
