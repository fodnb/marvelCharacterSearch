import '../styles/styles.css';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import md5 from 'js-md5';
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
        this.clearHero = this.clearHero.bind(this);
    }


    getInitialProps = async function () {
        let hero = this.state.value;
        let url = "https://gateway.marvel.com/v1/public/characters?ts=" + timestamp + "&apikey=" + publickey + "&hash=" + hash + "&limit=" + limit + "&nameStartsWith=" + hero;
        let res = await fetch(url);
        let data = await res.json();
        let er = false;
        if (data.code === 409 || data.data.total === 0) {
            er = true;
        };

        // console.log(data.data.results);
        console.log(data);
        // console.log(data.data.count)
        if (!er) {
            let myHero = {
                name: data.data.results[0].name,
                img: `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`,
                description: data.data.results[0].description
            }
            this.setState({ myHero, error: "" });
            console.log(data.data.results[0].name);
        } else {
            this.setState({ error: "No results found in the Marvel Database.  Please try another Marvel Hero." })
        }
    }

    handleSubmit(e) {
        console.log(this.state.value);
        this.getInitialProps();
        e.preventDefault();
        this.setState({ value: "" });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        console.log('handleChange');
    }

    clearHero() {
        console.log("clear")
        this.setState({ myHero: null });
    }


    render() {

        return (

            <div className="content">


                {this.state.myHero ?
                    <CharacterPage
                        img={this.state.myHero.img}
                        name={this.state.myHero.name}
                        description={this.state.myHero.description}
                        clear={this.clearHero}
                    />
                    :
                    <form onSubmit={this.handleSubmit}>
                        <input name="heroName" value={this.state.value} type="text" autocomplete="off" onChange={this.handleChange} autofocus="true"/>
                        
                        <input type="submit" />
                    </form>
                }
                {this.state.error ? <p className="error">{this.state.error}</p> : ""}
                <style jsx>{`
                    
                    form {
                        margin-top: 200px;
                        text-align: center;
                    }
                    input {
                        border-radius: 4px;
                        font-size: 24px;
                    }

                    input:first-child {
                    background: white;
                    margin-right: 10px;
                    color: black;   
                    text-align: left;
                    font-weight: 700;
                    }
                    .center {
                    text-align: center;
                    }

                    input:nth-child(2) {
                    width: 8em;
                    padding-top: 4px;
                    padding-bottom: 4px;
                    border: 2px solid red;
                    background: red;
                    color: white;
                    font-weight: 700;
                    }

                    input:focus{
                    border: none;
                    outline: none;
                    }
        

                    .error {
                        margin-top: 25px;
                        font-size: 24px;
                        color: red;
                        text-shadow: 2px 2px 2px maroon;
                        text-align: center; 
                  }


                `}</style>
            </div>
        )
    }

}

export default Character;
