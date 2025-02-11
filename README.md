```bash
npm init -y
npm i -D typescript tsx @types/node
npx tsc --init

npm i express
npm i -D @types/express

npm i -D @swc/core @swc/cli 
```


Crea el endpoint que liste todos los usuarios de la web a este endpoint solo pueede acceder el usuario role=admin 
Crea rutas, servicios, controllers, middlewares


Valida mediante un middleware
El form de registro
- comprueba que el email sea valid
- comprueba que el password sea de minimo 4 letras


Crea un frontend con vite + tailwind 4.0 + react