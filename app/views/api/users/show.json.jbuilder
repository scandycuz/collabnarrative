json.partial! 'api/users/user', user: @user
json.partial! 'api/users/fragments', fragments: @user.fragments
