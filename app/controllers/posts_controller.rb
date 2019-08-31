class PostsController < ApplicationController
  def index
    @posts = Post.includes(:user).page(params[:page]).per(9)
  end

  def new
    @posts = Post.new
  end

  def create
    Post.create(title: post_params[:title], text: post_params[:text], user_id: current_user.id)
    redirect_to root_path
  end

  def destroy
    post = Post.find(params[:id])
    if post.user_id == current_user.id
      post.destroy
    end
    redirect_to root_path
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    post = Post.find(params[:id])
    if post.user_id == current_user.id
      post.update(post_params)
    end
    redirect_to root_path
  end

  private
  def post_params
    params.require(:post).permit(:title, :text)
  end
end
