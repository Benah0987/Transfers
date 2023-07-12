class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.integer :stamina
      t.integer :physical
      t.integer :pace

      t.string   :image

      t.timestamps
    end
  end
end
