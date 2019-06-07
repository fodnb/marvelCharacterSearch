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
    <p className="description">{this.props.description}</p>
    <button className="clearButton" onClick={this.handleChange} autofocus="true">New Search</button>
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
            margin-top: 0;
            font-size: 48px;
            text-shadow: 2px 2px 2px red;
            margin-bottom: 20px;
        }
        
        .description {
            max-width: 60%;
            margin-top: 2em;
            margin-bottom: 2em;
        }

        .clearButton {
            width: 10em;
            height: 2em;
            font-size: 2em;
            border-radius: 2em;
            font-weight: 700;
            background: red;
            text-shadow: 2px 2px 2px black;
        }

        .clearButton:focus{
            border: none;
            outline: none;
        }

    `}</style>
    </div>
    )
 }  
}
export default CharacterPage;