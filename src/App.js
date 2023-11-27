
import axios from 'axios';
import {useEffect,useState} from 'react'
function App() {


  const [userData,setUserData] = useState()


  useEffect(()=>{


  const fetchUsers = async()=>{
    const res =  await axios.get('https://jsonplaceholder.typicode.com/users')
    const Data = res.data
    setUserData(Data)
  }


    fetchUsers();
    console.log(userData)

  },[])

  
  return (
    <div className="App">

    {userData?.map((item,key)=>{
      return(
        <>
          <h1>{item.username}</h1>
          <p>
            {item.phone}
          </p>
          <p>{item.company.name}</p>
        </>
      )
    })}
     
    </div>
  );
}

export default App;
