import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProfilController::index
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
export const index = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/profil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfilController::index
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
index.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { referal_code: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    referal_code: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        referal_code: args.referal_code,
                }

    return index.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfilController::index
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
index.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfilController::index
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
index.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfilController::index
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
    const indexForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfilController::index
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
        indexForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfilController::index
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
        indexForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const ProfilController = { index }

export default ProfilController