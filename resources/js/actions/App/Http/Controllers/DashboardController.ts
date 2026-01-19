import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\DashboardController::store
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/proses-deposit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DashboardController::store
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::store
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DashboardController::store
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DashboardController::store
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DashboardController::done
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
export const done = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: done.url(options),
    method: 'post',
})

done.definition = {
    methods: ["post"],
    url: '/done-deposit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DashboardController::done
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
done.url = (options?: RouteQueryOptions) => {
    return done.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::done
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
done.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: done.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DashboardController::done
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
    const doneForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: done.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DashboardController::done
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
        doneForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: done.url(options),
            method: 'post',
        })
    
    done.form = doneForm
/**
* @see \App\Http\Controllers\DashboardController::member_delete
 * @see app/Http/Controllers/DashboardController.php:159
 * @route '/admin/member/{id}'
 */
export const member_delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: member_delete.url(args, options),
    method: 'delete',
})

member_delete.definition = {
    methods: ["delete"],
    url: '/admin/member/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DashboardController::member_delete
 * @see app/Http/Controllers/DashboardController.php:159
 * @route '/admin/member/{id}'
 */
member_delete.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return member_delete.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::member_delete
 * @see app/Http/Controllers/DashboardController.php:159
 * @route '/admin/member/{id}'
 */
member_delete.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: member_delete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DashboardController::member_delete
 * @see app/Http/Controllers/DashboardController.php:159
 * @route '/admin/member/{id}'
 */
    const member_deleteForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: member_delete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DashboardController::member_delete
 * @see app/Http/Controllers/DashboardController.php:159
 * @route '/admin/member/{id}'
 */
        member_deleteForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: member_delete.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    member_delete.form = member_deleteForm
/**
* @see \App\Http\Controllers\DashboardController::profit_delete
 * @see app/Http/Controllers/DashboardController.php:170
 * @route '/admin/profit/{id}'
 */
export const profit_delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: profit_delete.url(args, options),
    method: 'delete',
})

profit_delete.definition = {
    methods: ["delete"],
    url: '/admin/profit/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DashboardController::profit_delete
 * @see app/Http/Controllers/DashboardController.php:170
 * @route '/admin/profit/{id}'
 */
profit_delete.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return profit_delete.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::profit_delete
 * @see app/Http/Controllers/DashboardController.php:170
 * @route '/admin/profit/{id}'
 */
profit_delete.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: profit_delete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DashboardController::profit_delete
 * @see app/Http/Controllers/DashboardController.php:170
 * @route '/admin/profit/{id}'
 */
    const profit_deleteForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: profit_delete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DashboardController::profit_delete
 * @see app/Http/Controllers/DashboardController.php:170
 * @route '/admin/profit/{id}'
 */
        profit_deleteForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: profit_delete.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    profit_delete.form = profit_deleteForm
const DashboardController = { index, store, done, member_delete, profit_delete }

export default DashboardController