var arry = [];
var myPasword1 = '123456';
var myPasword2 = '666666';
var myAc1 = '123456';
var myAc2 = '666666';
//LC 存在本地數據
var L = localStorage;

//jq版本  開始頁面==>登入頁面
$(function () {   /* $('document').ready(); */
    // console.log('---script1---');
    if (typeof (Storage !== "undefined")) {
        //判斷status 1|2
        if (localStorage.getItem('state') == 1) {
            console.log('state:1');
            Card1();
        } else if (localStorage.getItem('state') == 2) {
            console.log('state:2');
            Card2();
        }

        //卡片一Card1
        $('#card1').on('click', function () {
            localStorage.setItem('state', '1');
            console.log( "現在state:" + localStorage.getItem(`state`))
            if (localStorage.getItem('Price1') != null) {
                localStorage.getItem('Price1');
            } else {
                localStorage.setItem('Price1', 1000);
            }
            // localStorage.setItem('state', '1');

            // console.log(localStorage.getItem('state'));
            // console.log(localStorage.getItem('Price1'));
            Card1();
        });

        //卡片二Card2
        $('#card2').on('click', function () {
            localStorage.setItem('state', '2');
            console.log("現在state:" + localStorage.getItem('state'))
            // localStorage.setItem('state', '2')
            // console.log(localStorage.getItem('state'));
            // Card2();

            // localStorage.setItem('Price2', 2000);
            if (localStorage.getItem('Price2') != null) {
                localStorage.getItem('Price2');
            } else {
                localStorage.setItem('Price2', 2000);
            }
            // console.log(localStorage.getItem('state'));
            // console.log(localStorage.getItem('Price2'));
            
            Card2();
        });

    } else {
        console.log('無法使用LC');
    }
    //印出dispay上的數字
    $('.btn').on("click", function () {
        var temp = this.innerText;
        arry += temp;
        $('#display').val(arry);
        console.log('display1');
    });
    //確認(進行認證)
    $('#enter').on("click", function () {
        var display = $('#display').val();
        console.log(display.length);
        if (display.length != 6) {
            console.log(display);
            alert('請輸入正確的六位數字!');
            cc();
        } else {
            var ps = String(display);
            checkAccount(ps);
        }

    });
    //檢查密碼正確
    function checkAccount(ps) {
        // console.log(ps);
        //判斷status 1|2
        if (localStorage.getItem('state') == 1) {
            console.log('state:1');
            if (ps === myPasword1) {
                alert('密碼正確!');
                window.location.href = "./Accont.html";
            } else {
                cc();
                console.log('cc()');
                alert('密碼錯誤!');
                window.location.href = "./Login.html";
            }

        } else if (localStorage.getItem('state') == 2) {
            console.log('state:2');
            if (ps === myPasword2) {
                alert('密碼正確!');
                window.location.href = "./Accont.html";
            } else {
                cc();
                console.log('cc()');
                alert('密碼錯誤!');
                window.location.href = "./Login.html";
            }
        }
    }
    //取消(直接跳出到主頁面)
    $('#cancel').on("click", function () {
        if (confirm('是否要結束程序') == true) {
            window.location.href = "./index.html";
            alert('操作結束，退出卡片');
            return true;
        } else {
            return false;
        }
    });
    //訂正
    $('#clear').on("click", function () {
        cc();
    });
    //主頁面 跳轉login
    $('#chbtn').on("click", function () {
        window.location.href = "./Login.html";
    });
    //檢查餘額#CA
    $('#CA').on('click', function () {
        window.location.href = './CheckAccount.html';
    });
    //轉帳Trans
    $('#Trans').on('click', function () {
        window.location.href = './Transfer.html';
    });
    //提現Withdraw
    $('#Withdraw').on('click', function () {
        window.location.href = './Withdraw.html';
    });
    //存款Deposit
    $('#Deposit').on('click', function () {
        window.location.href = './Deposit.html';
    });
    //返回
    $('#back').on('click', function () {
        window.location.href = "./Accont.html";
    });
});

//卡片一Card1()
function Card1() {
    // console.log('card1()');


    $('#CardName').text(myAc1);
    $('#CardPs').text(myPasword1);

    $('#CardPice').text(localStorage.getItem('Price1'));
    $('#CK_LabPrice').text(localStorage.getItem('Price1'));
    $('#CK_LabUseP').text(localStorage.getItem('Price1'));

};
//卡片一Card2()
function Card2() {
    $('#CardName').text(myAc2);
    $('#CardPs').text(myPasword2);

    $('#CardPice').text(localStorage.getItem('Price2'));
    $('#CK_LabPrice').text(localStorage.getItem('Price2'));
    $('#CK_LabUseP').text(localStorage.getItem('Price2'));
};

//清除function
function cc() {
    arry = [];
    $('#display').val(arry);
    $('#display2').val(arry);
    $('#display3').val(arry);
};

//js版本
// function login(){
//     console.log('login');
//     document.getElementById('btn_login').innerHTML="<a href='./index.html'>登入</a>"
// }


