import React from 'react';
import friendlist from './friendlist.json';
import Friend from './Friend';

const FriendList = () => {

  let mappedFriends = friendlist.map((friend) => {
    return <Friend key={Math.random() * 1000} name={friend.name} age={friend.age} pets={friend.pets} />
  })

  return (
    <div>
      {mappedFriends}
    </div>
  )
}

export default FriendList;