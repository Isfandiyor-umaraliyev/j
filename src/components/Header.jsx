import React from 'react'
import '../App.css'

function Header() {
  const [data, setData] = useState([]);
  fetchData()
    return (
        <div>
            <h2> Random User</h2>
            <div className='form'>
                <input type="text" placeholder='Search...' />

            </div>

            <div className='wrapper'>
                <button onClick={(() => {
                    window.location.reload()
                })}>Refresh</button>

                <button onClick={(() => {
                    setData([])
                })}>Clear</button>
            </div>
        </div>

    )
}

export default Header