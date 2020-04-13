import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRouter'

//generar objeto con las rutas

const routers = {
    '/': Home,
    '/:id': Character,
    '/contac;t': 'Contact',
};

//Manejador
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    
    header.innerHTML = await Header();
    //obtener hash
    let hash = getHash();
    //manejar la ruta
    let route = await resolveRoutes(hash);
    //contener el valor de las rutas y compararlas
    let render = routers[route] ? routers[route] : Error404;
    //renderizar enc ontent
    content.innerHTML = await render();
};

export default router;