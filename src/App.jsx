import { useState } from 'react'
import './App.css'
import Friend from './components/Friend'
import ShareExpenseForm from './components/ShareExpenseForm'
import AddFriendForm from './components/AddFriendForm'

function App() {
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: 'Sarah',
      imageUrl: 'https://i.pravatar.cc/400?img=1',
      billValue: 0,
      yourExpense: 0,
      friendExpense: 0,
      paidBy: 'none'
    },
    {
      id: 2,
      name: 'Anthony',
      imageUrl: 'https://i.pravatar.cc/400?img=2',
      billValue: 0,
      yourExpense: 0,
      friendExpense: 0,
      paidBy: 'none'
    }
  ])
  const [showAddFriendForm, setShowAddFriendForm] = useState(false)
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  const [friendExpenseFormId, setFriendExpenseFormId] = useState(null)
  // ! add new friend
  const addFriendHandler = () => {
    setShowAddFriendForm(!showAddFriendForm)
  }
  const addNewFriend = (friend) => {
    setFriends([...friends, {
      id: friends.length + 1,
      name: friend.name,
      imageUrl: friend.imageUrl,
      billValue: 0,
      yourExpense: 0,
      friendExpense: 0,
      paidBy: 'none'
    }])
    setShowAddFriendForm(false)
  }
  const friendSelectHandler = (id) => {
    setFriendExpenseFormId(id)
    setShowExpenseForm(true)
  }
  const friendCancelHandler = () => {
    setShowExpenseForm(false)
    setFriendExpenseFormId(null)
  }
  const addBillHandler = (id, billValue, yourAmount, thierAmount, paidBy) => {
    const friendArrId = friends.findIndex(friend => friend.id === id)
    const newFriends = [...friends]
    newFriends[friendArrId].billValue = Number(billValue)
    newFriends[friendArrId].yourExpense = Number(yourAmount)
    newFriends[friendArrId].friendExpense = Number(thierAmount)
    newFriends[friendArrId].paidBy = paidBy
    console.log(newFriends)
    setFriends(newFriends)
  }
  const clearBillHandler = () => {
    const friendArrId = friends.findIndex(friend => friend.id === friendExpenseFormId)
    const newFriends = [...friends]
    newFriends[friendArrId].billValue = 0
    newFriends[friendArrId].yourExpense = 0
    newFriends[friendArrId].friendExpense = 0
    newFriends[friendArrId].paidBy = 'none'
    setFriends(newFriends)
  }
  return (
    <div className='main'>
      <div className="friends">
        {friends.map((friend) =>
          <Friend key={friend.id} friendCancelHandler={friendCancelHandler} clearBillHandler={clearBillHandler} friendSelectHandler={friendSelectHandler} friend={friend} friendExpenseFormId={friendExpenseFormId} />
        )}
        {!showAddFriendForm && <button onClick={addFriendHandler}>Add Friend</button>}
        {showAddFriendForm && <AddFriendForm cancelHandler={addFriendHandler} addNewFriend={addNewFriend} />}
      </div>
      <div className="main_second">
        {showExpenseForm && <ShareExpenseForm addBillHandler={addBillHandler} friends={friends} friendId={friendExpenseFormId} />}
      </div>
    </div>
  )
}

export default App
