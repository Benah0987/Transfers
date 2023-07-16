class TransfersController < ApplicationController
  skip_before_action :verify_authenticity_token

  # POST /transfers
  def create
    transfer = Transfer.new(transfer_params)
    if transfer.save
      render json: transfer, status: :created
    else
      render json: transfer.errors, status: :unprocessable_entity
    end
  end

  private
  
  def transfer_params
    params.permit(:player_id, :transfer_date, :transfer_fee, :transfer_team, :team_id)
          .transform_keys { |key| key == 'transfer_team' ? 'transfer_team_id' : key }
  end
  
end
