import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService, UploadService]
})
export class NewProjectComponent implements OnInit {

  public title:String;
  public project: Project;
  public date:any;
  public dstatus:String;
  public filesToUpload:Array<File>;
  public savedProject:String;
  public savedId:String;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) { 
    this.title="Create New Project"
    this.date = new Date();
    this.project = new Project("","","","",this.date.getFullYear(),"","");
  }

  ngOnInit(): void {
  }

  onSubmit(projectToClean){
    if(confirm("Do you want to save " + this.project.name + "?")){
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
        alert("Saved Correctly");
          this._uploadService.makeFileRequest(Global.url + "/add-image/" +response.project._id, [], this.filesToUpload, "image").then((result:any)=>{
          this.dstatus = "success";
          this.savedProject = result.project;
          this.savedId=response.project._id;
          projectToClean.reset();
        });
      },
      error=>{
        console.log(<any>error);
        
      }
      );
      
    }
    else{
      alert("Petition cancelled");
    }
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload= <Array<File>>fileInput.target.files;

  }
  
}
