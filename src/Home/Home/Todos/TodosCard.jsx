

const TodosCard = ({todo}) => {
    return (
        <div className="card w-96 bg-purple-600 text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{todo.title}</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary">
        {todo.completed===false ?'Finish':'Not Finish'
        
        }
        
        </button>
      
    </div>
  </div>
</div>
    );
};

export default TodosCard;