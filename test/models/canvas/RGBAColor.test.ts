import RGBColor from "../../../src/models/canvas/RGBColor";

describe("RGBAColor Test Suite", () => {
	test("Should create the correct color string", () => {
		const color = new RGBColor(0, 0, 0);

		expect(color.toStyleString()).toEqual(`rgba(0, 0, 0)`);
	});
});
