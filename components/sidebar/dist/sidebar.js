'use client';
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var link_1 = require("next/link");
var google_1 = require("next/font/google");
var image_1 = require("next/image");
var utils_1 = require("@/lib/utils");
var routes = require('./sidebar-routes').routes;
var montserrat = google_1.Montserrat({
    weight: '600',
    subsets: ['latin']
});
var Sidebar = function () {
    var pathname = navigation_1.usePathname();
    return (React.createElement("div", { className: 'space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white' },
        React.createElement("div", { className: 'px-3 py-2 flex-1' },
            React.createElement(link_1["default"], { href: '/dashboard', className: 'flex items-center pl-3 mb-14' },
                React.createElement("div", { className: 'relative w-8 h-8 mr-4' },
                    React.createElement(image_1["default"], { fill: true, alt: 'Logo', src: '/logo.png' })),
                React.createElement("h1", { className: utils_1.cn('text-2xl font-bold', montserrat.className) }, "Genius")),
            React.createElement("div", { className: 'space-y-1' }, routes.map(function (route) { return (React.createElement(link_1["default"], { href: route.href, key: route.href, className: utils_1.cn('text-sm group flex p-3 W-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition', pathname === route.href
                    ? 'text-white bg-white/10'
                    : 'text-zinc-400') },
                React.createElement("div", { className: 'flex items-center flex-1' },
                    React.createElement(route.icon, { className: utils_1.cn('h-5 w-5 mr-3', route.color) }),
                    route.label))); })))));
};
exports["default"] = Sidebar;
