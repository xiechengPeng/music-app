import React from "react";
import MusicList from '../../components/music-list/music-list';
import { getSingerDetail } from '../../api/singer';
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

class singerDetail extends React.Component<IProps>{
    public state={
        singers:[],
        title:'',
        bgimage:''
    }

    componentDidMount(){
        let ID=this.props.match.params.id;
        this._getsingerDetailList(ID);
    }
    _getsingerDetailList(id:string){
        getSingerDetail(id).then(res=>{
            try {
                if(res.code===0){
                    processSongsUrl(this._normalizeSongs(res.data.list)).then((songs)=>{
                        this.setState({
                            singers:songs,
                            title:res.data.singer_name,
                            bgimage:songs[0].image
                        })
                    })
                }
            } catch (error) {
                console.log(error);
            }
        })
    }
    _normalizeSongs (list) {
        let ret = [];
        list.forEach((item) => {
            const {musicData} = item;
            if (isValidMusic(musicData)) {
                ret.push(createSong(musicData));
            }
        })
        return ret;
    }

    render(){
        const { singers } = this.state;
        return (
            <div className="rankItem">
                <MusicList musicData={singers} bgimage={this.state.bgimage} title={this.state.title}></MusicList>
            </div>
        )
    }
}
export default singerDetail;