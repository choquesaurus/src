if(process.env.NODE_ENV != 'production'){
	require('dotenv').config()
}
import  {readFile} from 'fs'
console.log('Tu estas aqui : '+__dirname)
