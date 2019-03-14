import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Project } from '../project';
import { Talk } from '../talks';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	selectedProject: Project;
	selectedTalks: Talk;
	projects: Project[];
	talks: Talk[];

	constructor(private projectService: ProjectsService) {
	}

	ngOnInit() {
		this.getProjects();
		this.getTalks();
	}

	onSelect(project: Project, talk: Talk): void {
		this.selectedProject = project;
		this.selectedTalks = talk;
	}

	getProjects(): void {
		this.projectService.getProjects()
			.subscribe(projects => this.projects = projects);
	}

	getTalks(): void {
		this.projectService.getTalks()
			.subscribe(talks => this.talks = talks);
	}

}
