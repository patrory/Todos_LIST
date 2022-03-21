import { useState , useEffect} from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs ,addDoc ,updateDoc,doc,deleteDoc} from "firebase/firestore";
import { async } from '@firebase/util';
import FirebaseAuth from './FirebaseAuth';

function App() {
  
  const createUser = async ()=>{
    await addDoc(usersCollectionRef,{name:newName,age:Number(newAge)});
  }
  const[newName ,setNewName]= useState("");
  const[newAge,setNewAge]=useState(0);
  const [users ,setUsers] = useState([]);
  const usersCollectionRef = collection(db,'users')

  const updateUser = async(id ,age)=>{
    const userDoc = doc(db,"users",id);
    const newFields = {age: age+1};
    await updateDoc(userDoc ,newFields);
  }
  const userDelete = async (id)=>{
    const userDoc = doc(db,"users",id);
    await deleteDoc(userDoc);
  }
  useEffect( ()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id}) ));
      console.log(data);
    }
    getUsers()
  } )
  return (
    <div className="App">
      <input type="text" placeholder='Name' onChange={(event)=>{setNewName(event.target.value)}} />
      <input type="number" placeholder='Age' onChange={(event)=>{setNewAge(event.target.value)}} />
      <button onClick={createUser}>Create User</button>
      {
        users.map( (user)=>{ return (
          <div>
            <h1> Name : {user.name} </h1>
            <h1> Age : {user.age} </h1>
            <button onClick={()=>{updateUser(user.id,user.age)}}>Increase Age</button>
            <button onClick={ ()=>userDelete(user.id)}>Delete User</button>
            </div>
        )  })
      }
      {/* <FirebaseAuth/> */}
      <div>
      <FirebaseAuth/>
      </div>
    </div>
  );
}

export default App;
