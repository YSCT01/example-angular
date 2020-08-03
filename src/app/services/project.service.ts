import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url:String;
    
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return "Testing Service in Angular";
    }

    saveProject(project:Project): Observable<any>{
        var params = JSON.stringify(project);
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.post(this.url+'/save-project', params, {headers: headers});
    }

    getProjects():Observable<any>{
        var headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + '/all-projects', {headers: headers});
    }

    urlProject(id):Observable<any>{
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return  this._http.get(this.url+'/project/'+id, {headers: headers});
    }

    deleteProject(id):Observable<any>{
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return  this._http.delete(this.url+'/delete/'+id, {headers: headers});
    }

    updateProject(project:Project):Observable<any>{
        var params= JSON.stringify(project)
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'/update/'+project._id, params, {headers: headers});
    }
}