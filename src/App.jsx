
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Children } from 'react';
import { AppLayout } from './components/appLayout';
import { Navbar } from './components/navbar'
import { Inbox } from './components/inbox';
import { Message } from './components/message';
import { SendMail } from './components/sendMail';

const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Inbox/>
      },
      {
        path:"/mail/:id",
        element:<Message/>
      }
    ]
  }
]);


function App() {

  return (
      <div className='bg-[#F6F8FC] w-screen h-screen overflow-hidden'>
        <Navbar/>
        <RouterProvider router={router}/>
        <div className='absolute w-[30%] bottom-0 right-20 z-10'>
          <SendMail/>
        </div>
        
      </div>
  )
}

export default App
