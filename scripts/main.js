(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-panda-order="form"]';
    const CHECKLIST_SELECTOR = '[data-panda-order="checklist"]';
    const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';

    let App = window.App;
    let Shop = App.Shop;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let RemoteDataStore = App.RemoteDataStore;

    let remoteDS = new RemoteDataStore(SERVER_URL);

    let myShop = new Shop('12345', new RemoteDataStore(SERVER_URL));
    window.myShop = myShop;

    if (FormHandler !== undefined) {
        let formHandler = new FormHandler(FORM_SELECTOR);

        formHandler.addSubmitHandler(function (data) {
            myShop.createOrder.call(myShop, data);
        });
    } //else if (CheckList !== undefined) {
       // let checkList = new CheckList(CHECKLIST_SELECTOR);

       // remoteDS.getAll((orders) => {
        //    for (let order of Object.values(orders)) {
       //         checkList.addRow(order);
        //    }
       // })
   // }

    //checkList.addClickHandler(myShop.deliverOrder.bind(myShop));

})(window);
