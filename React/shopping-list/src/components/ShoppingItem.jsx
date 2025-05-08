// single shopping item component that is reused whenever new item is added and has option to remove already existing ones

function ShoppingItem({ item, onRemove }) 
{
    return (
      <li>
        {item} <button onClick={onRemove}>Remove</button>
      </li>
    );
}
  
export default ShoppingItem;