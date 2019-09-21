var user={
    
Login:function(name,password,callback){
    var uName =name;
    var uPassword = password;
    $.post('http://localhost:8000/admin/login', {
        user_name: uName,
        password: uPassword
    }, function (str) {
      
        callback(str);

    });





},





};