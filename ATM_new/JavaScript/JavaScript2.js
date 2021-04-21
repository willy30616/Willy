
$(function () {
    // console.log('---script2---');
    //登入後的btn操作 
    $('.btn2').on("click", function () {
        // console.log('display2');
        var temp = this.innerText;
        arry += temp;
        $('#display2').val(arry);
    });
    //儲存現金 enter_d
    $('#enter_d').on("click", function () {
        //取得display2的值
        var d = $('#display2').val();

        if (localStorage.getItem('state') == 1) {
            console.log('state:1');
            var total = eval(Number(localStorage.getItem('Price1')) + Number(d));
            localStorage.setItem('Price1', total);
            console.log(localStorage.getItem("Price1"));
            Card1();
        }
        else if (localStorage.getItem('state') == 2) {
            console.log('state:2');
            var total = eval(Number(localStorage.getItem('Price2')) + Number(d));
            localStorage.setItem('Price2', total);
            console.log(localStorage.getItem("Price2"));
            Card2();
        }

        cc();
    });
    //提取現金enter_w
    $('#enter_w').on("click", function () {
        console.log(Number(localStorage.getItem('Price1')));
        //取得display2的值
        var d = $('#display2').val();

        if (localStorage.getItem('state') == 1) {
            console.log('state:1');
            var total = eval(Number(localStorage.getItem('Price1')) - Number(d));
            localStorage.setItem('Price1', total);
            console.log(localStorage.getItem("Price1"));
            Card1();
        }
        else if (localStorage.getItem('state') == 2) {
            console.log('state:2');
            var total = eval(Number(localStorage.getItem('Price2')) - Number(d));
            localStorage.setItem('Price2', total);
            console.log(localStorage.getItem("Price2"));
            Card2();
        }

        cc();
    });
    //轉帳enter_t
    $('#enter_t').on("click", function () {
        var d = $('#display2').val();
        var d3 = $('#display3').val();

        if (localStorage.getItem('state') == 1) {
            // console.log('state:1');
            if ((d3 == "" | d3 == undefined) | (d3 == null)) {
                alert('輸入錯誤請重新數入');

                cc();
            } else if (d3 == myAc1) {
                alert('不可轉給自己');

                cc();
            } else if (d3 == myAc2 & d != "") {
                console.log('進入計算');
                var total = eval(Number(localStorage.getItem('Price1')) - Number(d));
                var total2 = eval(Number(localStorage.getItem('Price2')) + Number(d));
                localStorage.setItem('Price1', total);
                localStorage.setItem('Price2', total2);
                // console.log(localStorage.getItem("Price1"));
                // console.log(total2);
                cc();
                alert('轉帳成功!');
                Card1();
            }
            else {
                console.log('end');
                alert('輸入錯誤請重新數入');
                cc();
            }


            // console.log( d );
            // if(d == myAc1)
            // console.log( (localStorage.getItem('Price1')) );
            // Card1();
        }
        else if (localStorage.getItem('state') == 2) {
            // console.log('state:2');
            if ((d3 == "" | d3 == undefined) | (d3 == null)) {
                alert('輸入錯誤請重新數入');
                cc();
            } else if (d3 == myAc2) {
                alert('不可轉給自己');
                cc();
            } else if (d3 == myAc1 & d != "") {
                
                console.log('進入計算');
                var total = eval(Number(localStorage.getItem('Price2')) - Number(d));
                console.log(total);
                var total2 = eval(Number(localStorage.getItem('Price1')) + Number(d));
                console.log(total2);
                localStorage.setItem('Price1', total2);
                localStorage.setItem('Price2', total);
                Card2();
            }
            else {
                console.log('end');
                alert('輸入錯誤請重新數入');
                cc();
            }
        }

        cc();
    });
});


