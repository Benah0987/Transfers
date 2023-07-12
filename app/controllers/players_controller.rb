class PlayersController < ApplicationController
  skip_before_action :verify_authenticity_token

  # GET /players
  def index
    players = Player.all
    render json: players, include: [:team]
  end

  # GET /players/:id
  def show
    player = Player.find(params[:id])
    render json: player, include: [:team]
  end

  # POST /players
  def create
    player = Player.new(player_params)
    if player.save
      render json: player, status: :created
    else
      render json: player.errors, status: :unprocessable_entity
    end
  end

  # PATCH /players/:id
  def update
    player = Player.find(params[:id])
    if player.update(player_params)
      render json: player
    else
      render json: player.errors, status: :unprocessable_entity
    end
  end

  # DELETE /players/:id
  def destroy
    player = Player.find(params[:id])
    player.destroy
    head :no_content
  end

  private

  def player_params
    params.permit(:name, :age, :current_team, :image, :stamina, :pace)
  end
end
