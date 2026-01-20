import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
export const index = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/ahli-area',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
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
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
index.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
index.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
    const indexForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
        indexForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
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
* @see \App\Http\Controllers\MemberController::search
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-ahli-area'
 */
export const search = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(args, options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/{referal_code}/get-ahli-area',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::search
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-ahli-area'
 */
search.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return search.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::search
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-ahli-area'
 */
search.post = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MemberController::search
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-ahli-area'
 */
    const searchForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: search.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MemberController::search
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-ahli-area'
 */
        searchForm.post = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: search.url(args, options),
            method: 'post',
        })
    
    search.form = searchForm
/**
* @see \App\Http\Controllers\MemberController::penarikan_saldo
 * @see app/Http/Controllers/MemberController.php:33
 * @route '/{referal_code}/penarikan-saldo/{id_member}'
 */
export const penarikan_saldo = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: penarikan_saldo.url(args, options),
    method: 'post',
})

penarikan_saldo.definition = {
    methods: ["post"],
    url: '/{referal_code}/penarikan-saldo/{id_member}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::penarikan_saldo
 * @see app/Http/Controllers/MemberController.php:33
 * @route '/{referal_code}/penarikan-saldo/{id_member}'
 */
penarikan_saldo.url = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    referal_code: args[0],
                    id_member: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        referal_code: args.referal_code,
                                id_member: args.id_member,
                }

    return penarikan_saldo.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace('{id_member}', parsedArgs.id_member.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::penarikan_saldo
 * @see app/Http/Controllers/MemberController.php:33
 * @route '/{referal_code}/penarikan-saldo/{id_member}'
 */
penarikan_saldo.post = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: penarikan_saldo.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MemberController::penarikan_saldo
 * @see app/Http/Controllers/MemberController.php:33
 * @route '/{referal_code}/penarikan-saldo/{id_member}'
 */
    const penarikan_saldoForm = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: penarikan_saldo.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MemberController::penarikan_saldo
 * @see app/Http/Controllers/MemberController.php:33
 * @route '/{referal_code}/penarikan-saldo/{id_member}'
 */
        penarikan_saldoForm.post = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: penarikan_saldo.url(args, options),
            method: 'post',
        })
    
    penarikan_saldo.form = penarikan_saldoForm
/**
* @see \App\Http\Controllers\MemberController::show
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
export const show = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/ahli-area/{id_member}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::show
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
show.url = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    referal_code: args[0],
                    id_member: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        referal_code: args.referal_code,
                                id_member: args.id_member,
                }

    return show.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace('{id_member}', parsedArgs.id_member.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::show
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
show.get = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MemberController::show
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
show.head = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MemberController::show
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
    const showForm = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MemberController::show
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
        showForm.get = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MemberController::show
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
        showForm.head = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const MemberController = { index, search, penarikan_saldo, show }

export default MemberController