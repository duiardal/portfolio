import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	selectedProject: Project;
	projects: Project[];
	
	frontend = new Array<Project>();
	interactionDesign = new Array<Project>();
	gameGraphics = new Array<Project>();
	talks = new Array<Project>();

	constructor(private projectService: ProjectsService) {
	}

	ngOnInit() {
		this.getProjects();
	}

	onSelect(project: Project): void {
		this.selectedProject = project;
	}

	getProjects(): void {
		this.projectService.getProjects()
			.subscribe(projects => {
				this.projects = projects;
				this.getProjectType();
			}
		);
	}

	getProjectType(): void {
		for (var i = this.projects.length - 1; i >= 0; i--) {
			if (this.projects[i].type == "frontend") {
				this.frontend.push(this.projects[i]);
			}
			else if (this.projects[i].type == "interactionDesign") {
				this.interactionDesign.push(this.projects[i]);
			}
			else if (this.projects[i].type == "gameGraphics") {
				this.gameGraphics.push(this.projects[i]);
			}
			else if (this.projects[i].type == "talks") {
				this.talks.push(this.projects[i]);
			}
		}
	}

}
