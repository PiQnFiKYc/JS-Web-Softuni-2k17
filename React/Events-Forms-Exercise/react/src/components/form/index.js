import React, { Component } from 'react'

import PokemonField from './formFields/PokemonField'
import Input from './formFields/Input'

class Index extends Component {
    constructor(){
        super()

        this.state = {
            pokemonName:'',
            pokemonImg:'',
            pokemonInfo:'',
            data: {pokemonColection:[]}
        }
    }

    createPokemon(e){
        e.preventDefault()
        let payload = {
            pokemonName:this.state.pokemonName,
            pokomenImg: this.state.pokemonImg,
            pokemonInfo: this.state.pokemonInfo
        }
        this.createPokemonToServer(payload)
    }



    createPokemonToServer(payload){
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
            .then(res => {
              return res.json()
            })
            .then(data => {
              this.setState({data:data})
            })
    }

    componentDidMount(){
      fetch('http://localhost:5000/pokedex/pokedex')
        .then(data =>{
          return data.json()
        })
        .then(data=>{
          this.state.date = data.pokemonColection
          //this.setState({data:d.pokemonColection})
        })
    }

    render(){
        return(
          <div>
            <form onSubmit={this.createPokemon.bind(this)}>
            <fieldset className='App'>
              <div style={{ display: 'inline-grid' }}>
                <h2>Create Pokemon</h2>
                <Input
                  data='pokeName'
                  name='Pokemon Name'
                  func={e => {
                    this.setState({ pokemonName: e.target.value })
                  }}
                  valid
                />
      
                <Input
                  data='pokeImage'
                  name='Pokemon Image'
                  func={e => {
                    this.setState({ pokemonImg: e.target.value })
                  }}
                  valid
                />
      
                <Input
                  data='pokeBio'
                  name='Pokemon Info'
                  func={e => {
                    this.setState({ pokemonInfo: e.target.value })
                  }}
                  valid
                />
      
                <input
                  //style={({ "display": (validObj.validMail && validObj.validName && validObj.validPassword) === true ? '' : 'none' })}
                  type='submit'
                  value='Create Pokemon'
                />
              </div>
            </fieldset>
            </form>
            <div style={({display:'inline-block'})}>
              {
                this.state.data.pokemonColection.map((x,index)=>{
                  return <PokemonField key={index} data={x}/>
                })
              }
              </div>
          </div>
        )
    }
}

export default Index