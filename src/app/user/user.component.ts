import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //to generate random output
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath= computed(() =>'assets/users/' + this.selectedUser().avatar )

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // to create the output
  @Output() select = new EventEmitter();

  // output with function
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
