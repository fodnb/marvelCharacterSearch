import fetch from 'isomorphic-unfetch';
const md5 = require('js-md5');

export default  async function getCharacter(name){
const publickey = "81c6ebd34a68f8a15e0f05333f23d01e";
const privatekey = "598a13c5054a75f151f34eb5923337659f0f9444"
// let query = "/v1/public/characters"
let timestamp = Date.now();
md5(timestamp + privatekey + publickey);

var hash = md5.create();
hash.update(timestamp + privatekey + publickey);
hash.hex();
let limit = 100;
let hero = name;
let url = "http://gateway.marvel.com/v1/public/characters?ts=" + timestamp + "&apikey=" + publickey + "&hash=" + hash + "&limit=" + limit + "&nameStartsWith=" + hero;
let res = await fetch(url);
let data = await res.json();
console.log(data.data.results);
let myHero = {
    name: data.data.results[0].name,
    img: `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`,
    description: data.data.results[0].description
};

    return myHero;

};