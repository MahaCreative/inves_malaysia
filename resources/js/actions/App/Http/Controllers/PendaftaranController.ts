import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PendaftaranController::index
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
export const index = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/pendaftaran-ahli',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PendaftaranController::index
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
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
* @see \App\Http\Controllers\PendaftaranController::index
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
index.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PendaftaranController::index
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
index.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PendaftaranController::index
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
    const indexForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PendaftaranController::index
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
        indexForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PendaftaranController::index
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
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
/**
* @see \App\Http\Controllers\PendaftaranController::store
 * @see app/Http/Controllers/PendaftaranController.php:31
 * @route '/{referal_code}/store-pendaftaran-member'
 */
export const store = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/{referal_code}/store-pendaftaran-member',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PendaftaranController::store
 * @see app/Http/Controllers/PendaftaranController.php:31
 * @route '/{referal_code}/store-pendaftaran-member'
 */
store.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PendaftaranController::store
 * @see app/Http/Controllers/PendaftaranController.php:31
 * @route '/{referal_code}/store-pendaftaran-member'
 */
store.post = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PendaftaranController::store
 * @see app/Http/Controllers/PendaftaranController.php:31
 * @route '/{referal_code}/store-pendaftaran-member'
 */
    const storeForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PendaftaranController::store
 * @see app/Http/Controllers/PendaftaranController.php:31
 * @route '/{referal_code}/store-pendaftaran-member'
 */
        storeForm.post = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
const PendaftaranController = { index, store }

export default PendaftaranController