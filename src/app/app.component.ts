import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  hidden = false;

  counter=2;

  incrementCount(){
    this.counter+=1;
  }

  decrementCount(){
    if(this.counter>0){
      this.counter-=1;
    }
  }

  notificationCount = 13;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  active: boolean = false;
  checkToggle(){
    this.active = !this.active
  }

  options:string[] = ["English", "Hindi", "Malayalam"];

  language:string="";
  language2:string="";

  languageSelect(choice:string){
    this.language = choice;
  }
  languageMultiSelect(choice:string){
    this.language2 = choice;
  }

  loading:number = 0;

  startLoader(){
      setInterval(()=>{
        if(this.loading<101){
          this.loading+=1;
        }
      },10);
  }

  sidebarShow:boolean=true;
  closeSidebar(){
    this.sidebarShow = !this.sidebarShow
  }

  log(msg:string){
    console.log(msg)
  }

}
