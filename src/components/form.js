import {useState} from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('red');
    const [isPending, setIsPending] = useState('false')

    const handleSubmit = (e) => {
        e.preventDefault();
        const player = {name, team}
        console.log(player)
        setIsPending(true)

        fetch('http://localhost:8000/players', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(player)
        }).then(() => {
            console.log('player added')
            setIsPending(false)
        })
    }
    return(
        <div className="form">
            <h2>Welcome, please log in</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type = 'text' 
                    required
                    value = {name}
                    onChange={(e) => setName(e.target.value)}>
                    
                </input>
                <label>Team</label>
                <select
                    value = {team}
                    onChange = {(e) => setTeam(e.target.value)}>
                    <option value ="red">red</option>
                    <option value ="blue">blue</option>
                    <option value ="green">green</option>
                    <option value ="purple">purple</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

