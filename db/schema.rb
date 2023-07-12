# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_11_162319) do
  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "stamina"
    t.integer "physical"
    t.integer "pace"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transfers", force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "team_id", null: false
    t.date "transfer_date"
    t.integer "transfer_fee"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_transfers_on_player_id"
    t.index ["team_id"], name: "index_transfers_on_team_id"
  end

  add_foreign_key "transfers", "players"
  add_foreign_key "transfers", "teams"
end
