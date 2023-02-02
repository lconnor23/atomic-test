import {useState} from 'react'

export default function Form() {
    const [username, setName] = useState('');
    const [team, setTeam] = useState('red');
    const [isPending, setIsPending] = useState('false')

    const handleSubmit = (e) => {
        e.preventDefault();
        const athletes = {username, team}
        console.log(athletes)
        setIsPending(true)

        fetch('https://paper-dragonfly.ue.r.appspot.com/athlete', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(username)
        }).then(() => {
            console.log('athlete added')
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
                    value = {username}
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

