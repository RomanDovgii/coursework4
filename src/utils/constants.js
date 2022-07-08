export const AppRoute = {
    MAIN: `/`,
    WORKS: `/works/:id`,
    UPLOAD: `/upload`,
    WORK: `/work/:id`,
}

export const RouteNames = {
    MAIN: `Главная`,
    WORKS: `Работы`
}

export const ApiInfo = {
    BASE_URL: `https://62c824788c90491c2cafb1fb.mockapi.io/api/check`,
    TIMEOUT: 5000,
}

export const ApiEndpoints = {
    WORKS: `/works`,
    WORK: `/works/`,
}

export const ActionType = {
    LOAD_WORKS: `LOAD_WORKS`,
    LOAD_WORK: `LOAD_WORK`,
    UPLOAD_WORK: `UPLOAD_WORK`,
    CHANGE_PAGE: `CHANGE_PAGE`,
    SORT: `SORT`
}