import React, { useEffect, useState } from 'react'

function AddFriendForm(props) {
    const [imageUrl,setImageUrl]=useState('')
    const [friendName,setFriendName]=useState('')
    useEffect(()=>{
        setImageUrl(`https://i.pravatar.cc/400?img=${Math.floor(Math.random() * 70) + 1}`)
    },[])
    const onCancelHandler=()=>{
        props.cancelHandler();
    }
    const addNewFriendHandler=()=>{
        props.addNewFriend({
            name: friendName,
            imageUrl: imageUrl
        });
    }
  return (
    <div className='friend_form'>
        <div className="friend_input_1">
            <label htmlFor="friend_name">Friend Name</label>
            <input type="text" id="friend_name" placeholder="Name" onChange={(e)=>setFriendName(e.target.value)} value={friendName}/>
        </div>
        <div className="friend_input_1">
            <label htmlFor="image_url">Image URL</label>
            <input type="text" id="image_url" placeholder="URL" disabled value={imageUrl}/>
        </div>
        <div className="friend_input_btns">
            <button className='btn_add' onClick={addNewFriendHandler}>Add</button>
            <button className='btn_cancel' onClick={onCancelHandler}>Cancel</button>
        </div>
    </div>
  )
}

export default AddFriendForm