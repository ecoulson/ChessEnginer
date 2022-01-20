import CanvasBroker from "./brokers/canvas/CanvasBroker";
import Point from "./models/canvas/Point";
import Rectangle from "./models/canvas/Rectangle";
import RGBColor from "./models/canvas/RGBColor";
import Style from "./models/canvas/Style";

const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const broker = new CanvasBroker({
	element: canvasElement,
	context: canvasElement.getContext("2d") as CanvasRenderingContext2D,
});

broker.drawRectangle(
	new Rectangle(new Point(0, 0), new Point(64, 64)),
	new Style(new RGBColor(0, 0, 0))
);
