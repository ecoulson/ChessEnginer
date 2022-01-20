export default class RGBColor {
	constructor(
		public readonly red: number,
		public readonly green: number,
		public readonly blue: number
	) {}

	toStyleString(): string {
		return `rgba(${this.red}, ${this.green}, ${this.blue})`;
	}
}
