const fs = require("fs").promises
const path = require("path")

async function walk(files,rootDir){
    for( let f of files ){
        const filleFullPath = path.resolve(rootDir,f)
        const stats = await fs.stat(filleFullPath)
        
       
        if( stats.isDirectory() ){
            readdir(filleFullPath)
            continue;
        }
        if(/\.git/g.test(filleFullPath)){
            continue
        }
        if(/\node_modules/g.test(filleFullPath)){
            continue;
        }

        //pegando apenas os arquivos css e html
        if(!/\.css/g.test(filleFullPath) && !/\.html/g.test(filleFullPath)){
            continue
        }
        console.log(f,stats.isDirectory())
    }
}
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files,rootDir)
}
readdir("/Users/clint/OneDrive/Desktop/JAVA/JS/")