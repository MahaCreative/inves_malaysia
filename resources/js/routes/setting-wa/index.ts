import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
const settingWa = {
    store: Object.assign(store, store),
}

export default settingWa