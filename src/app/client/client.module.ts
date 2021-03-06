import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ComptesComponent } from './comptes/comptes.component';
import { VirementComponent } from './virement/virement.component';
import { ProfilComponent } from './profil/profil.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CommandesComponent } from './commandes/commandes.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { Routes, RouterModule } from '@angular/router';
import { SidebarClientComponent } from './sidebar-client/sidebar-client.component';
import { FormsModule } from '@angular/forms';
import { CompteDetailComponent } from './compte-detail/compte-detail.component';
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { FakeServiceCompteService } from 'src/model/fake-service-compte.service';
import { HttpClientModule } from '@angular/common/http';

const clientRoutes: Routes = [
  {path: '', component: ClientComponent, children:
    [
      {path: '',  component: ComptesComponent},
      {path: 'comptes',  component: ComptesComponent},
      {path: 'virement',  component: VirementComponent},
      {path: 'profil',  component: ProfilComponent},
      {path: 'historique',  component: HistoriqueComponent},
      {path: 'commandes',  component: CommandesComponent},
      {path: 'notifications',  component: NotificationsComponent},
    ]
  }
] ;

@NgModule({
  declarations: [
    ClientComponent,
    ComptesComponent,
    VirementComponent,
    ProfilComponent,
    HistoriqueComponent,
    CommandesComponent,
    NotificationsComponent, SidebarClientComponent, CompteDetailComponent
  ],
  imports: [
    RouterModule.forChild(clientRoutes),
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [FakeServiceCompteService],
  exports: [RouterModule,]
})
export class ClientModule { }
