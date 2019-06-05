import React from 'react';
import fetch from 'isomorphic-unfetch';
const md5 = require('js-md5');

class Character extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.getInitialProps =  this.getInitialProps.bind(this);

    }

    getInitialProps = async function(){
        const publickey = "81c6ebd34a68f8a15e0f05333f23d01e";
        const privatekey = "598a13c5054a75f151f34eb5923337659f0f9444"
        let query = "/v1/public/characters"
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
            console.log(data);
    }

    render(){
        return (
            <div>
                <button onClick={this.getInitialProps()}></button>
            </div>
        )
    }

}

export default Character;
