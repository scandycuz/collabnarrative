export const signup = (user, success, error) => {
  $.post({
    url: 'api/user',
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
  $.delete({
    url: `api/session`,
    success,
    error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
    }
  })
}
