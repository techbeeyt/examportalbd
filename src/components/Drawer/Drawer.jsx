import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const Drawer = () => {
  const AppState = useSelector(store => store.AppState);
  const AuthState = useSelector(store => store.AuthState);

  return (
    <div class="drawer-side" data-theme={AppState.theme}>
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link class="normal-case text-xl font-semibold" to="/">OnlineExam</Link>
            </li>
            {
              AuthState.user ? (
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
              <Link to='/exam-schedule'>Exam Schedule</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
            </li>
          {
            AuthState.user ? null : (
              <div class="btn-group mt-32 px-4">
                <Link class="btn" to="/login">Login</Link>
                <Link class="btn btn-active" to="/register">Registraion</Link>
              </div>
            )
          }
        </ul>
    </div>
  )
}

export default Drawer