import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Tareas } from './tareas/tareas';
import { Cartas } from './cartas/cartas';
import { Dias } from './dias/dias';
import { Order } from './order/order';
import { Grade } from './grade/grade';
import { Planes } from './planes/planes';
import { Temperatura } from './temperatura/temperatura';
import { Rol } from './rol/rol';

@NgModule({
  declarations: [
    App,
    Tareas,
    Cartas,
    Dias,
    Order,
    Grade,
    Planes,
    Temperatura,
    Rol,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
