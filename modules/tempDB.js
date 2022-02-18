var User = new Array();

module.exports = {
    addUser : function (AP, userIP) {
        User.push(userIP);
    },

    removeUser : function(AP, userIP) {
        var idx = User.indexOf(userIP);
        if(idx > -1 ){
            User.splice(idx,1);
            console.log(userIP + " 제거")
            console.log("남은 유저 : ", User);
        }
        else {
            console.log(userIP + " 존재 x")
            console.log("남은 유저 : ", User);
        }
    },

    getUserLength : function () {
        return User.length;
    }
}