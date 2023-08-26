"use strict";
exports.__esModule = true;
var AboutMe_1 = require("@/components/AboutMe/AboutMe");
var Profile_1 = require("@/components/Profile");
var TechStack_1 = require("@/components/TechStack/TechStack");
function Home() {
    return (React.createElement("div", { className: "max-w-[1180px] w-full m-auto " },
        React.createElement(Profile_1.Profile, null),
        React.createElement(AboutMe_1.AboutMe, null),
        React.createElement(TechStack_1.TechStack, null)));
}
exports["default"] = Home;
