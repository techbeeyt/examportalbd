import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineEye, AiOutlineUser, AiOutlineClockCircle, AiOutlineComment } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addHeart } from '../../store/BlogPostState';

const BlogFeed = ({id, title, body, heart, comment, author}) => {
  const dispatch = useDispatch();
  const entry = '11231123';
  return (
    <div className='flex flex-col'>
      <div className='mb-4'>
        <Link className='text-xl font-semibold text-sky-600' to={`/blogs/${id}`}>{title}</Link>
        <div className='flex gap-4'>
          <div>by <Link to={`/users/Admin1`} className="text-gray-600 font-semibold">{author}</Link></div>
          <span className='text-gray-500'>45 hours ago</span>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='bg-slate-500 self-stretch w-1 rounded-full mr-2 flex-shrink-0'></div>
        <p>
          {body}
        </p>
      </div>
      <div className='bg-base-200 px-4 py-2 rounded-md mt-3 mb-4 shadow-sm border border-base-300'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex justify-center items-center gap-1 cursor-pointer' onClick={() => dispatch(addHeart(id))}>
              <AiOutlineHeart size={20} />
              <span>{heart}</span>
            </div>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineEye size={20} /> 
              <span>344</span>
            </div>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineUser size={20} /> <Link to="/users/Admin1" className='text-gray-500'>{author}</Link>
            </div>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineComment size={20} /> <Link className='text-gray-500' to={`/blogs/${id}#comments`}>{`${comment} comments`}</Link>
            </div>
            <div className='flex justify-center items-center gap-1'>
              <AiOutlineClockCircle size={20} /> <span className='text-gray-400'>45 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogFeed