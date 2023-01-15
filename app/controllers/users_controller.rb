class UsersController < ApplicationController

  def create #signup
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show #Get current user
    
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
  
end
