export default {
    posts(postId) {
        return new Promise((resolve) => {
            let URL = "https://jsonplaceholder.typicode.com/posts/"
            if (postId) {
                URL += postId + "/"
            }

            // FETCH DATA
            fetch(URL)
                .then(function(response) {
                  return response.json()
                })
                .then(function(data) {
                    if (postId) {
                        resolve({
                            post: data
                        })
                    } else {
                        resolve({
                            posts: data
                        })
                    }
                })
        })
    },

    users(userId) {
        return new Promise((resolve) => {
            let URL = "https://jsonplaceholder.typicode.com/users/"
            if (userId) {
                URL += userId + "/"
            }

            // FETCH DATA
            fetch(URL)
                .then(function(response) {
                  return response.json()
                })
                .then(function(data) {
                    if (userId) {
                        resolve({
                            user: data
                        })
                    } else {
                        resolve({
                            users: data
                        })
                    }
                })
        })
    },

    postComments(postId) {
        return new Promise((resolve) => {
            let URL = "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments/"

            // FETCH DATA
            fetch(URL)
                .then(function(response) {
                  return response.json()
                })
                .then(function(data) {
                    resolve({
                        comments: data
                    })
                })
        })
    },
}

