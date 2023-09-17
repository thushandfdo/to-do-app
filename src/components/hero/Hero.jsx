// local imports
import Searchbar from '../newTask/NewTask';

const Hero = (props) => {
    const { list, setList } = props;

    return (
        <div className='bg-hero-back bg-cover bg-bottom h-[30vh]'>
            <div className='flex flex-col text-center md:text-left justify-end h-full sm:mx-[10%]'>
                <h1 className='text-4xl font-semibold text-white md:text-black mb-2'>
                    My To Do List
                </h1>
                <p className='text-xl mb-5 text-white'>
                    You have {list.length ?? 0} tasks on the list
                </p>
                <div className='hidden md:block w-[65%]'>
                    <Searchbar list={list} setList={setList} />
                </div>
            </div>
        </div>
    )
}

export default Hero