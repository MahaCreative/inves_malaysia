import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:10
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:10
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:10
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:10
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:10
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:10
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:10
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:15
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:15
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:15
 * @route '/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:15
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: login.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:15
 * @route '/login'
 */
        loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: login.url(options),
            method: 'post',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\LoginController::logout
 * @see app/Http/Controllers/LoginController.php:36
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LoginController::logout
 * @see app/Http/Controllers/LoginController.php:36
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::logout
 * @see app/Http/Controllers/LoginController.php:36
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LoginController::logout
 * @see app/Http/Controllers/LoginController.php:36
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LoginController::logout
 * @see app/Http/Controllers/LoginController.php:36
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:9
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:9
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:9
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:9
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:9
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:9
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:9
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:13
 * @route '/{referal_code}'
 */
export const home = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(args, options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/{referal_code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:13
 * @route '/{referal_code}'
 */
home.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return home.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:13
 * @route '/{referal_code}'
 */
home.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:13
 * @route '/{referal_code}'
 */
home.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:13
 * @route '/{referal_code}'
 */
    const homeForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:13
 * @route '/{referal_code}'
 */
        homeForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:13
 * @route '/{referal_code}'
 */
        homeForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:12
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\DashboardController::prosesDeposist
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
export const prosesDeposist = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: prosesDeposist.url(options),
    method: 'post',
})

prosesDeposist.definition = {
    methods: ["post"],
    url: '/proses-deposit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DashboardController::prosesDeposist
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
prosesDeposist.url = (options?: RouteQueryOptions) => {
    return prosesDeposist.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::prosesDeposist
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
prosesDeposist.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: prosesDeposist.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DashboardController::prosesDeposist
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
    const prosesDeposistForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: prosesDeposist.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DashboardController::prosesDeposist
 * @see app/Http/Controllers/DashboardController.php:23
 * @route '/proses-deposit'
 */
        prosesDeposistForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: prosesDeposist.url(options),
            method: 'post',
        })
    
    prosesDeposist.form = prosesDeposistForm
/**
* @see \App\Http\Controllers\DashboardController::doneDeposit
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
export const doneDeposit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: doneDeposit.url(options),
    method: 'post',
})

doneDeposit.definition = {
    methods: ["post"],
    url: '/done-deposit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DashboardController::doneDeposit
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
doneDeposit.url = (options?: RouteQueryOptions) => {
    return doneDeposit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::doneDeposit
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
doneDeposit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: doneDeposit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DashboardController::doneDeposit
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
    const doneDepositForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: doneDeposit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DashboardController::doneDeposit
 * @see app/Http/Controllers/DashboardController.php:128
 * @route '/done-deposit'
 */
        doneDepositForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: doneDeposit.url(options),
            method: 'post',
        })
    
    doneDeposit.form = doneDepositForm
/**
* @see \App\Http\Controllers\SettingWA::settingWa
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
export const settingWa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settingWa.url(options),
    method: 'get',
})

settingWa.definition = {
    methods: ["get","head"],
    url: '/setting-wa',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingWA::settingWa
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
settingWa.url = (options?: RouteQueryOptions) => {
    return settingWa.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingWA::settingWa
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
settingWa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settingWa.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingWA::settingWa
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
settingWa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settingWa.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingWA::settingWa
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
    const settingWaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: settingWa.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingWA::settingWa
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
        settingWaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settingWa.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingWA::settingWa
 * @see app/Http/Controllers/SettingWA.php:0
 * @route '/setting-wa'
 */
        settingWaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settingWa.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    settingWa.form = settingWaForm
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
/**
* @see \App\Http\Controllers\PaketTradingController::paketTrading
 * @see app/Http/Controllers/PaketTradingController.php:14
 * @route '/{referal_code}/paket-trading'
 */
export const paketTrading = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: paketTrading.url(args, options),
    method: 'get',
})

paketTrading.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/paket-trading',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaketTradingController::paketTrading
 * @see app/Http/Controllers/PaketTradingController.php:14
 * @route '/{referal_code}/paket-trading'
 */
