import { Controller, Get, Param } from '@nestjs/common';

interface User {
id: string;
name: string;
email: string;
}

@Controller('users')
export class UsersController {

private users: User[] = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: '3', name: 'Carlos Rodríguez', email: 'carlos.rodriguez@example.com' },
    { id: '4', name: 'María González', email: 'maria.gonzalez@example.com' },
    { id: '5', name: 'Luis Martínez', email: 'luis.martinez@example.com' },
    { id: '6', name: 'Ana López', email: 'ana.lopez@example.com' },
    { id: '7', name: 'Diego Pérez', email: 'diego.perez@example.com' },
    { id: '8', name: 'Laura Torres', email: 'laura.torres@example.com' },
    { id: '9', name: 'Andrés Ramírez', email: 'andres.ramirez@example.com' },
    { id: '10', name: 'Sofía Hernández', email: 'sofia.hernandez@example.com' },
    { id: '11', name: 'Miguel Castro', email: 'miguel.castro@example.com' },
    { id: '12', name: 'Valentina Moreno', email: 'valentina.moreno@example.com' },
    { id: '13', name: 'Juan García', email: 'juan.garcia@example.com' },
    { id: '14', name: 'Camila Vargas', email: 'camila.vargas@example.com' },
    { id: '15', name: 'Sebastián Ruiz', email: 'sebastian.ruiz@example.com' }
];

@Get()
getUsers(){
return this.users;}

@Get('id/:id')
getUserById(@Param('id') id: string) {
console.log('ID recibido:', id);
const user = this.users.find(user => user.id === id);
console.log('Usuario encontrado:', user);
if (!user) {
return { message: 'Usuario no encontrado' };
}
return user;
}

@Get('name/:name')
getUserByName(@Param('name') name: string) {
console.log('Nombre recibido:', name);
const user = this.users.find(user => user.name === name);
console.log('Usuario encontrado:', user);
if (!user) {
return { message: 'Usuario no encontrado' };
}
return user?.email;
};


}
