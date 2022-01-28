import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { TareaModule } from './modules/tarea/tarea.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
    imports: [
        RouterModule.register([
            {
                path: 'Usuario',
                module: UsuarioModule
            },
            {
                path: 'Tarea',
                module: TareaModule
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
