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

    //find the form that is being submitted and create a formHandler object
    let formHandler = new FormHandler(FORM_SELECTOR);
    //find the checklist that is being updated and create a CheckList object
    let checkList = new CheckList(CHECKLIST_SELECTOR);

    //when a checkbox is clicked, call "deliverOrder" on myTruck
    checkList.addClickHandler(myShop.deliverOrder.bind(myShop));
    
    //when the submit button is called, create the order and add a checkbox
    formHandler.addSubmitHandler(function (data) {
        myShop.createOrder.call(myShop, data);
        checkList.addRow.call(checkList, data);
    });

})(window);
