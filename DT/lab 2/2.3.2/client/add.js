function add() {

    add = function() {
        return axios.get("http://localhost:3000/users");
    }

    return {
        add: add
    }
}