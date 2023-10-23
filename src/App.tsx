

import './App.css'
import { NavBar } from './components'
import { Home } from './pages/Home'

function App() {
 

  return (
<>
    <NavBar/>
    <Home/>

</>
    
  )
}

export default App

// https://www.youtube.com/watch?v=p9PAmqpCWgA  45:00

// CTRL + . ES PARA Q SE DESPLEGUE OPCIONES DE IMPORTAR


/* LIBRERIAS USADAS Y NOTAS
npm create vite@latest favoriteperson
react
typescrit

npm i
npm run dev

instlar; extension react create component; te crea los compnentes facil

COLOCAR EN vite.config.ts; PARA SIMPLIFICAR LAS IMPORTACIONES CON LOS ALIAS Y NO ESTAR RECORRIENDO TODA LA CARPETA

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'srs')}]
  }
})

COLOCAR EN EL tsconfig.json; 
"paths": {
      "@/*":["./src/*"]
    },

*/

