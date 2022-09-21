import router from './routes/index';
import '@styles/main.css';

window.addEventListener('load', () => {
    location.hash = "home"
    router();
});

window.addEventListener('hashchange', router);


