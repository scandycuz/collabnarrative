Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update]
    resources :stories, only: [:index, :update]
    resources :fragments, only: [:create, :index]
    resources :votes, only: [:create, :destroy]
  end
end
