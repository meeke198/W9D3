const FollowToggle = require('./follow_toggle');

$( () => {
    let followBtns = $(".follow-toggle");
    followBtns.each(index, function () {
        new FollowToggle(this);
    })
});