import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-team-member',
    templateUrl: './team-members.component.html',
    styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent {
    @Input()
    people;
}
