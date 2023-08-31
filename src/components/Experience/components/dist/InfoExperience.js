"use client";
"use strict";
exports.__esModule = true;
exports.InfoExperience = void 0;
var react_1 = require("react");
var DescExperience_1 = require("./DescExperience");
exports.InfoExperience = function () {
    var _a = react_1.useState(false), experience2 = _a[0], setexperience2 = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex gap-20" },
            React.createElement("div", { className: "bg-lightBox dark:bg-bgColorJokerDark w-[15rem] h-[8rem]" },
                React.createElement("div", { className: experience2 ? 'h-12 flex items-center mt-1 cursor-pointer' : 'border-l-4 h-12 border-colorJoker  flex items-center mt-1 cursor-pointer', onClick: function () { return setexperience2(!experience2); } },
                    React.createElement("span", { className: experience2 ? 'ml-5  font-bold' : 'ml-4 text-colorJoker font-bold' }, "Music PRO")),
                React.createElement("div", { className: experience2 ? 'border-l-4 h-12 border-colorJoker  flex items-center mt-1 cursor-pointer' : 'h-12 flex items-center mt-1 cursor-pointer', onClick: function () { return setexperience2(!experience2); } },
                    React.createElement("span", { className: experience2 ? 'ml-4 text-colorJoker font-bold' : 'ml-5  font-bold' }, "SharePrime"))),
            experience2 ? (React.createElement(DescExperience_1.DescExperience, { company: "SharePrime", date: "Mai 2021 - Jun 2022", description: "Desenvolver novas solu\u00E7\u00F5es, document\u00E1-las e integr\u00E1-las \u00E0 intranets, desenvolver intranets para empresas \u00E0 partir do Reactjs e SPFX, dar manuten\u00E7\u00E3o e melhorias \u00E0 solu\u00E7\u00F5es j\u00E1 criadas e Desenvolver novos sites com Nextjs.", title: "Desenvolvedor Front-End React Js" })) : (React.createElement(DescExperience_1.DescExperience, { company: "MusicPRO", date: "Jun 2022 - Atual", description: "Desenvolver novas solu\u00E7\u00F5es de sistemas web com Next.js e React.js, sempre priorizando usabilidade e design. Contribu\u00ED tamb\u00E9m na cria\u00E7\u00E3o de uma experi\u00EAncia visual moderna com Tailwind CSS e participei na constru\u00E7\u00E3o de um aplicativo s\u00F3lido usando React Native.", title: "Desenvolvedor Front-End React Js / React Native" })))));
};
