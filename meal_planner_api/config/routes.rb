Rails.application.routes.draw do
  root 'wecome#index'
  resources :meals
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
