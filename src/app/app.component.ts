import { Component, OnInit } from '@angular/core';
// import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  // constructor(private router: Router) { }
  // constructor(private shopifyService: shopfiyService,
  //   private router: Router) { }

  title = 'my-app';
  // onSubmit() {
  //   this.submitted = true;
  //   this.save();
    
  // }
  // goTohome(){
  //   this.router.navigate(['/app/home']);
  // }
}
