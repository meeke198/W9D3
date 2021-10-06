class FollowToggle { 
    constructor (el) {
        const $el = $(el);
        this.userId = $el.attr("user-id")
        this.followState = $el.attr("initial-follow-state");
    }
}

module.exports = FollowToggle;