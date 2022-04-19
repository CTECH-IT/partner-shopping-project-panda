(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-panda-order="form"]';
    const CHECKLIST_SELECTOR = '[data-panda-order="checklist"]';

    let App = window.App;
    let Shop = App.Shop;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;

    let myShop = new Shop('12345', new DataStore());
    window.myShop = myShop;

     // if (FormHandler !== undefined) {
       // let formHandler = new FormHandler(FORM_SELECTOR);

       // formHandler.addSubmitHandler(function (data) {
       //     myCart.createOrder.call(myShop, data);
       // });
    if (CheckList !== undefined) {
        let checkList = new CheckList(CHECKLIST_SELECTOR);

        remoteDS.getAll((orders) => {
            for (let order of Object.values(orders)) {
                checkList.addRow(order);
            }
        })
    }

    checkList.addClickHandler(myShop.deliverOrder.bind(myShop));


})(window);