import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor'
            },
            {
                name: 'Mac',
                job: 'Bouncer'
            },
            {
                name: 'Dee',
                job: 'Aspiring actress'
            },
            {
                name: 'Dennis',
                job: 'Bartender'
            },
            {
                name: 'Look at this',
                job: 'I\'m a const!'
            }
        ]
    }

    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App
