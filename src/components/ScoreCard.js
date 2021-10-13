import React from 'react'
import { useSelector } from 'react-redux'
export default function ScoreCard(props) {
    const users = useSelector(state => state.users)
    let {user} = props
    user = users[user[1]]
    return (
        <div className='score-card'>
            <div className='score-card-avatar-container'>
                <img src={user.avatarURL} alt='avatar' />
            </div>
            <div className='score-card-user-info'>
                <h1>{user.name}</h1>
                <div className='score-card-user-info-stats'>
                    <p>Answered questions</p>
                    <p>{Object.keys(user.answers).length}</p>
                </div>
                <div className='score-card-user-info-stats'>
                    <p>Created questions</p>
                    <p>{user.questions.length}</p>
                </div>
            </div>
            <div className='score-card-user-score-container'>
                <div className='score-card-user-score-title'>
                    <p>Score</p>
                </div>
                <div className='score-card-user-score-body'>
                    <span>{Object.keys(user.answers).length+ user.questions.length}</span>
                </div>
            </div>
        </div>
    )
}
