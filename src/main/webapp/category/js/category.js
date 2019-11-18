$(function () {
    $("input.sortBarPrice").keyup(function () {
        //获取第一个匹配元素的字符串
        var num = $(this).val();
        //如果字符串长度为0，则显示所有物品，return
        if (num.length == 0) {
            $("div.productUnit").show();
            return;
        }

        //否则将字符串转化为数字
        num = parseInt(num);
        //如果数字不为正数或者数字不存在，则num赋值为1
        if (isNaN(num) || (num <= 0))
            num = 1;
        //将num设置到获取字符串的所有匹配元素
        $(this).val(num);

        //获取第一个输入框的值
        var begin = $("input.beginPrice").val();
        //第二个值
        var end = $("input.endPrice").val();
        //如果有一个不为空则商品先隐藏
        if (!isNaN(begin) && !isNaN(end)) {
            $("div.productUnit").hide();
            //遍历每个商品单元
            $("div.productUnit").each(function () {
                // 获取price属性的值
                var price = $(this).attr("price");
                // 转化为数字
                price = new Number(price);
                // 显示begin——end区间的Unit
                if (price <= end && price >= begin)
                    $(this).show();
            });
        }
    });
});