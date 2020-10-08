import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {

  @Input() abName : string;
  @Input() abEffect : string;
  @Input() abGeneration : string;

  constructor() { }

  ngOnInit(): void {
    this.abGeneration = this.abGeneration.charAt(0).toLocaleUpperCase() + this.abGeneration.slice(1).toLowerCase();
    this.abName = this.abName.charAt(0).toLocaleUpperCase() + this.abName.slice(1).toLowerCase();
  }

}
