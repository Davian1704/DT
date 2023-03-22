function remove(index) {

    remove = function(index) {
        console.log(index);
        return axios.delete("http://localhost:3000/users/:" +index )
    }

    return {
        delete: delete(index)
    }
}