import React from 'react'

function Friend({ friend, friendExpenseFormId, friendSelectHandler, friendCancelHandler, clearBillHandler }) {
    const onSelectHandler = () => {
        friendSelectHandler(friend.id)
    }
    const onCancelHandler = () => {
        friendCancelHandler(friend.id)
    }
    return (
        <div className='friend'>
            <div className="friend_first">
                <img src={`${friend.imageUrl}`} alt="" />
                <div className="friend_inner">
                    <h3>{friend.name}</h3>
                    {friend.paidBy === 'none' && <p className='none'>You are even with {friend.name}</p>}
                    {friend.paidBy === 'you' && <p className='active_green'>{friend.name} is paying you {friend.friendExpense}₹</p>}
                    {friend.paidBy === 'them' && <p className='active_red'>You are paying {friend.name} {friend.yourExpense}₹</p>}
                </div>
            </div>
            <div className="friend_second">
                {friend.id !== friendExpenseFormId && <button className='btn_select' onClick={onSelectHandler}>Select</button>}
                {friend.id === friendExpenseFormId && <button className='btn_select' onClick={onCancelHandler}>Cancel</button>}
                <button className='btn_settle' onClick={() => {
                    clearBillHandler()
                }}>Settle</button>
            </div>
        </div>
    )
}

export default Friend