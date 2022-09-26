import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/getstarted/get-started.module').then(
        (m) => m.GetStartedPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./auth/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'verify',
    loadChildren: () =>
      import('./auth/verify/verify.module').then((m) => m.VerifyPageModule),
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./auth/forgot/forgot.module').then((m) => m.ForgotPageModule),
  },
  {
    path: 'setpassword',
    loadChildren: () =>
      import('./auth/setpassword/setpassword.module').then(
        (m) => m.SetpasswordPageModule
      ),
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./auth/explore/explore.module').then((m) => m.ExplorePageModule),
  },
  {
    path: 'tab4',
    loadChildren: () =>
      import('./tab4/tab4.module').then((m) => m.Tab4PageModule),
  },
  {
    path: 'tab5',
    loadChildren: () =>
      import('./tab5/tab5.module').then((m) => m.Tab5PageModule),
  },
  {
    path: 'page',
    loadChildren: () =>
      import('./page/page.module').then((m) => m.PagePageModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'challenge',
    loadChildren: () =>
      import('./challenge/challenge.module').then((m) => m.ChallengePageModule),
  },

  {
    path: 'addcollection',
    loadChildren: () =>
      import('./addcollection/addcollection.module').then(
        (m) => m.AddcollectionPageModule
      ),
  },
  {
    path: 'createcollection',
    loadChildren: () =>
      import('./createcollection/createcollection.module').then(
        (m) => m.CreatecollectionPageModule
      ),
  },
  {
    path: 'notsetting',
    loadChildren: () =>
      import('./notsetting/notsetting.module').then(
        (m) => m.NotsettingPageModule
      ),
  },
  {
    path: 'instaprofile',
    loadChildren: () =>
      import('./instaprofile/instaprofile.module').then(
        (m) => m.InstaprofilePageModule
      ),
  },
  {
    path: 'poster',
    loadChildren: () =>
      import('./poster/poster.module').then((m) => m.PosterPageModule),
  },
  {
    path: 'message',
    loadChildren: () =>
      import('./message/message.module').then((m) => m.MessagePageModule),
  },
  {
    path: 'chating',
    loadChildren: () =>
      import('./chating/chating.module').then((m) => m.ChatingPageModule),
  },
  {
    path: 'post-detail',
    loadChildren: () =>
      import('./tab3/tab3.module').then((m) => m.Tab3PageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
