const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");

test("home page has a title and heading", () => {
  const html = readFileSync("index.html", "utf8");

  assert.match(html, /<title>Cloud CI\/CD Demo<\/title>/);
  assert.match(html, /<h1>Hello from my CI\/CD pipeline!/);
});
