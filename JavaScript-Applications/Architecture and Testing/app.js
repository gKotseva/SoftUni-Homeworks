// apps.js -> controler
// views -> login, register, dashboard/catalog, details, homepage
// router -> paths towards all the views defined
// api -> methods, async functions

import { logout } from "./api/user.js"
import { initialize } from "./router.js"
import { showCatalog } from "./view/catalog.js"
import { showCreate } from "./view/create.js"
import { showDetails } from "./view/details.js"
import { showHome } from "./view/home.js"
import { showLogin } from "./view/login.js"
import { showRegister } from "./view/register.js"

document.getElementById('defaultDiv').remove()


async function logoutUser() {
    await logout()
    router.goTo('/')
    router.updateNavBar()
}

let links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/details': showDetails,
    '/register': showRegister,
    '/create': showCreate,
    '/logout': logoutUser,
}

let router = initialize(links)
router.updateNavBar()
router.goTo('/')
