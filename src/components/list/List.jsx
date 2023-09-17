// local imports
import Item from '../item/Item';

const List = (props) => {
    const { list, setList } = props;

    return (
        <div className='md:w-[65%]'>
            {list.length > 0 ? list.map((task, i) => (
                <Item
                    key={i}
                    task={task}
                    list={list}
                    setList={setList}
                />
            )) : <div>No tasks on the list</div>}
        </div>
    )
}

export default List;