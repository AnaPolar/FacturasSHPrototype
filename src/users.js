const users_data = [
    {
        "username": "1@live.com",
        "password" : "1234",
        "position" : "ejecutivo_glosa"
    },
    {
        "username": "2@live.com",
        "password" : "1234",
        "position" : "ejecutivo_clasificacion"
    },
    {
        "username": "4@live.com",
        "password" : "1234",
        "position" : "jefe_clasificacion"
    },
    {
        "username": "5@live.com",
        "password" : "1234",
        "position" : "jefe_glosa"
    },
    {
        "username": "6@live.com",
        "password" : "1234",
        "position" : "rrhh"
    }
];
function data() {
    window.localStorage.removeItem("all_users");
    window.localStorage.setItem("all_users", JSON.stringify(users_data));
}
