import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'note-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  @Input() incomingArticle;
  @Output() selection:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendData(targetId){
    this.selection.emit(targetId);
  }
}
