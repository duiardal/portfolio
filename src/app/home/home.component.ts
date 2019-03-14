import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
	selectedProject: Project;
	projects: Project[];

  constructor(private projectService: ProjectsService, config: NgbCarouselConfig) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

	ngOnInit() {
		this.getProjects();
	}

	onSelect(project: Project): void {
		this.selectedProject = project;
		console.log(this.selectedProject);
	}

	getProjects(): void {
		this.projectService.getProjects()
			.subscribe(projects => this.projects = projects);
	}

}