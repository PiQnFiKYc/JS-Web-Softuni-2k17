
const fs = require('fs');
const db = require('./../config/dataBase')
const qs = require('querystring');
const url = require('url');
const formidable = require('formidable');
const shortid = require('shortid')

const viewAllPath = './views/viewAll.html';
const viewAddPath = './views/addMeme.html';
const viewGetDetails = './views/details.html'

let memeGenerator = (id,title,memeSrc,description,privacy,dateStamp)=>{
  return {
    id: id,
    title: title,
    memeSrc: memeSrc,
    description: description,
    privacy: privacy,
    dateStamp: Date.now()
  }

}

let defaultResponse = (res,data)=>{
  res.writeHead(200,{
    'content-type':'text/html'
  })
  res.write(data);
  res.end()
}

let viewAll = (req,res)=>{
  let memes = db.getDb();

  memes = memes.sort((a,b)=>{
    return b.dateStamp - a.dateStamp;
  }).filter((currentMeme)=>{
    return currentMeme.privacy ==='on';
  })

  fs.readFile(viewAllPath,'utf8',(err,data)=>{
    if(err){
      console.log(err);
      return;
    }
    let memeString = '';
    for(let meme of memes){
      memeString+=`<div class="meme">
      <a href="/getDetails?id=${meme.id}">
      <img class="memePoster" src="${meme.memeSrc}"/>          
      </div>`

    }

    data=data.toString().replace(`<div id="replaceMe">{{replaceMe}}</div>`,memeString)

   defaultResponse(res,data);
  })
};

let viewAddMeme = (req,res)=>{
  fs.readFile(viewAddPath,'utf8',(err,data)=>{
    if(err){
      console.log(err)
      return;
    }
    defaultResponse(res,data);
    
  })
};

let addMeme = (req,res)=>{

  let form = new formidable.IncomingForm();
  let fileName = shortid.generate()
  let dbLength =Math.ceil(db.getOb().length/10);
  let memePath = `./public/memeStorage/${dbLength}/${fileName}`
  

  form.on('error',(err)=>{
    console.log(err)
    return;
  }).on('fileBegin',(name,file)=>{
    fs.access(`./public/memeStorage/${dbLength}`,(err)=>{
      if(err){
        fs.mkdirSync(`./public/memeStorage/${dbLength}`)
      }
    })

    file.path=memePath;
  
  })
  form.parse(req, function(err, fields, files) {
    let id = shortid.generate();
    let createdMeme = memeGenerator(id,fields.memetitle,memePath,fields.status,fields.memeDescription)
  
    db.add(createdMeme);
    db.save();
  
  });
      
};

let getDetails = (req,res) =>{
  let memeId = qs.parse(url.parse(req.url).query).id;
  let targetedMeme = db.getDb().find((searched)=>{
    return searched.id===memeId;
  })

  fs.readFile(viewGetDetails,'utf8',(err,data)=>{
      if(err){
        console.log(err);
        return
      }
      let replace = 
      `<div class="content">
          <img src="${targetedMeme.memeSrc}" alt=""/>
          <h3>Title  ${targetedMeme.title}</h3>
          <p> ${targetedMeme.description}</p>
          <button><a href="${targetedMeme.posterSrc}">Download Meme</a></button>
          </div>`
      data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>',replace)
      defaultResponse(res,data);
  })
};

module.exports = (req, res) => {
  if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
    viewAll(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'GET') {
    viewAddMeme(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'POST') {
    addMeme(req, res)
  } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
    getDetails(req, res)
  } else {
    return true
  }
}
