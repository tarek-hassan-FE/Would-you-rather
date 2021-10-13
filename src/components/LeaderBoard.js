import React from 'react'
import ScoreCard from './ScoreCard'
import { useSelector } from 'react-redux'

export default function LeaderBoard() {
    let users = useSelector(state => state.users)
    users = Object.keys(users).map(userID => {
        return [
            Object.keys(users[userID].answers).length + users[userID].questions.length , 
            users[userID].id
        ]
    })
    users = users.sort((a , b) => (a[0] - b[0]) * -1 )
    
    return (
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
    )
}
