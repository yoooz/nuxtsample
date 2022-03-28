import { Dependecies } from "./plugins/dependencies";

declare module '@nuxt/types' {
    interface Context {
        $deps: Dependecies
    }
}