import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  protected number = signal(0);

  increaseValue = (value: number) => {
    this.number.update(current => current + value)
  }

  resetCounter = () => {
    this.number.set(0)
  }
}
