import React from "react";
import './FirstNews.css';

const FirstNews = ({ newsList }) => {
    console.log(newsList);
    return(
        <div className="">
            <h2>FirstNews</h2>

              <div>
                  {newsList.map(item => {
                      return <div className='contenteHolder'>
                                <a className="title" href={item.titlelink}>{item.title}</a>
                                <a className="title" href={item.titlelink}>{item.title}</a>
                          </div>
                  })}
               {/* <a className="title" href={newsList.titlelink[0]}>{newsList.title[0]}</a> */}
            </div> 


           {/* <div> */}
               {/* <a className="title" href={newsList.titlelink[0]}>{newsList.title[0]}</a>
            </div>
            <div>
                <a className="detail" href={newsList.detaillink[0]}>{newsList.detail[0]}</a><br/>
                <h3>{newsList.type[0]}</h3>
            </div>
             <div>
               <a className="title" href={newsList.titlelink[1]}>{newsList.title[1]}</a>
            </div>
            <div>
                <a className="detail" href={newsList.detaillink[1]}>{newsList.detail[1]}</a><br/>
                <h3>{newsList.type[1]}</h3>
            </div> <div>
               <a className="title" href={newsList.titlelink[2]}>{newsList.title[2]}</a>
            </div>
            <div>
                <a className="detail" href={newsList.detaillink[2]}>{newsList.detail[2]}</a><br/>
                <h3>{newsList.type[2]}</h3>
            </div> <div>
               <a className="title" href={newsList.titlelink[3]}>{newsList.title[3]}</a>
            </div>
            <div>
                <a className="detail" href={newsList.detaillink[3]}>{newsList.detail[3]}</a><br/>
                <h3>{newsList.type[3]}</h3>
            </div> <div>
               <a className="title" href={newsList.titlelink[4]}>{newsList.title[4]}</a>
            </div>
            <div>
                <a className="detail" href={newsList.detaillink[4]}>{newsList.detail[4]}</a><br/>
                <h3>{newsList.type[4]}</h3>
            </div> */}
        </div>
    )
}

export default FirstNews;