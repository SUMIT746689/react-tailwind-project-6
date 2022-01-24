import { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './App.css';

function App() {
  const [state, setstate] = useState([]);
  const [ids, setIds] = useState(1);

  useEffect(() => {
   const response =async()=>{
     await fetch('https://jsonplaceholder.typicode.com/comments')
     .then(response => response.json())
     .then(data =>{
       const filter4Item = data.slice(0,4);
       setstate(filter4Item)
     })
   }
    response();
  }, [])

  console.log(ids+1);

  return (
    <div className="App">
      <h1>Hi ... Bros</h1>
      <h1 className="duration-500 text-center text-4xl font-semibold text-gray-700"><span className='font-bold text-indigo-800 text-5xl text-center'>/</span>Reviews</h1>
      <div className="bg-gray-600 w-screen h-100 mt-10 flex justify-center align-middle">
        <div className="w-80 bg-red-400 h-80 m-10 shadow-md flex overflow-clip">
          {state.map((data)=>{
            const cssValue = ids=== data.id ? 'z-10 -translate-x-0 opacity-100' : 'z-0 opacity-0 ' ;
            
          return <div className={`${cssValue} bg-red-${data.id}00 w-80 h-80 absolute transform duration-500 `} key={data.id}>
            {data.id}
            {cssValue}
          </div>     
          })}  
        </div>
        <div className="absolute flex justify-around align-middle h-80 m-10">
          <AiOutlineLeft onClick={()=>setIds(ids <= 0 ? 3 : ids-1 )} className="m-auto relative -left-44 md:-left- p-2 text-5xl bg-red-400 rounded-md text-white hover:opacity-50 duration-100 shadow-md"/>
          <AiOutlineRight onClick={()=>setIds(ids >= 3 ? 0 : ids+1)} className="m-auto relative -right-44 p-2 text-5xl bg-red-400 rounded-md text-white hover:opacity-50 duration-100 shadow-md"/>
        </div>
      </div>
    </div>
  );
}

export default App;
