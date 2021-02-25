var saveButton = document.getElementsByClassName("saveBtn");
var display;
var data = {};
var input;

$('.saveBtn').on("click", function(event){
    event.preventDefault()
    var timeBlock = $(this).siblings().val()
    var button = $(this).data("input")
    data[button] = timeBlock;
    localStorage.setItem("time-block", JSON.stringify(data));
    console.log($(this).siblings().val())
    console.log(data)

})

function loadItems() {
    var dataFromStrorage = JSON.parse(localStorage.getItem("time-block"));
    nineAm.setAttribute("value", dataFromStrorage.nine);
    tenAm.setAttribute("value", dataFromStrorage.ten);
    eleAm.setAttribute("value", dataFromStrorage.ele);
    twePm.setAttribute("value", dataFromStrorage.twe);
    onePm.setAttribute("value", dataFromStrorage.one);
    twoPm.setAttribute("value", dataFromStrorage.two);
    threePm.setAttribute("value", dataFromStrorage.three);
    fourPm.setAttribute("value", dataFromStrorage.four);
    fivePm.setAttribute("value", dataFromStrorage.five);
}
loadItems();