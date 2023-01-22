import { Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent},
  { path: 'user', component: UserComponent},
  { path: '', component: UserProfileComponent},
  
];

export { ROUTES };