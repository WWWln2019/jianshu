import Home from "./pages/home"
//这是一个异步组件，此时直接与Router组件对应的是这个异步组件，而非原始组件，所以原始组件获取不到router中的信息了
import Detail from "./pages/detail/loadable"
import Write from "./pages/write/loadable"
import Profile from "./pages/profile/loadable"
import Login from "./pages/login"
import NotFound from "./pages/notFound"
import ProfileArticle from "./pages/profile/components/navTab/article";
import ProfileInfo from "./pages/profile/components/navTab/info";
import ProfileComment from "./pages/profile/components/navTab/comment";
import ProfileHot from "./pages/profile/components/navTab/hot";

const routes = [
    {
        path: "/",
        component: Home,
        exact:true
    },
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path: "/login",
        component: Login
    },
    {
        path:"/write",
        component:Write
    },
    {
        path: "/profile",
        component: Profile,
        children: [
            {
                path: "/profile/article",
                component:ProfileArticle
            },
            {
                path: "/profile/info",
                component:ProfileInfo,
                exact:true
            },
            {
                path: "/profile/comment",
                component:ProfileComment,
                exact:true
            },
            {
                path: "/profile/hot",
                component:ProfileHot,
                exact:true
            },

        ]
    },
    {
        component:NotFound
    }
]

export {routes}
