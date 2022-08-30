import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineEye, AiOutlineUser, AiOutlineClockCircle, AiOutlineComment } from 'react-icons/ai';
const BlogFeed = () => {
  const entry = '11231123';
  return (
    <div className='flex flex-col'>
      <div className='mb-4'>
        <Link className='text-xl font-semibold text-sky-600' to={`/blogs/${entry}`}>HSC Exam batch result has been published</Link>
        <div className='flex gap-4'>
          <div>by <Link to={`/users/Admin1`} className="text-gray-600 font-semibold">Admin1</Link></div>
          <span className='text-gray-500'>45 hours ago</span>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='bg-slate-500 self-stretch w-1 rounded-full mr-2 flex-shrink-0'></div>
        <p>
          Result has been published but there is a problem man. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus corrupti, ducimus doloribus, nihil soluta iste sapiente aut maiores sint autem delectus recusandae cum quas. Earum optio nemo pariatur rem.
        </p>
      </div>
      <div className='bg-base-200 px-4 py-2 rounded-md mt-3 mb-4 shadow-sm border border-base-300'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineHeart size={20} />
              <span>24</span>
            </div>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineEye size={20} /> 
              <span>344</span>
            </div>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineUser size={20} /> <span>Admin1</span>
            </div>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineClockCircle size={20} /> <span>45 hours ago</span>
            </div>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineComment size={20} /> <span>23 comments</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogFeed