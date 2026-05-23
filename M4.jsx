import {BrowserRouter as Router,Routes,Route,Link}  from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nopage from './Nopage'

function M4(){
     return(
        <>
         <Router>
            <div className='main-route'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                     <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                 <Route path='About' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<Nopage/>}/>
            </Routes>
         </Router>
        </>
     )
}
export default M4