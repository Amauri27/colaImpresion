function area(base,altura)
{
    return (base*altura)/2;
}
console.log(area(6,8));

const { white } = require('chalk');
const chalk = require('chalk');

console.log(chalk.cyan('Hello world!'));

class Trabajo{
    constructor(ciclos){
        this.ciclos=ciclos;
        this.next=null;
    }
}

class FIFO
{
    constructor()
    {
        this.inicio=null;
    }
agregar(nuevo)
{
    if(this.inicio==null)
    {
        this.inicio=nuevo;
    }
    else
    {
        let temp=this.inicio;
        while(temp.next!=null)
        {
            temp=temp.next;
        }
        temp.next=nuevo;
    }

}
extraer()
{
    let primero=this.inicio;
    if(this.inicio!=null)
    {
        this.inicio=this.inicio.next;
        primero.next=null;
    }
}
ver()
{
    return this.inicio;
}
}

let cola=new FIFO();

for(let i=1;i<=300;i++)
{
    let np= Math.random()*100+1;
    let msg= "ciclo "+ i;
    if(np<=39)
    {
        let nuevo=new Trabajo(Math.random()*11+4)
        cola.agregar(nuevo);
        msg+= " se creo proceso "+ nuevo.ciclos;
    }
    if(cola.ver()!=null)
    {
        cola.ver().ciclos--;
        if(cola.ver().ciclos==0)
        {
            cola.extraer()
        }
    }
}