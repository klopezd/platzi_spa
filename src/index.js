//Importar nuestro router

import router from './routes';
//Invocar la funcion
window.addEventListener('load', router);
window.addEventListener('hashchange', router);