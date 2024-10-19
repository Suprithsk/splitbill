import React, { useEffect, useState } from 'react'

function ShareExpenseForm({friends, friendId, addBillHandler}) {
    const friend=friends.find((friend)=>friend.id===friendId)
    const [billValue,setBillValue]=useState(0)
    const [yourExpense,setYourExpense]=useState(0)
    const [friendExpense,setFriendExpense]=useState(0)
    const [paidBy,setPaidBy]=useState('you')

    useEffect(()=>{
        if(friend.paidBy!=='none'){
            setBillValue(friend.billValue)
            setYourExpense(friend.yourExpense)
            setFriendExpense(friend.friendExpense)
            setPaidBy(friend.paidBy)
        }
    },[friendId])
    const submitHandler=()=>{
        if(billValue<=0 || yourExpense<=0 || friendExpense<=0) return
        console.log('called')
        addBillHandler(friend.id,billValue,yourExpense,friendExpense,paidBy)
        setBillValue(0)
        setFriendExpense(0)
        setYourExpense(0)
        setPaidBy('you')
    }
  return (
    <div className='expense_form'>
        <h2>Split a bill with {`${friend.name}`}</h2>
        <div className="expense_input_1">
            <label htmlFor="billValue">Bill Value</label>
            <input type="number" id="billValue" value={billValue} onChange={(e)=>setBillValue(e.target.value)}/>
        </div>
        <div className="expense_input_1">
            <label htmlFor="expenseValue1">Your expense</label>
            <input type="number" id="expenseValue1" value={yourExpense} onChange={(e)=>{
                setYourExpense(e.target.value)
                setFriendExpense(billValue-Number(e.target.value))
            }}/>
        </div>
        <div className="expense_input_1">
            <label htmlFor="expenseValue2">{`${friend.name}`}'s expense</label>
            <input disabled type="number" id="expenseValue2" value={friendExpense} />
        </div>
        <div className="expense_input_2">
            <label htmlFor="selectName">Who is paying the bill?</label>
            <select name="select" id="selectName" value={paidBy} onChange={(e)=>setPaidBy(e.target.value)}>
                <option value={`them`}>{friend.name}</option>
                <option value="you">You</option>
            </select>
        </div>
        <div className="btn_share_form">
            <button className='btn_submit' onClick={submitHandler}>Split bill</button>
        </div>
        
    </div>
  )
}

export default ShareExpenseForm