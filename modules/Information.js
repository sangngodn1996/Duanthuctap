import Infor from "./models/DTO.js";

var app = angular.module('myApp', []);
app.controller('appCtrl', function ($scope, $http) {
    $scope.information = [];
    $scope.masp='';
    $scope.tensp='';
    $scope.gia='';
    $scope.noidung='';
    $scope.user='';
    getInfor();
    //đây là xem thông tin
    function getInfor() {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/viewproduct',
        }).then(function (response) {
            $scope.information = response.data;

            console.log($scope.information)
        }, function (error) {
            console.log(error);
        });
    }

    //đây là thêm mới
    $scope.submit = function () {
        const dto = new Infor();
        dto.setInfor($scope.masp, $scope.tensp, $scope.gia,$scope.noidung );
        console.log(dto)
        $http({
            method: 'POST',
            url: 'http://localhost:8080/newproduct',
            data: JSON.stringify(dto)
        }).then(function (response) {
            getInfor();
            console.log(response)
        }, function (error) {
            console.log(error);
        });
        
    }

    $scope.getData = function(us){
        $scope.masp=us.masp;
        $scope.tensp=us.tensp;
        $scope.gia=us.gia;
        $scope.noidung=us.noidung;
        console.log(us)
    }
    //đây là đổ lên form
    // $scope.edit = function (us) {
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8080/view',
    //     }).then(function (response) {
    //         $scope.information = response.data[index];

    //         console.log($scope.information)
    //     }, function (error) {
    //         console.log(error);
    //     });
    // }
    
    //Xoá thông tin
    $scope.delUser = function (user) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:8080/deleteproduct/' + user.masp,
        }).then(function (response) {
            getInfor();
            console.log(response)
        }, function (error) {
            console.log(error);
        });
        console.log(user.masp);
    }
    //đây là xoá
    // $scope.getInfor = function () {
    //     const dto = new Infor();
    //     dto.getInfor($scope.username, $scope.password, $scope.fullname);
    //     console.log(dto)
    //     $http({
    //         method: 'DELETE',
    //         url: 'http://localhost:8080/delete',
    //     }).then(function (response) {
    //         $scope.information = response.data;

    //         console.log($scope.information)
    //     }, function (error) {
    //         console.log(error);
    //     });
    // }

    });