paketTrading.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return paketTrading.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaketTradingController::paketTrading
 * @see app/Http/Controllers/PaketTradingController.php:14
 * @route '/{referal_code}/paket-trading'
 */
paketTrading.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: paketTrading.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PaketTradingController::paketTrading
 * @see app/Http/Controllers/PaketTradingController.php:14
 * @route '/{referal_code}/paket-trading'
 */
paketTrading.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: paketTrading.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PaketTradingController::paketTrading
 * @see app/Http/Controllers/PaketTradingController.php:14
 * @route '/{referal_code}/paket-trading'
 */
    const paketTradingForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: paketTrading.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PaketTradingController::paketTrading
 * @see app/Http/Controllers/PaketTradingController.php:14
 * @route '/{referal_code}/paket-trading'
 */
        paketTradingForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: paketTrading.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PaketTradingController::paketTrading
 * @see app/Http/Controllers/PaketTradingController.php:14
 * @route '/{referal_code}/paket-trading'
 */
        paketTradingForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: paketTrading.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    paketTrading.form = paketTradingForm
/**
* @see \App\Http\Controllers\MemberController::member
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
export const member = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: member.url(args, options),
    method: 'get',
})

member.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/ahli-area',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::member
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
member.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return member.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::member
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
member.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: member.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MemberController::member
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
member.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: member.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MemberController::member
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
    const memberForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: member.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MemberController::member
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
        memberForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: member.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MemberController::member
 * @see app/Http/Controllers/MemberController.php:12
 * @route '/{referal_code}/ahli-area'
 */
        memberForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: member.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    member.form = memberForm
/**
* @see \App\Http\Controllers\MemberController::searchMember
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-member-area'
 */
export const searchMember = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: searchMember.url(args, options),
    method: 'post',
})

searchMember.definition = {
    methods: ["post"],
    url: '/{referal_code}/get-member-area',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::searchMember
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-member-area'
 */
searchMember.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return searchMember.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::searchMember
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-member-area'
 */
searchMember.post = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: searchMember.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MemberController::searchMember
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-member-area'
 */
    const searchMemberForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: searchMember.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MemberController::searchMember
 * @see app/Http/Controllers/MemberController.php:17
 * @route '/{referal_code}/get-member-area'
 */
        searchMemberForm.post = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: searchMember.url(args, options),
            method: 'post',
        })
    
    searchMember.form = searchMemberForm
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
* @see \App\Http\Controllers\MemberController::showMember
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
export const showMember = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showMember.url(args, options),
    method: 'get',
})

