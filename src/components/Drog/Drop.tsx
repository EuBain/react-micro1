import { useDroppable } from "@dnd-kit/core"

const Drop = (props: { children?: React.ReactNode, id: string ,color?: string}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '15px',
    justifyContent: 'center',
    width: '400px',
    height: '400px',
    margin: '0 auto',
    background: props.color ?? 'green',
    alignContent:'center'
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default Drop