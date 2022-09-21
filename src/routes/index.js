import Home from "@pages/Home";
import Blog from "@pages/Blog";
import Biography from "@pages/Bioghrapy";
import Footer from "@templates/Footer";
import getHash from "@utils/getHash";
import Portfolio from "@pages/Portfolio";
import elementEvents from "@utils/elementEvents";

const routes = {
    'home': Home,
    'portfolio': Portfolio,
    'blog': Blog,
    'biography': Biography
}

const router = () => {
    const $body = null || document.querySelector('body');

    let route = getHash();
    let render = routes[route];

    $body.innerHTML = "";
    $body.innerHTML = render() + Footer();
    elementEvents();
    window.scroll(0, 0);
}

export default router;