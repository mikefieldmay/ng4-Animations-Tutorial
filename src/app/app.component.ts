import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)), // transition takes a string which indicates whichway the animation should go.
      transition('highlighted => normal', animate(600)),// animate is a method. At it's most basic if you input a number it takes that mount of time to transition
    ])
  ] // we specify the animations this component should be aware of
})

export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal'; // angular animation transfers from one state to another

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }
}
