"use strict";
exports.__esModule = true;
exports.routes = void 0;
var lucide_react_1 = require("lucide-react");
exports.routes = [
    {
        label: 'Dashboard',
        icon: lucide_react_1.LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500'
    },
    {
        label: 'Conversation',
        icon: lucide_react_1.MessageSquare,
        href: '/conversation',
        color: 'text-violet-500'
    },
    {
        label: 'Image Generation',
        icon: lucide_react_1.ImageIcon,
        href: '/image',
        color: 'text-pink-700'
    },
    {
        label: 'Video Generation',
        icon: lucide_react_1.VideoIcon,
        href: '/video',
        color: 'text-orange-700'
    },
    {
        label: 'Music Generation',
        icon: lucide_react_1.Music,
        href: '/music',
        color: 'text-emerald-500'
    },
    {
        label: 'Code Generation',
        icon: lucide_react_1.Code,
        href: '/code',
        color: 'text-green-700'
    },
    {
        label: 'Settings',
        icon: lucide_react_1.SettingsIcon,
        href: '/settings'
    },
];
