export default function Infor (){
    this.masp = "";
    this.tensp = "";
    this.gia = "";
    this.noidung = "";

    this.setInfor = function (masp, tensp, gia, noidung) {
        this.masp = masp;
        this.tensp = tensp;
        this.gia = gia;
        this.noidung = noidung;
    };

    return this;
}

