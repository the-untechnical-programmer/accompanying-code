const subtract = require("../utils/subtract");

describe("utils/subtract", () => {
  it("should correctly subtract 1 from the supplied value", () => {
    expect(subtract(4, 1)).toEqual(3);
  });
  it("should not return 5", () => {
    expect(subtract(6, 1)).not.toEqual(4);
  });
});
