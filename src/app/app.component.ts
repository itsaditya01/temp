import { Component,OnInit } from '@angular/core';
import { SwapService } from './swap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor (private api : SwapService){}
  ngOnInit(): void {
    this.api.getProduct().subscribe((res)=>{
      console.log(res);
      
    })
  }
  members: String[] = [];
  nameOfMember: String = '';
  errorMessage = '';
  noOfTeams: number | undefined;
  teamsCreated: String[][] = [];

  onInput(name: String) {
    this.nameOfMember = name;
  }
  addMember() {
    if (this.nameOfMember === '') {
      this.errorMessage = "Name can't be empty.";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.nameOfMember);
    this.nameOfMember = '';
  }

  onInputTeams(totalTeams: string) {
    this.noOfTeams = Number(totalTeams);
  }
  generateTeams() {
    this.teamsCreated = [];
    const totalMembers = [...this.members];
    if (this.noOfTeams) {
      if (this.members.length < this.noOfTeams) {
        this.errorMessage = 'Not enough members';
        return;
      }
      let flag = 0;
      while (totalMembers.length) {
        for (let index = 0; index < this.noOfTeams; index++) {
          if(totalMembers.length === 0){
            flag = 1;
            return;
          }
          let randomint = Math.floor(Math.random() * (totalMembers.length - 1));
          let member = totalMembers.splice(randomint, 1)[0];
          console.log(randomint,totalMembers);
          

          if (this.teamsCreated[index]) {
            this.teamsCreated[index].push(member);
          } else {
            this.teamsCreated[index] = [member];
          }
        }
        if(flag === 1){
          return;
        }
      }
      console.log(this.teamsCreated);
      this.noOfTeams = undefined;
    }
  }
}
