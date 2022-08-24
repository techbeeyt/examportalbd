import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar bg-base-100" data-theme="light">
        <div class="flex-none">
            <label for="my-drawer" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
        </div>
        <div class="flex-1">
            <Link class="btn btn-ghost normal-case text-xl" to="/">OnlineExam</Link>
        </div>
        <div class="flex justify-center items-center gap-2 lg:gap-4">
            <div>Dark Mode</div>
            <button class="btn btn-primary">Register</button>
        </div>
    </div>
  )
}

export default Navbar