import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[ProjectService]
})
export class DetailsComponent implements OnInit {
  public url:String;
  public project:Project;

  constructor(
    private _projectService:ProjectService,
    private _router: Router,
    private _route:ActivatedRoute,
   
  ) { 
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var id= params.id;

      this.getProject(id);
    });
  }

  getProject(id_p: any){
    this._projectService.urlProject(id_p).subscribe(
      response=>{
        this.project = response.project;
        console.log(this.project);
         },
      error=>{
        console.log(<any>error);
      });
  }

  deleteProject(id_p: any){
    if(confirm("Do you want to delete this project?")){
      if(prompt("Enter the password") == "ysct"){
      this._projectService.deleteProject(id_p).subscribe(
        response =>{
          if(response.project){
            alert("Deleted successfuly. Redirecting...");
            this._router.navigate(['/Projects']);
          }
        },
        error=>{
            console.log(<any>error);
            alert("Something went wrong, try again");
        }
      );
      }
      else{
        alert("Wrong Password, try again");
      }
    }
    else{
      alert("Petition Cancelled");
    }
    

  }

  editButton(){
    if(prompt("Enter the password") == "ysct"){
      this._router.navigate(['/Projects/Project/Edit/', this.project._id]);
    }
    else{
      alert("Error, the password is invalid");
    }
  }


}
