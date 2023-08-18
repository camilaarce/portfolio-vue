import skills from '../mocks/skills.json'

class SkillsRepository {
    async getSkills() {
        const skill = skills
        return skill
    }
}

export default new SkillsRepository();