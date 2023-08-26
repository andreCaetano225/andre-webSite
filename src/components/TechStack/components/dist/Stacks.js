"use strict";
exports.__esModule = true;
exports.Stacks = void 0;
var image_1 = require("next/image");
var react_1 = require("react");
exports.Stacks = function (_a) {
    var image = _a.image, url = _a.url;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("a", { href: url, target: "_blank", rel: "noopener noreferrer" },
            react_1["default"].createElement(image_1["default"], { src: image, alt: "stack", width: 100, height: 100 }))));
};
