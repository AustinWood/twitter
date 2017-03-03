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
        .then(this.test1)
        .then(this.test2)
        .then(this.test3)
        .fail(this.failTest)
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

  test1(){
    console.log("test1");
  }

  test2(){
    console.log("test2");
    throw 'ERROR'
  }

  test3(){
    console.log("test3");
  }

  failTest(){
    console.log('fail message');
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
