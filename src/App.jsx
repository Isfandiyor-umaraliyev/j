import React, { useState, useEffect } from 'react';
import './App.css'
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=9');
      const { results } = await res.json();
      setData(results);

    };
    fetchData();
  }, []);


  return <>


    <h2> Random User</h2>
  <div className='form'> 
  <input  type="text" placeholder='Search...' />

  </div>
     
    <div className='wrapper'>
      <button onClick={(() => {
        window.location.reload()
      })}>Refresh</button>

      <button onClick={(() => {
        setData(null)
      })}>Clear</button>
    </div>
    <ul className='user'>

      {data &&
        (data.map((item, index) => {
          const { gender, name, picture, location, dob, id } = item;
          return (

            <li className="user__item" key={index
            }>
              <button onClick={((e) => {
                if (e.target.classList[0] === "user__delete--btn") {
                  e.target.parentElement.remove();
                }

              })} id="delete__btn" className="user__delete--btn">
                <i className="fas fa-trash"></i>
              </button>
              <img className="user__img" alt="User photo" src={picture.large} width="100" height="100" />
              <div className="user__name">
                <span className="material-symbols-outlined">Name|</span>
                <span><b>{name.title} {name.first} {name.last}</b></span>
              </div>
              <div className="user__year">
                <span className="material-symbols-outlined">DOB</span>
                <span>-<b>{dob.age}</b> years old.</span>
              </div>
              <div className="user__location">
                <span className="material-symbols-outlined">Location|</span>
                <span><b>{location.city}, {location.country}</b></span>
              </div>
              <div className="user__gender">
                <span className="material-symbols-outlined">Gender|</span>
                <span><b>{gender}</b></span>
              </div>
            </li>


          )
        }))}
    </ul>


  </>
}
