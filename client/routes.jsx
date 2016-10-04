import App from "./app/app.jsx"
import Homepage from "./pages/Homepage/homepage.jsx"
import Auth from "./pages/Auth/auth.jsx"


export default function (store) {

    return {
        component: App,
        path: '/',
        indexRoute: {
            component: Homepage
        },
        childRoutes: [
            {
                path: "/Auth",
                component: Auth
            }
        ]
    }
} ;