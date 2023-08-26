"use client";
"use strict";
exports.__esModule = true;
exports.TechStack = void 0;
var react_1 = require("react");
var Stacks_1 = require("./components/Stacks");
var html_svg_1 = require("../../assets/html.svg");
var css_svg_1 = require("../../assets/css.svg");
var js_svg_1 = require("../../assets/js.svg");
var typescript_svg_1 = require("../../assets/typescript.svg");
var react_svg_1 = require("../../assets/react.svg");
var next_js_svg_1 = require("../../assets/next-js.svg");
var next_Dark_svg_1 = require("../../assets/next-Dark.svg");
var vue_9_svg_1 = require("../../assets/vue-9.svg");
var angular_svg_1 = require("../../assets/angular.svg");
var sass_svg_1 = require("../../assets/sass.svg");
var tailwind_svg_1 = require("../../assets/tailwind.svg");
var styled_lith_svg_1 = require("../../assets/styled-lith.svg");
var styled_Dark_svg_1 = require("../../assets/styled-Dark.svg");
var jest_svg_1 = require("../../assets/jest.svg");
var next_themes_1 = require("next-themes");
exports.TechStack = function () {
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "flex items-center flex-col justify-center text-center mt-28 gap-10" },
            react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                react_1["default"].createElement("h1", { className: "font-bold text-lightTitle text-3xl dark:text-darkTitle" }, "Conhecimentos"),
                react_1["default"].createElement("span", { className: "font-bold text-lightSubTitle text-md dark:text-darkSubTitle" }, "Tecnologias com as quais tenho trabalhado recentemente")),
            react_1["default"].createElement("div", { className: 'grid grid-cols-6 gap-20' },
                react_1["default"].createElement(Stacks_1.Stacks, { image: html_svg_1["default"], url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: css_svg_1["default"], url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: js_svg_1["default"], url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: typescript_svg_1["default"], url: 'https://www.typescriptlang.org/' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: react_svg_1["default"], url: 'https://react.dev/' }),
                theme === "light" ?
                    react_1["default"].createElement(Stacks_1.Stacks, { image: next_js_svg_1["default"], url: 'https://nextjs.org/' })
                    :
                        react_1["default"].createElement(Stacks_1.Stacks, { image: next_Dark_svg_1["default"], url: 'https://nextjs.org/' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: vue_9_svg_1["default"], url: 'https://vuejs.org/' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: angular_svg_1["default"], url: 'https://angular.io/' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: sass_svg_1["default"], url: 'https://sass-lang.com/' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: tailwind_svg_1["default"], url: 'https://tailwindcss.com/' }),
                theme === "light" ?
                    react_1["default"].createElement(Stacks_1.Stacks, { image: styled_lith_svg_1["default"], url: 'https://styled-components.com/' })
                    :
                        react_1["default"].createElement(Stacks_1.Stacks, { image: styled_Dark_svg_1["default"], url: 'https://styled-components.com/' }),
                react_1["default"].createElement(Stacks_1.Stacks, { image: jest_svg_1["default"], url: 'https://jestjs.io/' })))));
};
