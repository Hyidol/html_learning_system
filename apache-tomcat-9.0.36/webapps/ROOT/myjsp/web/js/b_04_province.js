var citys = [
    {"name":"广东省","info":['广州市','深圳市','佛山市', '珠海市'],"food":['马蹄糕','煲仔饭','肠粉','虾饺','叉烧包','双皮奶'],"foodsrc":["../img/food_马蹄糕.png"]},
    {"name":"四川省","info":['成都市','德阳市','绵阳市','广元市'],"food":['龙抄手','水煮牛肉','担担面','口水鸡','夫妻肺片','棒棒鸡'],"foodsrc":["../img/food_龙抄手.png"]},
    {"name":"云南省","info":['昆明市','大理市','丽江市'],"food":['菠萝饭','过桥米线','乌鸡汤','汽锅鸡','鲜花饼','酸角糕'],"foodsrc":["../img/food_菠萝饭.png"]},
    {"name":"贵州省","info":['贵阳市','遵义市'],"food":['丝娃娃','花江狗肉','羊肉粉','米豆腐','波波糖','老干妈'],"foodsrc":["../img/food_丝娃娃.png"]}
];

function show() {
    for (var i in citys) {
        document.getElementById("province").innerHTML += "<option>" + citys[i].name + "</option>";
    }
}

function loadCity() {
    var province = document.getElementById("province").value;
    var city = document.getElementById("city").value;
    for (var i in citys) {
        if(province === citys[i].name){
            document.getElementById("city").options.length = 1;
            for (var j in citys[i].info) {
                document.getElementById("city").innerHTML += "<option>" + citys[i].info[j] + "</option>";
            }

            document.getElementById("food").options.length = 1;
            for (var j in citys[i].food) {
                document.getElementById("food").innerHTML += "<option>" + citys[i].food[j] + "</option>";
                document.getElementById("foodimg").src = citys[i].foodsrc;
            }
        }
    }
}

