const add = require("../utils/add");

describe("utils/add", () => {
  it("should correctly add the supplied value to ten", () => {
    expect(add(4, 10)).toEqual(14);
  });

  it("should not add up to 50", () => {
    expect(add(4, 10)).not.toEqual(50);
  });
});
