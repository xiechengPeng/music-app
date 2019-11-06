import React from 'react';
import { Carousel } from 'antd';
import './slider.css';

interface imgList{
    img:string,
    id:number,
    link:string
}
let imgData:Array<imgList>
imgData=[
    {id:1,img:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1811181.jpg',link:'https://y.qq.com/m/act/mmcjccc2019/index.html?openinqqmusic=1&amp'},
    {id:2,img:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1804257.jpg',link:'https://y.qq.com/m/client/area/index.html?encArea=0032WmPq2bgOlS'},
    {id:3,img:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1811863.jpg',link:'https://y.qq.com/m/digitalbum/gold/index.html?openinqqmusic=1&amp'},
    {id:4,img:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1817674.jpg',link:'https://y.qq.com/m/act/sfhd/361.html?ADTAG=jdt&amp;openinqqmusic=1'},
]
class Slider extends React.Component{
    render(){
        return (
            <div className="slider">
                <Carousel autoplay>
                    {
                        imgData.map((item,key)=>(
                            <div className="img-box" key={key}>
                                <a href={item.link}><img src={item.img} alt=""/></a>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        )
    }
}

export default Slider;