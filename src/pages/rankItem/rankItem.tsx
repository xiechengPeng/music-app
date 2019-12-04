import React from "react";
import MusicList from '../../components/music-list/music-list';
import { getMusicList } from '../../api/rank';
import { createSong, isValidMusic, processSongsUrl } from '../../common/js/song';

export interface IProps{
    match:Iparams,
    setSongs:any,
    changeCurrentSong:any
}
export interface Imatch{
    id:string
}
interface Iparams{
    params:Imatch
}
//定义当前组件this指向
let _this=null;
class rankItem extends React.Component<IProps>{
    public state={
        songList:[],
        title:'',
        bgimage:'',
        _this:null
    }

    componentDidMount(){
        _this=this;
        let ID=this.props.match.params.id
        this._getMusicList(ID);
    }
    _getMusicList(id:string){
        getMusicList(id).then(res=>{
            try {
                if(res.code===0){
                    processSongsUrl(this._normalizeSongs(res.songlist)).then((songs)=>{
                        this.setState({
                            songList:songs,
                            title:res.topinfo.ListName,
                            bgimage:songs[0].image
                        })
                    })
                }
            } catch (error) {
                console.log(error)
            }
        })
    }
    _normalizeSongs (list) {
        let ret = [];
        list.forEach((item) => {
            const musicData = item.data;
            if (isValidMusic(musicData)) {
                ret.push(createSong(musicData));
            }
        })
        return ret;
    }
    selectSong(song){
        _this.props.setSongs([song]);
        _this.props.changeCurrentSong(song);
    }
    childs=(data)=>{
        console.log(data,'====')
    }
    render(){
        const { songList } = this.state;
        return (
            <div className="rankItem">
                <MusicList musicData={songList} bgimage={this.state.bgimage} title={this.state.title} setSongs={this.selectSong}></MusicList>
            </div>
        )
    }
}
export default rankItem;