import React from 'react'
import { useState } from 'react';


const Home = () => {
    const [editedItem, setEditedItem] = useState(place);
    const handleEdit = () => {
        // Update the item content in the parent component's state
        // setPlace(editedItem);
        // // Close the editing form
        // setCl(false);
      };
      
  return (
    <div>
       <form>
      <input
        type="text"
        id="id1"
        placeholder='enter'
      />
      <button type="button" onClick={handleEdit}>
        Continue
      </button>
    </form>
    </div>
  )
}

export default Home
