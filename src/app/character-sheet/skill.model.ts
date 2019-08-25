import { Stat } from './stat.model';

export class Skill extends Stat {
    constructor(
        public name: string,
        public description: string,
        public trueLevel: number, 
        public effectiveLevel: number,
        public effectiveStat: string) {
            super(name, description, trueLevel, effectiveLevel);
        }

}