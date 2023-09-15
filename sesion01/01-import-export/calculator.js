const PI = 3.1415;


function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}


// CommonJS: require(), exports, module.exports
// Utilizar exports es exportar cosas (funciones/variables, clases)
exports.PI = PI;
exports.sum = sum;
exports.sub = sub;

// Exportar todo de un jalon
// module.exports = {
//     PI,
//     sub,
//     sum
// }

// WARNING: exports y module.exports no se pueden combinar

