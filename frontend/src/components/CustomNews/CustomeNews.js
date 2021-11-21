import React from 'react'
import './CustomNews.css';
function CustomeNews({newsList, newsChannel, imgSrc, imgHeight}) {
    return (
        <div>
            <img src={imgSrc} style={{height: imgHeight}}/>
            <p>{newsChannel}</p>
            {newsList.map(item => {
                return <div className='contenteHolder'>
                    <a className="title" href={item.titlelink}>{item.title}</a>
                    {/* <div style={{display: 'flex',}}>
                        <p>comments</p>
                        <p> 10</p>
                    </div> */}
                    {/* <a className="title" href={item.titlelink}>{item.title}</a> */}
                </div>
            })}
                
        </div>
    )
}

export default CustomeNews;
