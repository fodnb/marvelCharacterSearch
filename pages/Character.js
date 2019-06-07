import React from 'react';
import fetch from 'isomorphic-unfetch';
import md5 from'js-md5';
import CharacterPage from './CharacterPage';

const publickey = "81c6ebd34a68f8a15e0f05333f23d01e";
const privatekey = "598a13c5054a75f151f34eb5923337659f0f9444"
let timestamp = Date.now();
let limit = 100;

md5(timestamp + privatekey + publickey);
var hash = md5.create();
hash.update(timestamp + privatekey + publickey);
hash.hex();




class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myHero: null,
            value: '',
            error: ''
        }
        this.getInitialProps = this.getInitialProps.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    getInitialProps = async function () {
        let hero = this.state.value;
        let url = "http://gateway.marvel.com/v1/public/characters?ts=" + timestamp + "&apikey=" + publickey + "&hash=" + hash + "&limit=" + limit + "&nameStartsWith=" + hero;
        let res = await fetch(url);
        let data = await res.json();


        console.log(data.data.results);
        if(data.data.count != 0){
        let myHero = {
            name: data.data.results[0].name,
            img: `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`,
            description: data.data.results[0].description
        }
        this.setState({ myHero, error: "" });
        console.log(data.data.results[0].name);
        } else {
            this.setState({error: "No results found in the Marvel Database.  Please try another Marvel Hero."})
        }
    }

    handleSubmit(e){
        console.log(this.state.value);
        this.getInitialProps();
        e.preventDefault();
        this.setState({value: ""});
    }

    handleChange(e){
        this.setState({value: e.target.value});
        console.log('handleChange');
    }



    render() {

        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="heroName" value={this.state.value} type="text" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
                {this.state.error ? <p>{this.state.error}</p> : ""}                
                {this.state.myHero ?
                    <CharacterPage
                        img={this.state.myHero.img}
                        name={this.state.myHero.name}
                        description={this.state.myHero.description}
                    /> : ""
                }
            </div>
        )
    }

}

export default Character;
