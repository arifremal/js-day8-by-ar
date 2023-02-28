function greeting(handler,name){
   handler(name)
}

function handler(name){
    console.log('Morning',name);
}

function great (name){
    console.log('evening', name);
}
const name = 'arif'
greeting(handler,'arif remal')
greeting(handler,' remal')
greeting(great,' remal')