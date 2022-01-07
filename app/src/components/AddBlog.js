import React from 'react';
import { useState , useEffect} from 'react';
import { Button, Modal, InputGroup, FormControl} from "react-bootstrap";
import plus from '../img/plus.png';

const AddBlog = () => {

    function postData () {
      
      fetch("http://localhost:3300/tasks",{
       method: 'POST',
       headers: {
         'Content-Type' : 'application/json'
       },
       body: JSON.stringify({
         task : inputtask,
         desc : desc
       })
     })
     .then(response=> response.json())
     .then(response=> console.log(response))
     .catch(err => console.log(err))
   }

  
  
    const [show, setShow] = useState(false);
    const [inputtask, setTask] = useState();
    const [desc, setDesc] = useState();
    console.log(inputtask);
    console.log(desc);
    const handleClose = () =>
    {
      setShow(false);
    } 
    const handleShow = () => setShow(true);
 
  function multi() {
  handleClose();
  postData();
  
}


  
  


    
    
  

  return(


    <>
    <div style={{position: "absolute"}}>
<img src={plus} onClick={handleShow} style={{position:"absolute", top:"505px", left: "1170px" , height: "50px", width: "50px"}} />
        
       
        </div>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>   <InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"  onChange={e => setTask(e.target.value)} />
  </InputGroup>   </Modal.Title>
          </Modal.Header>
          <Modal.Body> <InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">Body</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={e => setDesc(e.target.value)} />
  </InputGroup>  </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={multi}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
     </>
  )


  
  
};



export default AddBlog;
