import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Office::index
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
export const index = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/office',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Office::index
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
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
* @see \App\Http\Controllers\Office::index
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
index.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Office::index
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
index.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Office::index
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
    const indexForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Office::index
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
        indexForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Office::index
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
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
const Office = { index }

export default Office