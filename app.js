$(function (event){
    var active = true;
    const combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ];

    $('td').click(function(event) {
        //console.log(event);
        if (event.target.className != 'selected'){
            this.className = 'selected';
            console.log(event.target.dataset.num);
        }
        else {
        }
        //console.log(event.target.className);
        //console.log(event.target.dataset.num);

    });
}); 