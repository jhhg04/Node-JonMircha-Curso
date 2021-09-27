'use strict';

function singleThread() {
  process.argv[2] = 'Estamos Aprendiendo Node';
  process.argv[3] = 19;
  process.argv[4] = null;
  process.argv[5] = true;

  console.log('------------------------------------ ');
  console.log('       EL PROCESO DE NODE.JS         ');
  console.log('Id del proceso........ ' + process.pid);
  console.log('Titulo................ ' + process.title);
  console.log('Directorio de node.... ' + process.execPath);
  console.log('Directorio de node.... ' + process.cwd());
  console.log('Tiempo activo de node. ' + process.uptime());
  console.log('Argumentos del proceso ' + process.argv);
  console.log('------------------------------------ ');
}

singleThread();
