import Rectangle from "../../models/canvas/Rectangle";
import Sprite from "../../models/canvas/Sprite";
import Style from "../../models/canvas/Style";
import ICanvasBrokerConfiguration from "./ICanvasBrokerConfiguration";

export default class CanvasBroker {
	constructor(private readonly configuration: ICanvasBrokerConfiguration) {}

	drawRectangle(rectangle: Rectangle, style: Style) {
		this.configuration.context.fillStyle = style.fill.toStyleString();
		this.configuration.context.fillRect(
			rectangle.x,
			rectangle.y,
			rectangle.width,
			rectangle.height
		);
	}

	drawSprite(sprite: Sprite) {
		console.log(sprite);
		throw new Error("not implemented");
	}

	clearCanvas() {
		throw new Error("not implemented");
	}
}
