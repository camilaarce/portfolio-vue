import educacion from '../mocks/educacion.json'

class EducacionRepository {
    async getEducacion() {
        const edu = educacion
        return edu
    }
}

export default new EducacionRepository();