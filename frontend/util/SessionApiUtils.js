export const signup = (user, success, error) => {
  $.post({
    url: 'api/users',
    data: user,
    success,
    error
  })
}

export const login = (user, success, error) => {
  $.post({
    url: 'api/session',
    data: user,
    success,
    error
  })
}

export const logout = success => {
  $.ajax({
    url: `api/session`,
    type: 'delete',
    success,
    error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
    }
  })
}
