class UsersController < ApplicationController

  def create #signup
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user
    else
      # using activeRecord to get errors
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show #Get current user
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not Authorized" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
  
end
