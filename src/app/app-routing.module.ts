import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'buttons', loadChildren: './pages/buttons/buttons.module#ButtonsPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'check', loadChildren: './pages/check/check.module#CheckPageModule' },
  { path: 'date-time', loadChildren: './pages/date-time/date-time.module#DateTimePageModule' },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'list-sliding', loadChildren: './pages/list-sliding/list-sliding.module#ListSlidingPageModule' },
  { path: 'list-reorder', loadChildren: './pages/list-reorder/list-reorder.module#ListReorderPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'modal-info', loadChildren: './pages/modal-info/modal-info.module#ModalInfoPageModule' },
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  { path: 'progress-bar', loadChildren: './pages/progress-bar/progress-bar.module#ProgressBarPageModule' },
  { path: 'refresher', loadChildren: './pages/refresher/refresher.module#RefresherPageModule' },
  { path: 'searchbar', loadChildren: './pages/searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'segment', loadChildren: './pages/segment/segment.module#SegmentPageModule' },
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'toast', loadChildren: './pages/toast/toast.module#ToastPageModule' },  { path: 'toggle', loadChildren: './pages/toggle/toggle.module#TogglePageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
