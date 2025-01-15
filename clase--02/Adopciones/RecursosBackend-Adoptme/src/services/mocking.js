import {faker} from "@faker-js/faker"; 
import { createHash } from "../utils/index.js";

class MockingService {
    static async generateMockingUsers(num) {
        const usuarios = []; 
        for (let i = 0; i < num; i++) {
            usuarios.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(), 
                email: faker.internet.email(), 
                password: await createHash("coder123"), 
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            })
        }
        return usuarios; 
    }

    static async generateMockingPets(num) {
        const mascotas = []; 
        for (let i = 0; i < num; i++) {
            mascotas.push({
                name: faker.animal.petName(),
                specie: faker.animal.cat(),
                adopted: false,
                birthDate: faker.date.past(), 
                image: "https://via.placeholder.com/150"
            })
        }
        return mascotas; 
    }

}

export default MockingService; 