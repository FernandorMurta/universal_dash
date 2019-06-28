import {AbstractInterface} from '../abstract/abstract-interface';

export interface LeagueList extends AbstractInterface {
	name: string;
	startDate: Date;
	endDate: Date;
}
