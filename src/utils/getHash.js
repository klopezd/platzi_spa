const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    //elimnamos el simbolo de # de la url, lo convertimos en minusculas y lo dividimos en un arreglo

export default getHash;