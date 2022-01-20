import Rectangle from "../../models/canvas/Rectangle";
import Sprite from "../../models/canvas/Sprite";
import Style from "../../models/canvas/Style";

export default class CanvasBroker {
	drawRectangle(rectangle: Rectangle, style: Style) {
		throw new Error("not implemented");
	}

	drawSprite(sprite: Sprite) {
		throw new Error("not implemented");
	}
}
