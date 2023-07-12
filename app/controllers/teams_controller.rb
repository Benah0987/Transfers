class TeamsController < ApplicationController
    skip_before_action :verify_authenticity_token
    # POST /teams
    def create
      team = Team.new(team_params)
      if team.save
        render json: team, status: :created
      else
        render json: team.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def team_params
      params.permit(:name, :image)
    end
  end
  