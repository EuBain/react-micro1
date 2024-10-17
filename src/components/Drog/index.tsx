import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core"
import Drag from "./Drag"
import Drop from "./Drop"
import { useState } from "react";
const DragBox = () => {
  const [box1,setBox1] = useState(["1", "2", "3", "4", "5", "6", "7", "8","9"]);
  const [box2,setBox2] = useState([]);
  const [activeId, setActiveId] = useState(null);

  function handleDragStart(e ) {
    console.log(e)
    setActiveId(e.active.id);
  }

  function handleDragEnd(e) {
    console.log(e)
    setActiveId(null);
  }
  
    return (
      
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div u-flex style={{margin:'auto',position:'absolute',inset:0, width:'900px',height:400}}>
        <Drop id='1' color='pink'>
          {box1.map((id) => (
            <Drag key={id} id={id} >
              {id}
            </Drag>
          ))}
        </Drop>
        <Drop id='2'>
          {box2.map((id) => (
            <Drag key={id} id={id} >
              {id}
            </Drag>
          ))}
        </Drop>
        </div>
  
        {/* <DragOverlay>
          {activeId ? <div>Item {activeId}</div> : null}
        </DragOverlay> */}
    
      </DndContext>
  );
}

export default DragBox