import experiencias from '../mocks/experiencias.json'

class ExperienciaRepository {
    async getExperiencias() {
        const exp = experiencias
        return exp
    }
}

export default new ExperienciaRepository();