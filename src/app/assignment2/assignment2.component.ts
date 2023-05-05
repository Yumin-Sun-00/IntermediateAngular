import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  showSecret : boolean = false;

  toggles: number[] =[];


  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    this.toggles.push(this.toggles.length + 1);

  }

}
