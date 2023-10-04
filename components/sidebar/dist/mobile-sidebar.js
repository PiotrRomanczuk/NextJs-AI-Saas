'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var sheet_1 = require("@/components/ui/sheet");
var sidebar_1 = require("@/components/sidebar/sidebar");
var MobileSidebar = function () {
    var _a = react_1.useState(false), isMounted = _a[0], setIsMounted = _a[1];
    react_1.useEffect(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (React.createElement(sheet_1.Sheet, null,
        React.createElement(sheet_1.SheetTrigger, { asChild: true },
            React.createElement(button_1.Button, { value: 'ghost', size: 'icon', className: 'md:hidden' },
                React.createElement(lucide_react_1.Menu, null))),
        React.createElement(sheet_1.SheetContent, { side: 'left', className: 'p-0' },
            React.createElement(sidebar_1["default"], null))));
};
exports["default"] = MobileSidebar;
