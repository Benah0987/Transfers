Rails.application.routes.draw do
  resources :players, except: [:new, :edit] do
    resources :transfers, only: [:create]
  end

  resources :teams, only: [:create]
end
