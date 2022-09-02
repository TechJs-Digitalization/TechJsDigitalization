import { Check, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subscription } from "./Subscription";

@Entity()
@Check('"available">=0')
@Check('"cost">=0')
export class SubscriptionType{
    @PrimaryGeneratedColumn()
    id: number;

    //subscription's validity (nbr of month)
    @Column()
    validity: number;

    //max loaning book number per month
    @Column()
    maxBookPerMonth: number;

    @Column()
    cost: number;

    @OneToMany(()=>Subscription, (sub: Subscription)=>sub.type)
    subscriptions: Subscription[];

    constructor(validity: number, maxBookPerMonth: number, cost: number){
        this.validity= validity;
        this.maxBookPerMonth= maxBookPerMonth;
        this.cost= cost;
    }
}