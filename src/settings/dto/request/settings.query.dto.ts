import { settingsQueryFilterDto } from './settings.query.filter.dto';

export class settingsQueryDto {
	page: number;
	pageSize: number;
	filter: settingsQueryFilterDto;
}
