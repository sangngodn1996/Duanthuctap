export default function Infor (){
    this.username = "";
    this.password = "";
    this.fullname = "";

    this.setInfor = function (username, password, fullname) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
    };

    return this;
}

