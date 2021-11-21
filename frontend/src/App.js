import React from "react";
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Aljazeera from './components/aljazeera/Aljazeera';
import Bbc from './components/bbc/Bbc';
import FirstNews from './components/firstnews/FirstNews';
import HackerNews from './components/hackernews/HackerNews';
import Tvn24 from './components/tvn24/Tvn24';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Favorites from './components/Favorites/Favorites';
import CustomNews from './components/CustomNews/CustomeNews'

import news from './components/News'




import 'tachyons';

// let allNews;


class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      allNews: news,
      showNews: false,
      route: 'home',
      favNews: []
    }
  }

  onRouteChange = (newRoute) => {
    // fetch('https://eyobkibret15.pythonanywhere.com/')
    // .then(res => res.json())
    // .then(news =>{
    //    this.setState({allNews: news,  route: newRoute})
    //   console.log(this.state.allNews)
    //   })
    this.setState({ route: newRoute})
  }

  homePageHandler = () => {
    // fetch('https://eyobkibret15.pythonanywhere.com/')
    // .then(res => res.json())
    // .then(news =>{
    //    this.setState({allNews: news})
    //   console.log(this.state.allNews)
    //   })
    this.setState({route: 'home'});
    // this.setState({allNews: news})
  }
  

  componentDidMount(){
    // fetch('https://eyobkibret15.pythonanywhere.com/')
    // .then(res => res.json())
    // .then(news =>{
    //    this.setState({ showNews: true, allNews: news})
    //   console.log(this.state.allNews)
    //   })
  }

  render(){
  return (
    <div className="App">
      <Navbar route={this.state.route} routeChange={this.onRouteChange}/>
      <div> 
                    {
                      this.state.route === 'signup' ?
                        <SignUp routeChange={this.homePageHandler}/>
                        :
                        (
                          this.state.route === 'home' ?
                            <div className="newsCompnentsContainer">
                              <div>
                                <div><CustomNews newsChannel='First News'
                                  newsList={this.state.allNews.firstnews}
                                   imgSrc='https://pbs.twimg.com/profile_images/989578496128188416/03I84kSr_400x400.jpg'
                                   imgHeight='200px'
                                   />
                                </div>
                                <div><CustomNews newsChannel='Tvn24' 
                                newsList={this.state.allNews.tvn24} 
                                imgSrc='https://upload.wikimedia.org/wikipedia/commons/8/80/TVN_24_Logo.png'
                                imgHeight='50px'/>
                                </div>
                                <div><CustomNews newsChannel='Aljazeera'
                                 newsList={this.state.allNews.aljazeera}
                                  imgSrc='https://i1.sndcdn.com/avatars-000239542489-yngg9p-t500x500.jpg'
                                  imgHeight='50px' />
                                  </div>
                              </div>
                              <div>
                                <div><CustomNews newsChannel='HackerNews' 
                                newsList={this.state.allNews.hackernews} 
                                imgSrc='https://jayclouse.com/wp-content/uploads/2019/06/hacker_news-1000x525-1.jpg'/>
                              </div>
                                <div><CustomNews newsChannel='BBC' 
                                newsList={this.state.allNews.bbc} 
                                imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV9KzUcAYCcy_nmHqDjcbMGUUq0hlT_ULVg&usqp=CAU'
                                imgHeight='100px'
                                />
                                </div>
                              </div>
                            </div> :
                            <div></div>
                        )}



        {/* {this.state.route === 'home' ? 
          ( this.state.showNews ? 
              <div className="newsCompnentsContainer">
                <div><FirstNews newsList={this.state.allNews.firstnews} /></div>
                <div><Tvn24 newsList={this.state.allNews.tvn24} /></div>
                <div><Aljazeera newsList={this.state.allNews.aljazeera} /></div>
                <div><HackerNews newsList={this.state.allNews.hackernews} /></div>
                <div><Bbc newsList={this.state.allNews.bbc} /></div>
            </div> :
            'Loading ....'
            )
          :
          (
            this.state.route === 'signin' ?
              <SignIn routeChange={this.onRouteChange}/> 
              :
              (
              this.state.route === 'signup' ? 
              <SignUp routeChange={this.onRouteChange}/>
              :
              <Favorites news={this.state.favNews} />
              )
          )
        } */}
        
      </div>      
      <Footer />
    </div>
  );
}
}

export default App;
