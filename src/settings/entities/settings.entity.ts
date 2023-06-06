import { Column, Entity, OneToMany, OneToOne, ManyToOne, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';


@Entity()
export class Settings {
	@PrimaryColumn({ type: 'varchar', length: 255 })
	id: string;

	@Column({ type: 'varchar', length: 255 })
	url: string;

	@Column({ type: 'integer' })
	period: number;

	@Column({ type: 'integer' })
	acceptanceTime: number;

	@Column({ type: 'varchar', length: 255 })
	email: string;

	@Column({ type: 'varchar', length: 255 })
	phone: string;

	@Column({ type: 'timestamp' })
	createdAt: Date;

	constructor(data: any) {
		this.id = data?.id || uuidv4();
		this.url = data?.url;
		this.period = data?.period;
		this.acceptanceTime = data?.acceptanceTime;
		this.email = data?.email;
		this.phone = data?.phone;
		this.createdAt = data?.createdAt || moment.utc().toDate();
	}
}
