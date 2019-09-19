const yargs = require('yargs')
                .command('listar','imprimir en consola la tabla de multiplicar',{
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                }).command('crear','imprimir en consola la tabla de multiplicar',{
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                }).argv;

const {crearArchivo,listarTabla} = require('./multiplicaciones/multiplicar');

//let yargs = "asd";
let comandos = yargs._[0];

switch (comandos ) {
    case 'listar':
        let listado = listarTabla(yargs.base,yargs.limite);
        break;
    case 'crear':
        crearArchivo(yargs.base).then(nombre=> console.log(nombre)).catch((e)=>console.log(e));
        break;
    default:
        console.log('Comando incorrecto');
}
