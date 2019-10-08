import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <div class="footer shadow-lg">
    <div class="footer-item">
      <a href="https://bugajsky.pl/">
        <img src="https://bugajsky.pl/wp-content/uploads/2018/02/logo.png" class="img-responsive" alt="bugajsky.pl">
      </a>
    </div>
    <div class="footer-item">
      <a href="https://bugajsky.pl/2019/08/23/realtime-database-w-firebase/" class="animation">Implementacja Stripe</a>
    </div>
    <div class="footer-item"></div>
  </div>`
})
export class AppComponent {
}
