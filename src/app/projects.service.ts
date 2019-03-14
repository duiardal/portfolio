import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project, CV } from './project';
import { Talk } from './talks';

import {
	AngularFirestore,
	AngularFirestoreCollection,
	AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
	providedIn: 'root'
})

export class ProjectsService {

	projectsCollection: AngularFirestoreCollection<Project>;
	projects: Observable<Project[]>;
	project: Observable<Project>;

	talksCollection: AngularFirestoreCollection<Talk>;
	talks: Observable<Talk[]>;
	talk: Observable<Talk>;

	cvCollection: AngularFirestoreCollection<CV>;
	cv: Observable<CV>;

	constructor(private afs: AngularFirestore) {
		this.projectsCollection = this.afs.collection<Project>('projects');
		this.talksCollection = this.afs.collection<Talk>('talks');
		this.cvCollection = this.afs.collection<CV>('cv');
	}

	/* För att HÄMTA projekt */

	getProjects(): Observable<Project[]> {
		return this.projectsCollection.snapshotChanges().pipe(
		map(actions => actions.map(a => {
			const data = a.payload.doc.data() as Project;
			const id = a.payload.doc.id;
			return { id, ...data };
			}))
		);
	}

	getProject(id: string): Observable<Project>  {
		return this.afs.doc(`projects/${id}`).snapshotChanges().pipe(
		map(snap => {
			const data = snap.payload.data() as Project;
			const id = snap.payload.id;
			return { id, ...data };
    	}));
	}


	getTalks(): Observable<Talk[]> {
		return this.talksCollection.snapshotChanges().pipe(
		map(actions => actions.map(a => {
			const data = a.payload.doc.data() as Talk;
			const id = a.payload.doc.id;
			return { id, ...data };
			}))
		);
	}

	getTalk(id: string): Observable<Talk>  {
		return this.afs.doc(`talks/${id}`).snapshotChanges().pipe(
		map(snap => {
			const data = snap.payload.data() as Talk;
			const id = snap.payload.id;
			return { id, ...data };
    	}));
	}

	getCv(): Observable<CV>  {
		return this.cvCollection.doc('PieETsAUo5F2ky8DgIMO').snapshotChanges().pipe(
		map(snap => {
			const data = snap.payload.data() as CV;
			const id = snap.payload.id;
			return { id, ...data };
    	}));
	}

	/* För att GÖRA ETT NYTT projekt */

	createProjects(project: Project) {
		return this.afs.collection<Project>('projects').add(project);
	}

	/* För att TA BORT ett projekt */

	deleteProject(projectId: string) {
		return this.afs.doc('projects/' + projectId).delete();
	}
	
}
