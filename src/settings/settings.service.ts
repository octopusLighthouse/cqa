import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { settingsPutReqDto } from './dto/request/settings.put.dto';
import { Settings } from './entities/settings.entity';
import { settingsRepository } from './settings.repository';
import { settingsPostReqDto } from './dto/request/settings.post.dto';
import { settingsQueryDto } from './dto/request/settings.query.dto';
import { Pagination } from '../common/pagination';

@Injectable()
export class settingsService {
	constructor(
		@InjectRepository(settingsRepository)
		private readonly settingsRepository: settingsRepository,
	) {
	}

	async get(
		query: settingsQueryDto,
	) {
		const pagination = new Pagination(query.page, query.pageSize, 25);
		const [
			data,
			count,
		] = await this.settingsRepository.getsettingss(
			pagination,
			query.filter,
		);

		return {
			count,
			page: pagination.getPage(),
			pageSize: pagination.getPageSize(),
			data,
		}
	}
	
	async getOne(id: string) {
		return await this.settingsRepository.getsettings(id);
	}
	
	async create(data: settingsPostReqDto) {
		const settings = new Settings(data);
		return await this.settingsRepository.createsettings(settings);
	}
	
	async update(id: string, data: settingsPutReqDto) {
		const settings = new Settings(data);
		return await this.settingsRepository.updatesettings(id, settings);
	}
	
	async delete(id: string) {
		return await this.settingsRepository.deletesettings(id);
	}
}
