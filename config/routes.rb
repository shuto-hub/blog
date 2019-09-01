Rails.application.routes.draw do
  devise_for :users
  root to: 'posts#index'
  get 'posts/new' => 'posts#new'
  post 'posts'    => 'posts#create'
  delete 'posts/:id'=> 'posts#destroy'
  patch   'posts/:id'  => 'posts#update'
  get   'posts/:id/edit'  => 'posts#edit'
  resources :users, only: [:edit, :update, :show, :destroy] do
    get 'battle' => 'users#battle'
  end
end
