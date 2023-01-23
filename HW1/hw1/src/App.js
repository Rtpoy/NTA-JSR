import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Modal from './components/Modal';

  function App() {
    const [showModalFirst, setShowModalFirst] = useState(false);
    const [showModalSecond, setShowModalSecond] = useState(false);
     const showModalHandler = () =>{
      setShowModalFirst(false);
      setShowModalSecond(false);
     }
    return(
      <div>
        <Button onClick={() => setShowModalFirst(true) }
           text="Open first modal" backColor="blue" />
        <Button onClick={() => setShowModalSecond(true)} text="Open second modal" backColor="red" />   
        {showModalFirst && <Modal header="Do you want delete this file?" 
        text='once you delete this file, it wont be possible to undo this action. Are you 
        sure you want to delete it?' closeModal={showModalHandler} closeButton={true} />}
        
        {showModalSecond && <Modal header="Small Joke" text='Заходить равлик в бар...' closeModal={showModalHandler} closeButton={false} />}

      </div>
    )
  }

export default App;
