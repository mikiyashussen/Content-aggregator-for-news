import React from "react";
// import './Navbar.css';

const SignIn = ({onRoutechange}) => {
    return(
        <div>
            <main class="pa4 black-80">
                <form class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" name="email-address"  id="email-address" />
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" name="password"  id="password" />
                    </div>
                    <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div class="">
                    <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" value="Sign in" />
                    </div>
                    <div class="lh-copy mt3">
                    <a href="#0" class="f6 link dim black db" onClick={() => onRoutechange('home')}>Sign up</a>
                    <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default SignIn;