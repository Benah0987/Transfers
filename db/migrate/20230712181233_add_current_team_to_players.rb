class AddCurrentTeamToPlayers < ActiveRecord::Migration[7.0]
  def change
    add_column :players, :current_team, :string
  end
end
