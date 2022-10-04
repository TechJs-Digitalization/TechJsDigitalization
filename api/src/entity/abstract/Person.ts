import { Column } from "typeorm";

export abstract class Person {
    @Column({
        type: "varchar",
        length: 30,
        nullable: false
    })
    firstName: string

    @Column({
        type: "varchar",
        length: 30,
        nullable: false
    })
    lastName: string

    @Column({
        type: "date"
    })
    BirthDate: Date;

    constructor(firstName: string, lastName: string, BirthDate: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.BirthDate = BirthDate;
    }
}