import { Plugin } from "@nuxt/types"
import RepositoryImpl from "~/infra/repossitoryImpl"
import Repository from "~/repository/repository"

export interface Dependecies {
    repository: Repository
}

const plugin: Plugin = (_, inject) => {
    let repo: Repository = new RepositoryImpl();

    const deps: Dependecies = {
        repository: repo
    }

    inject('deps', deps)
}

export default plugin
