import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('epn_usuario')
export class UsuarioEntity{
    //id autogenerado
    @PrimaryGeneratedColumn()
    id: number;

    // Columna en la bdd
    @Column({
        name: 'user_nombres',//nombre del campo de la bdd
        type: 'varchar', // tipo de campo de la bdd
        length: 60, // longitud de campo
        nullable: false, // si es nullable
    })
    nombres: string; // nombre del objeto

    @Column({
        name: 'user_apellidos',//nombre del campo de la bdd
        type: 'varchar', // tipo de campo de la bdd
        length: 60, // longitud de campo
        nullable: false, // si es nullable
    })
    apellidos: string; // nombre del objeto

    @Column({
        name: 'user_rol',//nombre del campo de la bdd
        type: 'varchar', // tipo de campo de la bdd
        length: 1, // longitud de campo
        nullable: false, // si es nullable
        default: 'U', // valor por defecto
        // Comentario en la base de datos
        comment: 'U = usuario; A= administrador'
    })
    rol: string; // nombre del objeto
}