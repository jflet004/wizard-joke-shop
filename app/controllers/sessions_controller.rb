class SessionsController < ApplicationController

  def create #login
    user = User.fint_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :creted
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def destroy #logout

  end

end
