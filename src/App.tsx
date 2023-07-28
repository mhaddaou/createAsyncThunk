import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './useTypedSelector';
import { getPosts } from './postSlice';
import { RooteState } from './store';
import { Post } from './postSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  const {data, error, loading} = useAppSelector ((state : RooteState) => state)
  
  return (
    <div className="App">
      {loading ? (
        <div>
          this page is loading
        </div>
      ):
      <div>
        {data.map((dat : Post) =>{
          return (
            <div>
              {dat.title}
            </div>
          )
        })}
      </div>
      }
    </div>
  );
}

export default App;
