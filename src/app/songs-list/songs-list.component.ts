import { Component, OnInit, Input } from '@angular/core';
import {Song} from '../model/Song.model'
@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  @Input() searchList: string;
  localPlaylist:Song[];
  playlist: Song[]=[
    new Song('Twenty one pilots', 'Stressed Out'),
    new Song('Imagin Dragons', 'Natural'),
    new Song('Rammstein', 'Rosenroot')
  ];

  constructor() { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('playlist')).length >0){
      this.localPlaylist= JSON.parse(localStorage.getItem('playlist'))
      this.playlist =this.localPlaylist;
    }
  }

  addSong(newSong: {author:string, title:string}){
    this.playlist.push(
      new Song(newSong.author,newSong.title)
    )
    localStorage.setItem('playlist',JSON.stringify(this.playlist))
  }

  searchMusic(song){
      
      if(song.author.toLowerCase().includes(this.searchList.toLowerCase())
       || song.title.toLowerCase().includes(this.searchList.toLowerCase())){
        return true
      } else {
        return false
      }
    }

    onDelete(song){
      this.playlist.splice(
        this.playlist.indexOf(song),1
      );
      localStorage.setItem('playlist',JSON.stringify(this.playlist))

    }

}
