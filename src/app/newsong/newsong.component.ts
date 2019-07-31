import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-newsong',
  templateUrl: './newsong.component.html',
  styleUrls: ['./newsong.component.css']
})
export class NewsongComponent implements OnInit {
  @Output() newsong= new EventEmitter<{author:string,title:string}>()

  constructor() { }

  ngOnInit() {
  }

  onAdd(author, title){
    this.newsong.emit(
      {author:author.value,title:title.value}
    );
    author.value=''
    title.value=''
    location.reload();
  }

}
