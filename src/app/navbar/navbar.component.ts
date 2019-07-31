import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search:string='';
  @Output() searchSong = new EventEmitter<string>();


  constructor() {}

  ngOnInit() {   
  }

  onKeyup(){
      this.searchSong.emit(this.search)
  }

  onClick(){
    this.searchSong.emit(this.search)
  }

}
