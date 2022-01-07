import React, {useState, useEffect} from "react";

import {AiOutlineDelete} from "react-icons/ai";
import {Button, Card} from "react-bootstrap";
import HeadBar from "./HeadBar";


const BlogCard = () => {



   function deleteData(id) {
   fetch(`http://localhost:3300/task/${id}`,{
     method: 'DELETE'
    })
   .then(response=> response.json())
   .then(response=> console.log(response))
   .catch(err => console.log(err))
   console.log(id);
 }

 

  let [alltasks, setalltasks] = useState([]);

    useEffect(() => {


        async function fetchData() { 
        await fetch("http://localhost:3300/alltask")
        .then(response=> response.json())
        .then(data => setalltasks(data.rows))

        }
        fetchData();

        

    },[alltasks])

    

    
  
   
    

let taskCount = alltasks.length;
console.log(taskCount);
    return (
        <div style={{position:"absolute"}} >

 
        <HeadBar taskCount={taskCount} />


          {alltasks.map(({id,tasks,created_on,description})=> (
          <>
          
          <div style={{padding:"10px"}}>

          <Card
        
    bg="dark"
    text='light'
    style={{ width: '18rem' }}
    className="mb-2">
<Card.Header>posted on {created_on}</Card.Header>
    <Card.Body>
      <Card.Title>{tasks}</Card.Title>
      <Card.Text>
      {description}
      </Card.Text>
    </Card.Body>
    <Button onClick={ () => {deleteData(id)}}> <AiOutlineDelete style={{height: "30px", width:"30px"}}/></Button>


    </Card>
    </div>


          
           
                      
          
          
        
         
          
        
       
       </>
          
          ))}
        </div>
    );
}

export default BlogCard;