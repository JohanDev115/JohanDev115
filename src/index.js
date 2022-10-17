import router from './routes/index';
import '@styles/main.scss';
if (window.innerWidth >= 1024) {
    import('@styles/desktop.scss');
}

window.addEventListener('load', () => { 
    router();
});

window.addEventListener('hashchange', router);


