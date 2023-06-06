import { Controller, Get, Put, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { settingsService } from './settings.service';
import { settingsPostReqDto } from './dto/request/settings.post.dto';
import { settingsPutReqDto } from './dto/request/settings.put.dto';
import { settingsQueryDto } from './dto/request/settings.query.dto';


@Controller('settings')
export class settingsController {
	constructor(private readonly settingsService: settingsService) {}

	@Get()
	async getsettings(
		@Query() query: settingsQueryDto,
	) {
		return await this.settingsService.get(query);
	}

	@Get(':id')
	async getOnesettings(
		@Param('id') settingsId: string,
	) {
		return await this.settingsService.getOne(settingsId);
	}

	@Post()
	async createsettings(
		@Body() data: settingsPostReqDto,
	) {
		return await this.settingsService.create(data);
	}


}
