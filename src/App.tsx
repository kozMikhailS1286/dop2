import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button'

type ShowType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {
  const[show, setShow] = useState<ShowType[]>([])

  // useEffect( () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(json => setShow(json))
  // }, [])

  const useShowUP = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setShow(json))
  }

  const clean = () => {
    setShow([])
  }

  return (
    <div className="App">
      <Button name={"Show - me"} callBack={useShowUP}/>
      <Button name={"Clean - me"} callBack={clean}/>

      <ul>
        {show.map(el => {
          return (
            <li key={el.id}> 
              <span> {el.id} </span>
              <span> {el.title} </span>
              <span> {`${el.completed}`} </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;