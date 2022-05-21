(() => {
    const INIT_CITY = '臺南市';
    const cityToDist = {
        '': [''],
        '臺北市': ['', '中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
        '新北市': ['', '板橋區', '新莊區', '中和區', '永和區', '土城區', '樹林區', '三峽區', '鶯歌區', '三重區', '蘆洲區', '五股區', '泰山區', '林口區', '八里區', '淡水區', '三芝區', '石門區', '金山區', '萬里區', '汐止區', '瑞芳區', '貢寮區', '平溪區', '雙溪區', '新店區', '深坑區', '石碇區', '坪林區', '烏來區'],
        '桃園市': ['', '桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '大溪區', '龍潭區', '龜山區', '大園區', '觀音區', '新屋區', '復興區'],
        '臺中市': ['', '中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區', '和平區'],
        '臺南市': ['', '中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'],
        '高雄市': ['', '楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '旗津區', '小港區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏區'],
        '基隆市': ['', '仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'],
        '新竹市': ['', '東區', '北區', '香山區'],
        '嘉義市': ['', '東區', '西區'],
        '新竹縣': ['', '竹北市', '竹東鎮', '新埔鎮', '關西鎮', '湖口鄉', '新豐鄉', '峨眉鄉', '寶山鄉', '北埔鄉', '芎林鄉', '橫山鄉', '尖石鄉', '五峰鄉'],
        '苗栗縣': ['', '苗栗市', '頭份市', '竹南鎮', '後龍鎮', '通霄鎮', '苑裡鎮', '卓蘭鎮', '造橋鄉', '西湖鄉', '頭屋鄉', '公館鄉', '銅鑼鄉', '三義鄉', '大湖鄉', '獅潭鄉', '三灣鄉', '南庄鄉', '泰安鄉'],
        '彰化縣': ['', '彰化市', '員林市', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '大城鄉', '芳苑鄉', '竹塘鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '溪州鄉'],
        '南投縣': ['', '南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
        '雲林縣': ['', '斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '林內鄉', '古坑鄉', '大埤鄉', '莿桐鄉', '褒忠鄉', '二崙鄉', '崙背鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '元長鄉', '四湖鄉', '口湖鄉', '水林鄉'],
        '嘉義縣': ['', '太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'],
        '屏東縣': ['', '屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '霧臺鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉', '三地門鄉'],
        '宜蘭縣': ['', '宜蘭市', '頭城鎮', '羅東鎮', '蘇澳鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
        '花蓮縣': ['', '花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '富里鄉', '秀林鄉', '萬榮鄉', '卓溪鄉'],
        '臺東縣': ['', '臺東市', '成功鎮', '關山鎮', '長濱鄉', '池上鄉', '東河鄉', '鹿野鄉', '卑南鄉', '大武鄉', '綠島鄉', '太麻里鄉', '海端鄉', '延平鄉', '金峰鄉', '達仁鄉', '蘭嶼鄉'],
        '澎湖縣': ['', '馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
        '金門縣': ['', '金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
        '連江縣': ['', '南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],
    };
    const pharmacyData = [];
    let showPharmacyData = [];
    let nearlySpace = {};
    let userCity = '';
    let userDist = '';
    var latitude = 0;
    var longitude = 0;

    $(document).ready(function() {
        if ('geolocation' in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition(function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;

                callDataAPI();
            }, callDataAPI);
        } else {
            /* geolocation IS NOT available */
            callDataAPI();
        }

        document.getElementById('city').addEventListener('change', changeCityOption);
        document.getElementById('dist').addEventListener('change', changeDistOption);
    });

    function callDataAPI() {
        $.ajax({
            type: "GET",
            url: "Fstdata.csv",
            // url: "https://data.nhi.gov.tw/resource/Nhi_Fst/Fstdata.csv",
            dataType: "text",
            success: setInitStockData,
        });
    }

    function setInitStockData(csvData) {
        const splitAllData = csvData.split('\r\n');
        let splitPharmacyData = {};
        let tmpData = {};

        for (let index = 1; index < splitAllData.length; index++) {
            splitPharmacyData = splitAllData[index].split(',');
            
            if (splitPharmacyData.length !== 10) {
                break;
            }

            tmpData = {
                Code: splitPharmacyData[0],
                Name: splitPharmacyData[1],
                Address: splitPharmacyData[2],
                Longitude: splitPharmacyData[3],
                Latitude: splitPharmacyData[4],
                Phone: splitPharmacyData[5],
                Brand: splitPharmacyData[6],
                Stock: splitPharmacyData[7],
                Time: splitPharmacyData[8],
                Note: splitPharmacyData[9],
                Map: `https://www.google.com/maps/place/${splitPharmacyData[2]}`,
                Distance: distance(latitude, longitude, splitPharmacyData[4], splitPharmacyData[3], 'K'),
            }
    
            pharmacyData.push(tmpData);
        }

        pharmacyData.sort((a, b) => a.Distance - b.Distance);

        console.log(pharmacyData);

        if (latitude === 0 && longitude === 0) {
            // 設定預設要選的縣市與下拉選單
            document.getElementById('city').value = INIT_CITY;
            setDistOption(INIT_CITY);
            selectArea(INIT_CITY, '', '');
        } else {
            // 利用最近的一筆資料取出自身的位置
            getUserArea();

            // 設定預設要選的縣市與下拉選單
            document.getElementById('city').value = userCity;
            setDistOption(userCity);
            document.getElementById('dist').value = userDist;
            selectArea(userCity, userDist, '');
        }

        // 移除 Loading 頁面
        document.querySelector('.loading').classList.add('display-none');

        // 處理初始化資料
        setShowing();
    }

    function selectArea(city = '', dist = '', road = '') {
        showPharmacyData = pharmacyData.filter(data => data.Address.indexOf(city) !== -1)
        .filter(data => data.Address.indexOf(dist) !== -1)
        .filter(data => data.Address.indexOf(road) !== -1);
    }

    function setShowing() {
        const stockContainer = document.querySelector('.stock-container');
        stockContainer.innerHTML = '';
        showPharmacyData.forEach(data => stockContainer.appendChild(getStockBoxNode(data)));
        setStockQty();

        // 找最接近使用者的藥局
        // checkNearlySpace();
    }

    function setStockQty() {
        const stockQtyDom = document.querySelector('#stock-qty');
        stockQtyDom.innerHTML = showPharmacyData.length;
    }

    function getStockBoxNode(data) {
        const title = ['名稱', '地址', '電話', '快篩品牌', '庫存數量', '更新時間', '備註'];
        const titleToKey = {'名稱': 'Name', '地址': 'Address', '電話': 'Phone', '快篩品牌': 'Brand', '庫存數量': 'Stock', '更新時間': 'Time', '備註': 'Note'};
        const stockBoxNode = document.createElement('div');
        const ulNode = document.createElement('ul');
        const stobckBoxDataNode = document.createElement('div');
        const stobckBoxDataDistanceNode = document.createElement('div');
        const stobckBoxDataDistanceDataNode = document.createElement('div');
        const pNode = document.createElement('p');
        const pDistanceNode = document.createElement('p');
        const p2Node = document.createElement('p');

        stobckBoxDataNode.className = 'stock-box__data';
        stobckBoxDataDistanceNode.className = 'stock-box__distance';
        stobckBoxDataDistanceDataNode.className = 'stock-box__distance-data';
        pDistanceNode.className = 'stock-box__distance-bold-text';
        pNode.innerText = '距離';
        pDistanceNode.innerText = (latitude === 0 && latitude === 0) ? '---' : Math.round((data.Distance + Number.EPSILON) * 100) / 100;
        p2Node.innerText = '公里';

        stobckBoxDataDistanceDataNode.appendChild(pNode);
        stobckBoxDataDistanceDataNode.appendChild(pDistanceNode);
        stobckBoxDataDistanceDataNode.appendChild(p2Node);
        stobckBoxDataDistanceNode.appendChild(stobckBoxDataDistanceDataNode);
        stobckBoxDataNode.appendChild(stobckBoxDataDistanceNode);

        ulNode.className = 'stock-box__detail';
        stockBoxNode.className = 'stock-box';

        title.forEach(item => {
            const liNode = document.createElement('li');
            const titleNode = document.createElement('span');
            titleNode.innerText = `${item}: `;
            titleNode.className = 'stock-box__title'
            liNode.appendChild(titleNode);

            if (item !== '地址') {
                const textNode = document.createElement('span');
                textNode.innerText = data[titleToKey[item]];
                liNode.appendChild(textNode);
            } else {
                const aNode = document.createElement('a');
                aNode.innerText = data[titleToKey[item]];
                aNode.href = data.Map;
                aNode.target = '_blank';
                liNode.appendChild(aNode);
            }

            ulNode.appendChild(liNode);
        });

        stockBoxNode.appendChild(ulNode);
        stockBoxNode.appendChild(stobckBoxDataNode);

        return stockBoxNode;
    }

    function changeCityOption(event) {
        const newCity = event.target.value;

        setDistOption(newCity);
        selectArea(newCity, '', '');
        setShowing();
    }

    function changeDistOption(event) {
        const newDist = event.target.value;
        const city = document.getElementById('city').value;

        selectArea(city, newDist, '');
        setShowing();
    }

    function setDistOption(city) {
        const distDom = document.getElementById('dist');
        const newDists = cityToDist[city];

        
        clearAllDist();
        newDists.forEach(dist => distDom.options.add(new Option(dist, dist)));
    }

    function clearAllDist() {
        const distDom = document.getElementById('dist');
        distDom.options.length = 0;
    }

    function distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist;
        }
    }

    function checkNearlySpace() {
        let minDistance = Infinity;
        let tmpMinDistance = 0;

        showPharmacyData.forEach((data) => {
            tmpMinDistance = distance(latitude, longitude, data.Latitude, data.Longitude, 'K');

            if (minDistance > tmpMinDistance) {
                minDistance = tmpMinDistance;
                nearlySpace = data;

            }
        });

        console.log(nearlySpace);
        console.log(minDistance);
        console.log(latitude);
        console.log(longitude);
    }

    function getUserArea() {
        const distWordLengthArray = [3, 2, 4];
        const address = pharmacyData[0].Address;
        userCity = address.substring(0, 3);
        
        for (let index = 0; index < distWordLengthArray.length; index++) {
            const distLength = distWordLengthArray[index];
            tmpDist = address.substring(3, (3 + distLength));

            if (cityToDist[userCity].indexOf(tmpDist) !== -1) {
                userDist = tmpDist;
                break;
            }
        }
    }
})();
