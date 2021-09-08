import React, { useEffect, useState } from 'react';
import './App.css';

import Info from './Info';
//url to get data from
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //storing item which we clicked in tab button here
  const [singleItem, setSingleItem] = useState({});

  //fetch data
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    //set data, set single item, and set loading in false
    setData(data);
    //set default item to show on load
    setSingleItem(data[0])
    setLoading(false);

  }
  useEffect(() => {
    fetchData()
  }, [])

  //find item by id of clicked tab
  const findById = (id) => {
    const item = data.filter(item => item.id === id);
    // !!!important to set this item with spread operator, else it will be an array since we returning array from filter method
    // so we need to spread it to return 1 object item
    setSingleItem(...item);

  }


  //check if page is loading
  if (loading) {
    return (
      <section className="section loading">
        Loading...
      </section>
    )
  }

  //destructure our singleItem for easier access
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((item) => {
            //button default class name
            let clsName = 'job-btn';
            //check if our item id equals to id of single shown item in state, then we adding active class to this button
            if (item.id === singleItem.id) {
              clsName += ' active-btn'
            }
            return <button onClick={() => findById(item.id)} key={item.id} className={clsName}>{item.company}</button>
          })}
        </div>
        <Info itemInfo={singleItem} />
      </div>
      <button type="button" className="btn">more info</button>

    </section>
  );
}

export default App;
