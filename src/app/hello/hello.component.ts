import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div class="hello">
      <h2>Hello Component</h2>
      <p>This is an example component to demonstrate Dyad.sh Select UI to Edit feature.</p>
    </div>
  `,
  styles: [`
    .hello {
      padding: 20px;
      margin: 20px 0;
      background-color: #f0f0f0;
      border-radius: 8px;
    }
  `]
})
export class HelloComponent {}