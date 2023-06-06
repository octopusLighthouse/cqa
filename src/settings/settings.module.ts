import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { settingsController } from './settings.controller';
import { settingsService } from './settings.service';
import { Settings } from './entities/settings.entity';
import { settingsRepository } from './settings.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Settings,
		]),
	],
	controllers: [
		settingsController,
	],
	providers: [
		settingsService,
		settingsRepository,
	],
})
export class SettingsModule {}
