import { Stat } from './stat.model';
import { Skill } from './skill.model';

export class Character {
    constructor(
        public name: string,
        public level: number,
        public bio: string,
        public portrait: string,
        public stats: Stat[],
        public skills: Skill[]) {
    }
}