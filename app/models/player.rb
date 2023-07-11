class Player < ApplicationRecord
    belongs_to :team
    has_many :transfers
  end
  