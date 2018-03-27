import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-labdetails',
	templateUrl: './labdetails.component.html',
	styleUrls: ['./labdetails.component.css']
})
export class LabdetailsComponent implements OnInit {
	lab:any
	constructor(
		private _httpService: HttpService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.lab = {
			name:" ",
			BSL:1
		}
		this._route.params.subscribe((params: Params) =>{
			this.getLabInfo(params['id'])
		})
	}
	getLabInfo(id){
		this._httpService.getLabInfo(id).subscribe(data =>{
			this.lab = data['data']
		})
	}
	goLabView(){
		this._router.navigate(['labview'])
	}
	deleteLab(id){
		this._httpService.deleteLab(id).subscribe(data=>{
			this.goLabView()
		})
	}
	editLab(id){
		this._router.navigate(['labedit/'+id])
	}
}