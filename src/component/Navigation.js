import {HashRouter as Router } from "react-router-dom"

const Navigation=()=>{
    return(
        <Router>
         <Switch>
           <Route path="/accueil" exact component={()=>  <Accueil/>} />
           <Route path="/presentation" exact component={()=>   <Presentation/>}/>
           <Route path="/actualite" exact component={()=>     <Actualite/>}/>
           <Route path="/contact" exact component={()=>      <Contact/>}/>
         </Switch>
    </Router>
    )
}
export default Navigation