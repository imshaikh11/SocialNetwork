import React from 'react'

function Profile() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "0px auto"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "18px",
        borderBottom: "1px solid grey"
      }}>
        <div>
          <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1654783081263-3c35d84445e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='profile pic' />
        </div>
        <div>
          <h4>Ismail Shaikh</h4>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "110%"
          }}>
            <h5>9 Posts</h5>
            <h5>500 Followers</h5>
            <h5>342 Following</h5>
          </div>
        </div>
      </div>
      <div className='gallary'>
        <img className='item'
          src="https://images.unsplash.com/photo-1586525373870-40a664be7821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

        <img className='item'
          src="https://images.unsplash.com/photo-1654868739497-ee031a3d7088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

        <img className='item'
          src="https://images.unsplash.com/photo-1654920139911-b529a68903c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

        <img className='item'
          src="https://images.unsplash.com/photo-1654775745367-ad010fd1aea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

        <img className='item'
          src="https://images.unsplash.com/photo-1654970209837-c5f100294796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

        <img className='item'
          src="https://images.unsplash.com/photo-1649133816831-de3d91d25288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

        <img className='item'
          src="https://images.unsplash.com/photo-1602974507724-18436ae0bca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

        <img className='item'
          src="https://images.unsplash.com/photo-1653050728715-7f1958ab701a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

        <img className='item'
          src="https://images.unsplash.com/photo-1654455103120-e33ac58ab56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='gallary pic' />

      </div>
    </div>
  )
}

export default Profile