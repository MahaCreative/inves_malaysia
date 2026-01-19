import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PrivaccPolicyController::index
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
export const index = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrivaccPolicyController::index
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
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
* @see \App\Http\Controllers\PrivaccPolicyController::index
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
index.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PrivaccPolicyController::index
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
index.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PrivaccPolicyController::index
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
    const indexForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PrivaccPolicyController::index
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
        indexForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PrivaccPolicyController::index
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
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
const PrivaccPolicyController = { index }

export default PrivaccPolicyController