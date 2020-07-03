if(process.env.NODE_ENV != 'production'){
	require('dotenv').config()
}
import  {readFile} from 'fs'
console.log('Comienza a programar aqui : '+__dirname)
