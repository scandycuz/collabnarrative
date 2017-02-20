class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(:fragments).find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      p @user
      login!(@user)
      render "/api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Already logged out"], status: 404
    end
  end
end
