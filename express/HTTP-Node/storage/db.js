const fs = require('fs');
let db={};
let put = (key,value)=>{
    if(typeof key!=='string'){
        throw new Error("key is not a string");
    }
    else if(db.hasOwnProperty(key)){
        throw new Error("key already exists");
    }
    else{
        db[key]=value;
    }
}

let get = (key)=>{
    if(typeof key!=='string'){
        throw new Error("key is not a string");
    }
    else if(!db.hasOwnProperty(key)){
        throw new Error("key does not exists");
    }
    else{
        return db[key];
    }
}

let getAll = ()=>{
    let i = 0;
    for (let key in db) {
        if (db.hasOwnProperty(key)) {
            i++;
        }
    }
    if(i>0){
        console.log(db);
    }
    else{
        throw new Error ('db is empty');
    }
}

let update = (key,newValue)=>{
    if(typeof key!=='string'){
        throw new Error("key is not a string");
    }
    else if(!db.hasOwnProperty(key)){
        throw new Error("key does not exists");
    }
    else{
        db[key]=newValue;
    }
}

let deleteKey = (key)=>{
    if(typeof key!=='string'){
        throw new Error("key is not a string");
    }
    else if(!db.hasOwnProperty(key)){
        throw new Error("key does not exists");
    }
    else{
        delete db[key];
    }
}

let clear = ()=>{
    for (let key in db) {
        delete db[key];
    }
}

let save = () =>{ 
    fs.writeFileSync('./data.json',JSON.stringify(db),'utf8');
}

let load = (callback) => {
    fs.readFile('./data.json','utf8',((err,data)=>{
        if(arr){
            return;
        }

        fb = JSON.parse(data);

        callback();
    }))
}

module.exports = {
    put:put,
    get:get,
    getAll:getAll,
    update:update,
    delete:deleteKey,
    clear:clear,
    save:save,
    load:load
}