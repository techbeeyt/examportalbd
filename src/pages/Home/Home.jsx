import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const AppState = useSelector(store => store.AppState);
  const AuthState = useSelector( store => store.AuthState);
  return (
    <div className='grid grid-cols-12 mx-40'>
      <div className='col-span-8 bg-base-100 pt-10 px-4'>
        <div className='flex flex-col gap-4'>
          {/* Blog and News Feed */}
          <div className='flex flex-col'>
            <div className='mb-4'>
              <h1 className='text-xl font-semibold text-sky-600'>HSC Exam batch result has been published</h1>
              <div className='flex gap-4'>
                <span>by Admin1</span>
                <span>45 hours ago</span>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className='bg-slate-500 self-stretch w-1 rounded-full mr-2 flex-shrink-0'></div>
              <p>
                Result has been published but there is a problem man. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus corrupti, ducimus doloribus, nihil soluta iste sapiente aut maiores sint autem delectus recusandae cum quas. Earum optio nemo pariatur rem.
              </p>
            </div>
            <div className='bg-base-200 px-4 py-2 rounded-md mt-3 mb-4 shadow-sm'>
              <div className='flex justify-between items-center'>
                <div>
                  12123 views +123 votes
                </div>
                <div>
                  Admin1  45 hours ago  23 comments
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='mb-4'>
              <h1 className='text-xl font-semibold text-base-content'>HSC Exam batch result has been published</h1>
              <div className='flex gap-4'>
                <span>by Admin1</span>
                <span>45 hours ago</span>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className='bg-slate-500 self-stretch w-1 rounded-full mr-2 flex-shrink-0'></div>
              <p>
                Result has been published but there is a problem man. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus corrupti, ducimus doloribus, nihil soluta iste sapiente aut maiores sint autem delectus recusandae cum quas. Earum optio nemo pariatur rem.
              </p>
            </div>
            <div className='p-2 rounded-md border border-gray-500 mt-3 mb-4'>
              <div className='flex justify-between items-center'>
                <div>
                  12123 views +123 votes
                </div>
                <div>
                  Admin1  45 hours ago  23 comments
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='mb-4'>
              <h1 className='text-xl font-semibold text-base-content'>HSC Exam batch result has been published</h1>
              <div className='flex gap-4'>
                <span>by Admin1</span>
                <span>45 hours ago</span>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className='bg-slate-500 self-stretch w-1 rounded-full mr-2 flex-shrink-0'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium obcaecati dolores sequi, neque dolorem veniam reprehenderit hic excepturi ut temporibus ipsa architecto eveniet? Blanditiis dolores odit eos incidunt? Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate harum blanditiis consequuntur, natus culpa nemo doloremque corrupti voluptatibus illum nobis! Fugit laboriosam omnis eveniet voluptatem error eaque dignissimos qui? Result has been published but there is a problem man. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus corrupti, ducimus doloribus, nihil soluta iste sapiente aut maiores sint autem delectus recusandae cum quas. Earum optio nemo pariatur rem.
              </p>
            </div>
            <div className='p-2 rounded-md border border-gray-500 mt-3 mb-4'>
              <div className='flex justify-between items-center'>
                <div>
                  12123 views +123 votes
                </div>
                <div>
                  Admin1  45 hours ago  23 comments
                </div>
              </div>
            </div>
          </div>

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
      <div className='hidden col-span-0 lg:col-span-4 lg:flex flex-col justify-start items-center mt-10'>
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

        <div className='bg-base-200 m-4 w-5/6 rounded-lg flex flex-col shadow-md border border-base-300'>
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
            <h1 className='text-lg font-semibold pl-4 pl-4'>Live Exams</h1>
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