Rails.application.routes.draw do
  namespace :api do 
    resources :locations do 
      resources :trips 
      end
      resources :trips do 
        resources :addresses
    end
  end
  get '*other', to: 'static#index'
end