showMember.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/ahli-area/{id_member}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::showMember
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
showMember.url = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions) => {
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

    return showMember.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace('{id_member}', parsedArgs.id_member.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::showMember
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
showMember.get = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showMember.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MemberController::showMember
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
showMember.head = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showMember.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MemberController::showMember
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
    const showMemberForm = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showMember.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MemberController::showMember
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
        showMemberForm.get = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showMember.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MemberController::showMember
 * @see app/Http/Controllers/MemberController.php:25
 * @route '/{referal_code}/ahli-area/{id_member}'
 */
        showMemberForm.head = (args: { referal_code: string | number, id_member: string | number } | [referal_code: string | number, id_member: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showMember.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showMember.form = showMemberForm
/**
* @see \App\Http\Controllers\PendaftaranController::pendaftaran
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
export const pendaftaran = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pendaftaran.url(args, options),
    method: 'get',
})

pendaftaran.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/pendaftaran-ahli',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PendaftaranController::pendaftaran
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
pendaftaran.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return pendaftaran.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PendaftaranController::pendaftaran
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
pendaftaran.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pendaftaran.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PendaftaranController::pendaftaran
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
pendaftaran.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pendaftaran.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PendaftaranController::pendaftaran
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
    const pendaftaranForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pendaftaran.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PendaftaranController::pendaftaran
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
        pendaftaranForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pendaftaran.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PendaftaranController::pendaftaran
 * @see app/Http/Controllers/PendaftaranController.php:23
 * @route '/{referal_code}/pendaftaran-ahli'
 */
        pendaftaranForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pendaftaran.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pendaftaran.form = pendaftaranForm
/**
* @see \App\Http\Controllers\PrivaccPolicyController::privacyPolicy
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
export const privacyPolicy = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(args, options),
    method: 'get',
})

privacyPolicy.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrivaccPolicyController::privacyPolicy
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
privacyPolicy.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return privacyPolicy.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrivaccPolicyController::privacyPolicy
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
privacyPolicy.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PrivaccPolicyController::privacyPolicy
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
privacyPolicy.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacyPolicy.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PrivaccPolicyController::privacyPolicy
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
    const privacyPolicyForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: privacyPolicy.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PrivaccPolicyController::privacyPolicy
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
        privacyPolicyForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacyPolicy.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PrivaccPolicyController::privacyPolicy
 * @see app/Http/Controllers/PrivaccPolicyController.php:9
 * @route '/{referal_code}/privacy-policy'
 */
        privacyPolicyForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacyPolicy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    privacyPolicy.form = privacyPolicyForm
/**
* @see \App\Http\Controllers\Office::office
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
export const office = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: office.url(args, options),
    method: 'get',
})

office.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/office',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Office::office
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
office.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return office.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Office::office
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
office.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: office.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Office::office
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
office.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: office.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Office::office
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
    const officeForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: office.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Office::office
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
        officeForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: office.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Office::office
 * @see app/Http/Controllers/Office.php:9
 * @route '/{referal_code}/office'
 */
        officeForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: office.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    office.form = officeForm
/**
* @see \App\Http\Controllers\ProfilController::profil
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
export const profil = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profil.url(args, options),
    method: 'get',
})

profil.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/profil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfilController::profil
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
profil.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return profil.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfilController::profil
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
profil.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profil.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfilController::profil
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
profil.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profil.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfilController::profil
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
    const profilForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profil.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfilController::profil
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
        profilForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profil.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfilController::profil
 * @see app/Http/Controllers/ProfilController.php:9
 * @route '/{referal_code}/profil'
 */
        profilForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profil.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profil.form = profilForm
/**
* @see \App\Http\Controllers\DasarPrinsipController::dasarPrinsip
 * @see app/Http/Controllers/DasarPrinsipController.php:11
 * @route '/{referal_code}/dasar-prinsip'
 */
export const dasarPrinsip = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dasarPrinsip.url(args, options),
    method: 'get',
})

dasarPrinsip.definition = {
    methods: ["get","head"],
    url: '/{referal_code}/dasar-prinsip',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DasarPrinsipController::dasarPrinsip
 * @see app/Http/Controllers/DasarPrinsipController.php:11
 * @route '/{referal_code}/dasar-prinsip'
 */
dasarPrinsip.url = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return dasarPrinsip.definition.url
            .replace('{referal_code}', parsedArgs.referal_code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DasarPrinsipController::dasarPrinsip
 * @see app/Http/Controllers/DasarPrinsipController.php:11
 * @route '/{referal_code}/dasar-prinsip'
 */
dasarPrinsip.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dasarPrinsip.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DasarPrinsipController::dasarPrinsip
 * @see app/Http/Controllers/DasarPrinsipController.php:11
 * @route '/{referal_code}/dasar-prinsip'
 */
dasarPrinsip.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dasarPrinsip.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DasarPrinsipController::dasarPrinsip
 * @see app/Http/Controllers/DasarPrinsipController.php:11
 * @route '/{referal_code}/dasar-prinsip'
 */
    const dasarPrinsipForm = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dasarPrinsip.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DasarPrinsipController::dasarPrinsip
 * @see app/Http/Controllers/DasarPrinsipController.php:11
 * @route '/{referal_code}/dasar-prinsip'
 */
        dasarPrinsipForm.get = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dasarPrinsip.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DasarPrinsipController::dasarPrinsip
 * @see app/Http/Controllers/DasarPrinsipController.php:11
 * @route '/{referal_code}/dasar-prinsip'
 */
        dasarPrinsipForm.head = (args: { referal_code: string | number } | [referal_code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dasarPrinsip.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dasarPrinsip.form = dasarPrinsipForm