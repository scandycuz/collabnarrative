Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :update]
    resources :session, only: [:create, :destroy, :show]
  end
end
