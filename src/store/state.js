let defaultCity = '秦皇岛'
try {
    defaultCity = localStorage.city || '秦皇岛'
} catch (e) {

}

export default {
    city: defaultCity
}
