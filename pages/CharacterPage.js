class CharacterPage extends React.Component{
constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
}

handleChange(){
    this.props.clear();
}

 render() {
     return(
    <div className="content">
    <h2 className="name">{this.props.name}</h2>
    <img className="img" src={this.props.img} alt={this.props.name}/>
    <p className="description">{this.props.description} <br/> Data provided by Marvel. © 2014 Marvel</p>
    <button className="clearButton" onClick={this.handleChange} autoFocus={true}>New Search</button>
    <style jsx>{`
        .img {
            height: 300px;
            width: 300px;
            border-radius: 50%;
        }

        .content {
            text-align: center;
        }

        .name {
            margin-top: 20px;
            font-size: 48px;
            text-shadow: 2px 2px 2px red;
            margin-bottom: 0;
        }
        
        .description {
            max-width: 60%;
            margin-top: 1em;
            margin-bottom: 1em;
        }

        .clearButton {
            min-width: 10em;
            min-height: 2em;
            font-size: 2em;
            border-radius: 2em;
            font-weight: 700;
            background: red;
            text-shadow: 2px 2px 2px black;
        }

        .clearButton:focus{
            border: none;
            outline: none;
            z-position: 0;
        }

    `}</style>
    </div>
    )
 }  
}
export default CharacterPage;