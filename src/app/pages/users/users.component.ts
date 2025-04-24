import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../interfaces/user.interface'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();
  users: User[] = [];
  isLoading: boolean = false;
  constructor(private readonly userService: UsersService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const userSubscription = this.userService
      .getUsers()
      .subscribe({
        next: (resp) => {
          this.users = resp.results;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error getting users:', error);
          this.isLoading = false;
        }
    });
    this.subscriptions.add(userSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
