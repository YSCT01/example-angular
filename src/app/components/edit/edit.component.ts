import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../new-project/new-project.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  
  public title:String;
  public project:Project;
  public savedProject;
  public dstatus:String;
  public filesToUpload: Array <File>;
  public date;
  public savedId:String;
  
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router:Router
  ) { 

    this.title = "Edit Project";
    this. date = new Date();
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
         },
      error=>{
        console.log(<any>error);
      });
  }

  onSubmit(){
    if(confirm("Do you want to save " + this.project.name + "?")){
      this._projectService.updateProject(this.project).subscribe(
        response=>{
          console.log(response);
          this.savedId = this.project._id;
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url + "/add-image/" +response.project._id, [], this.filesToUpload, "image").then((result:any)=>{
            this.dstatus = "success";
            this.savedProject = result.project;
            alert("Saved Correctly");
            });
          }
          else{
            this.dstatus = "success";
            this.savedProject = response.project;
            alert("Saved Correctly");
          }
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
