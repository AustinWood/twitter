const APIUtil = require('./api_util.js')

class FollowToggle {
  constructor($el) {
    this.el = $el;
    this.userId = $el.data('user-id');
    this.followState = $el.data('follow-state');
    $el.on("click", this.handleClick.bind(this));
    this.render.bind(this)();
  }

  handleClick(e) {
    e.preventDefault();

    if (this.followState === "unfollowed"){
      APIUtil.followUser(this.userId)
        .then(this.successClick.bind(this))
    } else {
      APIUtil.unfollowUser(this.userId)
        .then(this.successClick.bind(this))
    }

  }



  successClick(){
    if (this.followState === "followed"){
      this.followState = "unfollowed"
    }
    else{
      this.followState = "followed"
    }
    this.render.bind(this)();
  }

  render(){
    let text = ""
    if (this.followState === "followed"){
      text = "unfollow"
    }
    else{
      text = "follows"
    }
    this.el.text(text)
  }
}


module.exports = FollowToggle;
