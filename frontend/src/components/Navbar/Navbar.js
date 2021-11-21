import React from "react";
import './Navbar.css';

const Navbar = ({routeChange, route}) => {
    return(
        <div>
            <header className="navbar">
                <h2>Your All in one News</h2>
                    <div className="signup">
                        {
                            
                            route === 'signup' ?
                            <div></div>
                            : 
                            (
                                route === 'signin' ? 
                                 <div style={{display: 'flex'}}>
                                       <div> 
                                            <input className="b  ph3 pv2 input-reset ba white b--black bg-black grow pointer f6 dib" 
                                            type="submit" value="signin" />
                                        </div>
                                        <div>
                                            <input className="b ph3 pv2 input-reset ba white b--black bg-black grow pointer f6 dib" 
                                            type="submit" value="signup" onClick={() => routeChange('signup')}/>
                                        </div>
                                    </div>
                                    :
                               
                                    <div style={{display: 'flex'}}>
                                       {/* <div> 
                                            <input className="b  ph3 pv2 input-reset ba white b--black bg-black grow pointer f6 dib" 
                                            type="submit" value="Home" onClick={() => routeChange('home')} />
                                        </div>
                                        <div>
                                            <input className="b ph3 pv2 input-reset ba white b--black bg-black grow pointer f6 dib" 
                                            type="submit" value="My News" onClick={() => routeChange('favorites')}/>
                                        </div> */}
                                    </div>
                                   
                            )
                        }
                         {/* <h2>{new Date().toLocaleString()}</h2> */}
                    </div>
            </header>
        </div>
    )
}

export default Navbar;