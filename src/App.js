import React, { useEffect, useState } from 'react';
import './App.css';
import { AiOutlineDoubleLeft } from 'react-icons/ai'
//url to get data from
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  //fetch data
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setData(data);
    setLoading(false);

  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(data);
  //check if page is loading
  if (loading) {
    return (
      <section className="section loading">
        Loading...
      </section>
    )
  }


  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((item) => {
            return <button key={item.id} className="job-btn">{item.company}</button>
          })}
        </div>
        <article className="job-info">
          <h3>dev</h3>
          <h4>tommy</h4>
          <p className="job-date">2015-2016</p>
          <div className="job-desc">
            <AiOutlineDoubleLeft />
            <p>asdasdasdadadadadadasda</p>
          </div>
        </article>
      </div>
      <button type="button" className="btn">more info</button>

    </section>
  );
}

export default App;
