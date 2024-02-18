import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

/**
 * ngOnInit(): Initializes the component and subscribes to route data to retrieve server information.
   onEdit(): Uses the Angular router to navigate to the 'edit' 
   relative path of the current route while preserving the query parameters from the current route.
 */
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  /**
   * Initializes the component upon creation, subscribing to route data to retrieve server information.
   *
   */
  ngOnInit() {
    this.route.data
        .subscribe((data: Data)=>{
          this.server = data['server'];
        });
    // const id= +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(1);
    // this.route.params.subscribe((params:Params)=>{
    //   this.server= this.serversService.getServer(+params['id']);
    // });
  }
  /**
   * This TypeScript code snippet uses the Angular router to navigate to the 'edit' -
   * relative path of the current route while preserving the query parameters from the current route.
   */
  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling:'preserve'});
  }

}
