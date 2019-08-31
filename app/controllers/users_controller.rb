class UsersController < ApplicationController
  def edit
  end

  def show
    @name = current_user.name
    @level = current_user.level
    @hp = current_user.hp
    @attack = current_user.attack
    @posts = current_user.posts.page(params[:page]).per(5).order("created_at DESC")
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def battle
    
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
