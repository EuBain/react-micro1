import { useDraggable } from "@dnd-kit/core";

const Drag = (props:{ children: React.ReactNode,id:string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const styles = {
    width: '100px',
    height: '100px',
    border: '1px solid #000',
    boxSizing: 'border-box' as const,
    background: '#fff',
    lineHeight: '100px',
    textAlign: 'center' as const,
    listStyle: 'none',
    userSelect: 'none' as const,
  }
  const style = transform
    ? { ...styles,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : styles;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}

export default Drag