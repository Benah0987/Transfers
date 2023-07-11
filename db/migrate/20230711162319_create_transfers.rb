class CreateTransfers < ActiveRecord::Migration[7.0]
  def change
    create_table :transfers do |t|
      t.references :player, null: false, foreign_key: true
      t.references :team, null: false, foreign_key: true
      t.date :transfer_date
      t.integer :transfer_fee

      t.timestamps
    end
  end
end
