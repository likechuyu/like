var user = {

    Login: function (name, password, callback) {
        var uName = name;
        var uPassword = password;
        $.post(interIP+'/admin/login', {
            user_name: uName,
            password: uPassword
        }, function (str) {
            callback(str);
        });
    },
    Logout: function (callback) {
        $.post(interIP+'/admin/logout', function (str) {
            callback(str);
        });
    },
    Getuser: function (callback) {
        $.get(
            interIP+'/admin/getuser',
            function (str) {
                callback(str);
            }
        )
    }
};