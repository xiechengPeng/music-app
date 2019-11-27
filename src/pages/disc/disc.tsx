import  React from 'react';
import './disc.css';
import { getSongList } from '../../api/disc';
import MusicList from '../../components/music-list/music-list';
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
class disc extends React.Component<IProps>{
    public state={
        songList:[],
        title:'',
        bgimage:'',
    }
    componentDidMount(){
        let ID=this.props.match.params.id;
        this._getSongList(ID);
    }
    _getSongList(id:string){
        getSongList(id).then(res=>{
            try {
                if(res.code===0){
                    processSongsUrl(this._normalizeSongs(res.cdlist[0].songlist)).then((songs)=>{
                        this.setState({
                            songList:songs,
                            title:res.cdlist[0].dissname,
                            bgimage:res.cdlist[0].logo
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
        list.forEach((musicData) => {
            if (isValidMusic(musicData)) {
                ret.push(createSong(musicData));
            }
        })
        return ret
    }
    render(){
        const { songList } = this.state;
        return (
            <div className="disc">
                <MusicList musicData={songList} bgimage={this.state.bgimage} title={this.state.title}></MusicList>
            </div>
        )
    }
}

export default disc;



