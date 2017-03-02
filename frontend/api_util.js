const APIUtil = {
  followUser: (id) => {
    return fetchFollow(id, "POST")
  },

  unfollowUser: id => {
    return fetchFollow(id, "DELETE")
  }
}



const fetchFollow = (id, method) => {
  return $.ajax({
    method: method,
    url: `/users/${id}/follow`,
    dataType: "json",
    data: $(this.el).serialize()
  })
}





module.exports = APIUtil;
