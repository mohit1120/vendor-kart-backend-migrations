import Koa from "koa"

const Main = () => {
    try{
        const app = new Koa();
        const port = 8000;
    
        app.listen(port, ()=>{
            console.log(`server is running at port no:${port}`);
        })
    }catch(err){
        throw err
    }
};

Main();