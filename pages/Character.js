import React from 'react';
import fetch from 'isomorphic-unfetch';
const md5 = require('js-md5');

class Character extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myHero: null
        }
        this.getInitialProps =  this.getInitialProps.bind(this);

    }


    getInitialProps = async function(){
        const publickey = "81c6ebd34a68f8a15e0f05333f23d01e";
        const privatekey = "598a13c5054a75f151f34eb5923337659f0f9444"
        // let query = "/v1/public/characters"
        let timestamp = Date.now();
        md5(timestamp + privatekey + publickey);
        
        var hash = md5.create();
        hash.update(timestamp + privatekey + publickey);
        hash.hex();
        let limit = 1;
        let hero = "Spider-man"
        let url = "http://gateway.marvel.com/v1/public/characters?ts=" + timestamp + "&apikey="+publickey+"&hash="+ hash + "&limit=" + limit + "&nameStartsWith="+ hero;
            let res = await fetch(url);
            let data = await res.json();
            let myHero = {
                name: data.data.results[0].name,
                img: `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`,
                description: data.data.results[0].description
            }
            

            this.setState({myHero});
            console.log(data.data.results[0].name);
    }

    render(){
        return (
            <div>
                <button onClick={()=>{this.getInitialProps()}}>Submit</button>
                <p>{this.state.myHero ? this.state.myHero.name : ""}</p>
            </div>
        )
    }

}

export default Character;
