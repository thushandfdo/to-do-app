import { useState } from 'react';

// local imports
import Hero from './components/hero/Hero';
import Searchbar from './components/newTask/NewTask';
import List from './components/list/List';

const App = () => {
    const [list, setList] = useState([]);

    return (
        <div className=''>
            <Hero list={list} setList={setList} />
            <div className='mx-[10%] my-5'>
                <div className='block md:hidden'>
                    <Searchbar list={list} setList={setList} />
                </div>
                <List list={list} setList={setList} />
            </div>
        </div>
    )
}

export default App
