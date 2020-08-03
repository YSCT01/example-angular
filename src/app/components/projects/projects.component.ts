import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public listProjects:Project[];
  public url:String;

  constructor(
    private _projectService: ProjectService
    
  ) {

    this.url =Global.url;
   }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        console.log(response);
        if(response.projects){
          this.listProjects = response.projects;
        }
      },  
      error =>{
        console.log(<any>error);
      }
    );
  }
}
