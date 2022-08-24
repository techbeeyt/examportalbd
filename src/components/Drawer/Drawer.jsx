import { Link } from "react-router-dom"

const Drawer = () => {
  var isLogged = true;
  return (
    <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {
              isLogged ? (
                <li>
                  <Link to='/my-preperation'>My Dashboard</Link>
                </li>
              ) : null
            }
            <li>
              <Link to='/contests'>Live Contests</Link>
            </li>
            <li>
              <Link to='/live-exams'>Live Exams</Link>
            </li>
            <li>
              <Link to='/my-preperation'>Exam Schedule</Link>
            </li>
            <li>
              <Link to='/my-preperation'>Settings</Link>
            </li>
            <li>
              <Link to='/my-preperation'>Help</Link>
            </li>
          {
            isLogged ? null : (
              <div class="btn-group mt-32 px-4">
                <button class="btn">Login</button>
                <button class="btn btn-active">Registraion</button>
              </div>
            )
          }
        </ul>
    </div>
  )
}

export default Drawer