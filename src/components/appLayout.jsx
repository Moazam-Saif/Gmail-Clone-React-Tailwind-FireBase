
import { Sidebar } from './sidebar'
import { Outlet } from 'react-router-dom'


export const AppLayout=()=>{
    return (
            <div className='flex'>
              <Sidebar/>
              <Outlet/>
            </div>
    )
}