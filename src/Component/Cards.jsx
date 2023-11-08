// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {laptop_brand} from '../Objects'

function Cards() {
const [filterdata,setfilterdata] = useState(laptop_brand)

  function filter_brand(data)
  {
   var dataFilter = laptop_brand.filter((fdata)=>{
    if(data === 'all')
    {
      return fdata
    }
    else if(data === 'apple')
    {
      return fdata.Name === 'Apple'
    }
    else if(data === 'dell')
    {
      return fdata.Name === 'Dell'
    }
    else if(data === 'hp')
    {
      return fdata.Name === 'HP'
    }
    else if(data === 'lenovo')
    {
      return fdata.Name === 'Lenovo'
    }
    else
    {
      return fdata
    }
  })

   setfilterdata(dataFilter)
    console.log(filterdata)
  }


  return (
    <div>
    <ul className='navbar-items'>
      <li className="all" onClick={() => filter_brand('all')}>All</li>
      <li className="apple" onClick={() => filter_brand('apple')}>Apple</li>
      <li className="dell" onClick={() => filter_brand('dell')}> Dell</li>
      <li className="hp" onClick={() => filter_brand('hp')}>HP</li>
      <li className="lenovo" onClick={() => filter_brand('lenovo')}>Lenovo</li>
    </ul>

      <div className="specs-container">{
        filterdata.map((mydata)=>{
        return <>
        <div className="card">
          <img src={mydata.img} alt="" className='display-image' height='120px' width='100%'/>

          <div className='spec-items'>
            <ul className='spec-tittle'>
            <li className='list-border'>{mydata.Name}</li>
            <li className='list-border'>{mydata.Model} </li>
            </ul>
            <ul className='spec-content'>
            <li className='list-border'>Processor: <span className='spec-data'>{mydata.Processor}</span></li>
            <li className='list-border'>Generation: <span className='spec-data'>{mydata.Gen}</span></li>
            <li className='list-border'>RAM: <span className='spec-data'>{mydata.RAM}</span></li>
            <li className='list-border'>ROM: <span className='spec-data'>{mydata.SSD}</span></li>
            <li className='list-border'>Backup: <span className='spec-data'>{mydata.Backup}</span></li>
            </ul>
          </div>
          <button>Buy</button>

        </div> 
                
        </> 

        })
      }
    </div>
        
  </div>
)}

export default Cards
