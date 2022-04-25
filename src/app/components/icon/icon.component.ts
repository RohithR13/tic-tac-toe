import { Component, OnInit,Input } from '@angular/core';
import {faPen,faTimes,faA,faR} from "@fortawesome/free-solid-svg-icons"
import {faCircle} from "@fortawesome/free-regular-svg-icons"

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconName: String;

  faPen = faPen;
  faTimes = faR;
  faCircle = faA;

  constructor() { }

  ngOnInit(): void {
  }

}
