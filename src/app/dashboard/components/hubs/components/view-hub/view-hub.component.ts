import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchHubGQL, Hub } from 'src/graphql/generated';

@Component({
  selector: 'app-view-hub',
  templateUrl: './view-hub.component.html',
  styleUrl: './view-hub.component.scss',
})
export class ViewHubComponent {
  hub!: Hub;
  hubId!: string;

  constructor(private route: ActivatedRoute, private fetchHubGQL: FetchHubGQL) {
    this.route.paramMap.subscribe((params) => {
      this.hubId = params.get('id');
      if (this.hubId) {
        this.fetchHub();
      }
    });
  }

  fetchHub() {
    if (!this.hubId) {
      return;
    }
    this.fetchHubGQL
      .fetch({ hubId: this.hubId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.hub = result.data.fetchHub as any;
        // console.log(this.hub.add_by);
      });
  }
}
