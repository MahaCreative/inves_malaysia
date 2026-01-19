import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SettingWA::index
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/setting-wa',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingWA::index
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingWA::index
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingWA::index
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingWA::index
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingWA::index
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingWA::index
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
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
* @see \App\Http\Controllers\SettingWA::store
 * @see app/Http/Controllers/SettingWA.php:10
 * @route '/update-whatsapp'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/update-whatsapp',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingWA::store
 * @see app/Http/Controllers/SettingWA.php:10
 * @route '/update-whatsapp'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingWA::store
 * @see app/Http/Controllers/SettingWA.php:10
 * @route '/update-whatsapp'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SettingWA::store
 * @see app/Http/Controllers/SettingWA.php:10
 * @route '/update-whatsapp'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SettingWA::store
 * @see app/Http/Controllers/SettingWA.php:10
 * @route '/update-whatsapp'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const SettingWA = { index, store }

export default SettingWA