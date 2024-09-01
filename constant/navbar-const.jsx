const { Home, ListTodo } = require("lucide-react");

export const NavbarConst = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: <Home className="h-5 w-5"/>,
    },
    {
        name: "Tasks",
        link: "/tasks",
        icon: <ListTodo className="h-5 w-5"/>
    },
]