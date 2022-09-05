import React from 'react'
import { useSelector } from 'react-redux';
import BlogFeed from '../../components/BlogFeed/BlogFeed';

const Home = () => {
  const AppState = useSelector(store => store.AppState);
  const AuthState = useSelector( store => store.AuthState);
  const PostState = useSelector( store => store.PostState);
  return (
    <div className='grid grid-cols-12 mx-4 md:mx-10 lg:mx-40'>
      <div className='col-span-12 lg:col-span-8 bg-base-100 pt-10 px-4'>
        <div className='flex flex-col gap-4'>
          {/* Blog and News Feed */}
          {
            PostState.posts.map(dt => <BlogFeed key={dt.id} id={dt.id} title={dt.title} body={dt.body} heart={dt.heart} comment={dt.comments} author={dt.author} />)
          }
          {/* Pagination */}
          <div class="btn-group mb-10">
            <button class="btn">1</button>
            <button class="btn">2</button>
            <button class="btn btn-disabled">...</button>
            <button class="btn">99</button>
            <button class="btn">100</button>
          </div>
        </div>
      </div>
      <div className='hidden col-span-0 md:flex md:col-span-4 lg:col-span-4 lg:flex flex-col justify-start items-center mt-10'>
        {/* Side bar contents here */}
        <div className='bg-base-200 border border-base-300 m-4 w-5/6 rounded-lg flex flex-col shadow-sm'>
          <div className='p-2 border-b border-base-300 flex justify-center items-center'>
            <h1 className='text-lg font-semibold'>Live Exams</h1>
          </div>
          <div className='flex flex-col justify-start items-center'>
            <span className='font-semibold text-sky-600'>Exam name</span>
            <span className='text-gray-500'>Time Remainning</span>
          </div>
        </div>

        <div className='bg-base-200 m-4 w-5/6 rounded-lg flex flex-col shadow-sm border border-base-300'>
          <div className='p-2 border-b border-base-300'>
            <h1 className='text-lg font-semibold pl-4'>Top Contributions</h1>
          </div>
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>32</td>
                </tr>
                <tr class="active">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>30</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='bg-base-200 m-4 w-5/6 rounded-lg flex flex-col shadow-md'>
          <div className='p-2 border-b border-base-300'>
            <h1 className='text-lg font-semibold pl-4'>Live Exams</h1>
          </div>
          <div className='flex flex-col justify-start items-center'>
            <span className='font-semibold text-sky-600'>Exam name</span>
            <span className='text-gray-500'>Time Remainning</span>
          </div>
        </div>

        <div className='bg-base-200 m-4 w-5/6 rounded-lg flex flex-col shadow-md'>
          <div className='p-2 border-b border-base-300'>
            <h1 className='text-lg font-semibold pl-4'>Live Exams</h1>
          </div>
          <div className='flex flex-col justify-start items-center'>
            <span className='font-semibold text-sky-600'>Exam name</span>
            <span className='text-gray-500'>Time Remainning</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home