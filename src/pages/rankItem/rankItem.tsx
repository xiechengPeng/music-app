import React from "react";
import MusicList from '../../components/music-list/music-list';
import { getMusicList } from '../../api/rank';
import { createSong, isValidMusic, processSongsUrl } from '../../common/js/song';

export interface IProps{
    match:Iparams,
}
export interface Imatch{
    id:string
}
interface Iparams{
    params:Imatch
}

class rankItem extends React.Component<IProps>{
    public state={
        songList:[],
        title:'',
        bgimage:''
    }

    componentDidMount(){
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
            const musicData = item.data
            if (isValidMusic(musicData)) {
                ret.push(createSong(musicData));
            }
        })
        return ret
    }

    render(){
        const { songList } = this.state;
        return (
            <div className="rankItem">
                <MusicList musicData={songList} bgimage={this.state.bgimage} title={this.state.title}></MusicList>
            </div>
        )
    }
}
export default rankItem;