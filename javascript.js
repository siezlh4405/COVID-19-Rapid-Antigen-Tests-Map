(() => {
    const pharmacyData = [];
    let showPharmacyData = [];

    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "Fstdata.csv",
            dataType: "text",
            success: setStockData,
         });
    });
    
    function setStockData(csvData) {
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
            }
    
            pharmacyData.push(tmpData);
        }
    
        selectArea('屏東縣', '屏東市', '');
        console.log(showPharmacyData);
        setShowing();
    }

    function selectArea(city = '', dist = '', road = '') {
        showPharmacyData = pharmacyData.filter(data => data.Address.indexOf(city) !== -1)
        .filter(data => data.Address.indexOf(dist) !== -1)
        .filter(data => data.Address.indexOf(road) !== -1);
    }

    function setShowing() {
        const stockContainer = document.querySelector('.stock-container');
        showPharmacyData.forEach(data => stockContainer.appendChild(getStockBoxNode(data)));
    }

    function getStockBoxNode(data) {
        const title = ['名稱', '地址', '電話', '快篩品牌', '庫存數量', '更新時間', '備註'];
        const titleToKey = {'名稱': 'Name', '地址': 'Address', '電話': 'Phone', '快篩品牌': 'Brand', '庫存數量': 'Stock', '更新時間': 'Time', '備註': 'Note'};
        const stockBoxNode = document.createElement('div');
        const ulNode = document.createElement('ul');

        stockBoxNode.className = 'stock-box';

        title.forEach(item => {
            const liNode = document.createElement('li');
            const titleNode = document.createElement('span');
            const textNode = document.createElement('span');
            titleNode.innerText = `${item}: `;
            titleNode.className = 'stock-box__title'
            textNode.innerText = data[titleToKey[item]];
            liNode.appendChild(titleNode, );
            liNode.appendChild(textNode);
            ulNode.appendChild(liNode);
        });

        stockBoxNode.appendChild(ulNode);

        return stockBoxNode;
    }
})();
