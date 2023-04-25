import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, SideBar } from '../../components';
import { supabase } from '../../supabase/client';
import './dashboard.css';

function Dashboard({ session }) {

  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  const getProfile = async () => {
    try {
      setLoading(true)
      const { user } = session

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2 col-xxl-2 my-2 mx-auto px-0 d-none d-lg-block">
          <SideBar username={username} url={avatar_url}/>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10 my-2 mx-auto px-0">
          <Navbar/>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;