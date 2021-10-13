import React from 'react'
import ScoreCard from './ScoreCard'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Login from './Login'


export default function LeaderBoard() {
    let users = useSelector(state => state.users)
    const authedUser = useSelector(state => state.authedUser)
    const [isAuthed, setIsAuthed] = useState(authedUser.id && authedUser.id !== 'guest')
    users = Object.keys(users).map(userID => {
        return [
            Object.keys(users[userID].answers).length + users[userID].questions.length , 
            users[userID].id
        ]
    })
    users = users.sort((a , b) => (a[0] - b[0]) * -1 )
    
    const showLeaderboard = () => {
        setIsAuthed(true)
    }
    return (
        isAuthed === true ?
            <div className='leaderboard-container'>
            <div className= 'leaderboard-feed-container'>
                {
                    users.map(user => {
                        return <ScoreCard key={user[1]}
                            user={user}>
                        </ScoreCard>
                    })  
                }
            </div>
        </div> 
        : <Login showPage={() => showLeaderboard()} />
    )
}
