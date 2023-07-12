class TransfersController < ApplicationController
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
      param.permit(:player_id, :team_id, :transfer_date, :transfer_fee)
    end
  end
  