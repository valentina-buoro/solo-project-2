import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Card(props){
    const URL = 'https://picsum.photos/id';

    const [ count, setCount] = useState(1)
    const [state, setState] = useState({
        namer: "Dev chuks",
        age: 100,
        location: 'Nigeria'
      })
    useEffect(()=>{
        axios.get(`${URL}/${count}/200/200`)
        .then(res=>{
            //console.log(res)
        }).catch(e=> console.log(e))
    }, [count])

    const randomNumber = ()=>{
        console.log('hello there')
        setCount(Math.floor(Math.random() * 10))

    }
    
    const nextImage = ()=>{
        setCount(prevCount=> prevCount + 1)
    }
    const prevImage = ()=>{
       if (count > 0){
        setCount(prevCount=> prevCount - 1)
       } 
    }

    return(
        <div>
            <section className='section'>
                <div className='sect'>
                    <div className='section-span'>
                        <img src ={`${URL}/${count}/200/200`} alt='loc'></img>
                        
                    </div>
                    
                    <button onClick={()=> prevImage()}> Previous Picture</button>
                    <button onClick={()=> randomNumber()}> Random Picture</button>
                    <button onClick={()=> nextImage()}> Next Picture</button>
                    
                </div>
                <input type={'text'} value={state.namer} onChange={(e) =>{
        setState({ ...state, namer: e.target.value});
        console.log(state)}} />
      React ⚛️ + Vite ⚡ + Replit 🌀
      <h1>{state?.age ?? 'No Age'}</h1>
            </section>
        </div>
    )
}