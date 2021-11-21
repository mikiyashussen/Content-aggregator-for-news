import React from "react";
import './SignUp.css';
const selectedNews = [];
const favoritesNews = [];

const SignUp = ({routeChange}) => {


    const getNews = () => {
        // console.log('Inisde here')
    //      fetch('https://eyobkibret15.pythonanywhere.com/')
    //         .then(res => res.json())
    //         .then(news =>{
    //         console.log(news)
    //         //  this.setState({ showNews: true, allNews: news})   
    //         () => routeChange(news)  
    //   })
    // this.setStat
    }

    const onCheckBoxChange = (e) => {
        let value = e.target.value;
        console.log(e.target.checked);
        if(e.target.checked){
            if(!selectedNews.includes(value)){
                selectedNews.push(value)
            }
        }
        else{
            if(selectedNews.includes(value)){
                let index = selectedNews.indexOf(value)
                selectedNews.splice(index,1);
                // selectedNews.slice(value)
                console.log('inside here')
            }
        }
        console.log(selectedNews);
    }


    return(
        <div className="signUpDiv">
            <div>
            <main className="pa2 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                     <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" name="password"  id="password" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba white b--black bg-black grow pointer f6 dib" 
                    type="submit" value="Sign Up" onClick={routeChange}/>
                    </div>
                </form>
            </main>
            </div>
            <div>
                <form class="pa4">
                <fieldset id="favorite_movies" class="bn">
                    <legend class="fw7 mb2">Favorite News</legend>
                    <div class="flex items-center mb2">
                    <input class="mr2" type="checkbox" id="aljazeera" value="1" onChange={onCheckBoxChange} />
                    <label for="aljazeera" class="lh-copy">Aljazeera</label>
                    </div>
                    <div class="flex items-center mb2">
                    <input class="mr2" type="checkbox" id="bbc" value="2" onChange={onCheckBoxChange} />
                    <label for="bbc" class="lh-copy">BBC</label>
                    </div>
                    <div class="flex items-center mb2">
                    <input class="mr2" type="checkbox" id="tvn24" value="3" onChange={onCheckBoxChange}/>
                    <label for="tvn24" class="lh-copy">Tvn24</label>
                    </div>
                    <div class="flex items-center mb2">
                    <input class="mr2" type="checkbox" id="hackernews" value="4" onChange={onCheckBoxChange}/>
                    <label for="hackernews" class="lh-copy">HackerNews</label>
                    </div>
                    <div class="flex items-center mb2">
                    <input class="mr2" type="checkbox" id="firstnews" value="5" onChange={onCheckBoxChange}/>
                    <label for="firstnews" class="lh-copy">FirstNews</label>
                    </div>
                    <div class="flex items-center mb2">
                    {/* <input class="mr2" type="checkbox" id="proxy" value="6" />
                    <label for="proxy" class="lh-copy">Hudsucker Proxy</label>
                    </div>
                    <div class="flex items-center mb2">
                    <input class="mr2" type="checkbox" id="homealone" value="7" />
                    <label for="homealone" class="lh-copy">Home Alone</label> */}
                    </div>
                </fieldset>
                </form>
            </div>
        </div>
    )
}

export default SignUp;