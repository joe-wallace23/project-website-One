import React from 'react'; 
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Money from './components/Money';
import FooterSection from './components/FooterSection';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Account from './components/Account';





 function App() {
  return (
    <>
      {/* <Router>
     

     <Money/>
     <Switch>
     <Route  path="/"  component= {Home}/>
     </Switch>
    */}
    <Money/>
    <BrowserRouter> 
    <Routes>
            
              <Route index  element={<Home/>}/>
              <Route path="/home"  element={<Home/>}/>
            
              <Route path="/registration" element={<Registration/>}/>
        
          <Route path="/login" element={<Login/>}/>
        

        
        
      
        <Route path="/account" element={<Account/>}/>
      

    </Routes>
      </BrowserRouter> 
      <FooterSection/>

         {/* <BrowserRouter> */}
             {
                 /*
    //</BrowserRouter>             Then we define our <Routes>. An application can have multiple <Routes>.
    //             Our basic example only uses one.
    //             */
            }
           {/* <Route>
                 {
                     /*
    //                 <Route>s can be nested. The first <Route> has a path of / and renders the
    //                 Layout component.
    //                 */
                 }
                 {/* <Route path="/" > */}
                     {
                        /*
    //                     The Home component route does not have a path but has an index attribute.
    //                     That specifies this route as the default route for the parent route,
    //                     which is /.
    //                     */
                    }
                   {/* <Route index element={<Home/>}/> */}
                     {
                         /*
    //                     The nested <Route>s inherit and add to the parent route.
    //                     So the blogs path is combined with the parent and becomes /blogs.
    //                     */
                    }
                     {/* <Route path="blogs" element={<Blogs/>}/>
                     <Route path="contact" element={<Contact/>}/> */}
                     {
                        /*
    //                     Setting the path to * will act as a catch-all for any undefined URLs.
    //                     This is great for a 404 error page.
    //                     */
                  }
                     {/* <Route path="*" element={<NoPage/>}/> */}
                 {/* </Route> */}


{/* 

     <Router>
      <Money/>
      <MuchBgSection/>
       <Costsection/>
       <LongSection/>
       <FooterSection/>
     
       </Router> */}
      {/* <Switch>
        {/* <Route path='/' exact component = {Home}> */}

 
   
     
     
        {/* <Switch>
           <Route  exact path='/' component = {Home} />
        </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
