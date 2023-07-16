class AddTransferTeamIdToTransfers < ActiveRecord::Migration[7.0]
  def change
    add_column :transfers, :transfer_team_id, :string
  end
end
