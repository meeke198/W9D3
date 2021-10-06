class FollowToggle { 
    constructor (el) {
        const $el = $(el);
        this.userId = $el.attr("user-id")
        this.followState = $el.attr("initial-follow-state");
    }

    render () {
        if (this.followState === "unfollowed") {
            this.$el.html("Follow!");
        } else if (this.followState === "followed") {
            this.$el.html("Unfollow!");
        }
    }
}



module.exports = FollowToggle;