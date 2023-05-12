import { Component, ViewChild  } from '@angular/core';
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

  checkboxItems = [
    { label: 'Item 1', selected: false },
    { label: 'Item 2', selected: true },
    { label: 'Item 3', selected: false },
  ];

  selectedCheckBoxes:string[]=[];

  onCheckboxChange() {
    const selectedValues = this.checkboxItems
      .filter(item => item.selected)
      .map(item => item.label);
      this.selectedCheckBoxes = selectedValues;
    console.log(selectedValues); // Access the selected values here
  }


  selectedValue!:any;
  onRadioChange(){
    console.log(this.selectedValue)
  }

  minDate = new Date()
  maxDate = new Date(2023, 4, 19);

  dateFilter(date:any){
    const day = date.getDay();
    return day != 0 && day != 6
  }
  // PREVENTS SATURDAY AND SUNDAY FROM BEING SELECTED

  onDateInputKeydown(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '-'];

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  toggle1:boolean = true;
  toggle2:boolean = false;

  togOne(){
    this.toggle1=!this.toggle1
  }
  togTwo(){
    this.toggle2=!this.toggle2
  }

  chips:string[] = ["Angular", "React", "Vue"];
  chipClicked(chip:string){
    console.log(chip," clicked")
  }

  deleteThis(dChip:string){
    let skills = this.mySkills.split(',');
    let newSkills = skills.filter((chip)=>{
      return chip !== dChip;
    });
    this.mySkills = newSkills.join(',');
  }

  mySkills:string  = 'Angular,React,Vue';



  itemsPerPage = 10;
  totalItems = 100;
  pageSizeOptions: number[] = [5, 10, 25, 100];

}
