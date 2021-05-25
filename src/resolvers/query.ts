import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
    Query: {
        hola(): string {
            return 'Hola Mundo!'
        },
        saludos(): string {
            return `Saludos desde GraphQL!!!!`
        },
        holaConNombre(__:void, { nombre }, context: any): string {
            return `Hola Mundo ${nombre}`
        },
        holaAlCursoGraphQL(): string {
            return `Hola desde el curso de GraphQL!`
        }
    }
}

export default query