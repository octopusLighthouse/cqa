import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Settings } from './entities/settings.entity';
import { Pagination } from '../common/pagination';
import { settingsQueryFilterDto } from './dto/request/settings.query.filter.dto';

export class settingsRepository extends Repository<Settings> {
	constructor(
		@InjectRepository(Settings)
		private settingsRepository: Repository<Settings>
	) {
		super(settingsRepository.target, settingsRepository.manager, settingsRepository.queryRunner);
	}
	
	async getsettings(id: string) {
		return await this.settingsRepository.findBy({ id });
	}
	
	async getsettingss(
		pagination: Pagination,
		filter: settingsQueryFilterDto,
	) {
		const query = this.settingsRepository
			.createQueryBuilder('settings')

		return await query
			.limit(pagination.getPageSize())
			.offset(pagination.getSkip())
			.getManyAndCount();
	}
	
	async updatesettings(id: string, data: Settings) {
		return await this.settingsRepository.update({ id }, data);
	}
	
	async createsettings(data: Settings) {
		return await this.settingsRepository.save(data);
	}
	
	async deletesettings(id: string) {
		return await this.settingsRepository.delete({ id });
	}
	
}
