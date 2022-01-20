import Point from "./Point";

export default class Rectangle {
	constructor(private readonly origin: Point, private readonly size: Point) {}

	public get x(): number {
		return this.origin.x;
	}

	public get y(): number {
		return this.origin.y;
	}

	public get width(): number {
		return this.origin.x + this.size.x;
	}

	public get height(): number {
		return this.origin.y + this.size.y;
	}
}
