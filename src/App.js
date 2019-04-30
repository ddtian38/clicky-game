import React, {Component} from 'react';
import Container from "./Components/Container/container"
import Header from "./Components/Header/header"
import Card from "./Components/Cards/Card"
import Footer from "./Components/Footer/footer"
import './App.css';
import characters from "./characters.json"


const shuffle = (characterArr) => {
  for (let i = characterArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = characterArr[i];
      characterArr[i] = characterArr[j];
      characterArr[j] = x;
  }
  return characterArr;
}


class App extends Component {

  state = {
    characters: characters,
    topScore: 0,
    currentScore: 0,
    clickedArray: []
  }

  clickHandler = (id) => {
    console.log(id)
    let clickedArray = [...this.state.clickedArray];
    let newTopScore = this.state.topScore;
    let newCurrentScore = this.state.currentScore;

    if(clickedArray.indexOf(id) === -1){
      clickedArray.push(id);
      newCurrentScore++;
    }
    
    else{
      clickedArray = []

      //Sets new top score if current score is greater
      if(newCurrentScore > newTopScore) {
      newTopScore = newCurrentScore;
      } 
      newCurrentScore = 0;

    }
    
    let characterArr = shuffle(this.state.characters)
    this.setState({
      characters: characterArr,
      currentScore: newCurrentScore,
      topScore: newTopScore,
      clickedArray: clickedArray
    })
      
  }

  render(){
    console.log(this.state.clickedArray)
    let characterCards = this.state.characters.map( character => {
      
      return <Card
      key = {character.id}
      img_src = {character.img_src}
      name = {character.name}
      clicked = {() => {this.clickHandler(character.id)}}
      />  
    });

    console.log(this.state.characters)
    return (
        <div>
          <Header
          topScore = {this.state.topScore}
          currentScore = {this.state.currentScore}/>
          <Container>
            
             {characterCards}
          </Container>
          <Footer/>
        </div>
         
    );

    
  }
 
}

export default App;
