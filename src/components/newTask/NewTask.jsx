import { useState } from 'react';

const Searchbar = (props) => {
    const { list, setList } = props;

    const [task, setTask] = useState('');

    return (
        <div className="flex flex-row mb-4">
            <input
                type="text"
                className="
                    placeholder:text-black border border-slate-300 rounded-md px-4 py-1 
                    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    w-full
                "
                value={task}
                placeholder="Landing Page Development"
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                className="bg-sky-500 hover:bg-sky-700 py-1 px-5 ms-4 rounded uppercase text-white"
                onClick={() => {
                    setList([...list, task]);
                    setTask('');
                }}
            >
                Add
            </button>
        </div>
    )
}

export default Searchbar